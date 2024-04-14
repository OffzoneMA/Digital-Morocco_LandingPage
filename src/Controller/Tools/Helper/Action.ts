import { useEffect } from "react";

/**
 * Action class to share actions
 * 
 */
class Action<Template extends AnyAction = AnyAction> {

    /**
     * Has created
     * 
     */
    private hasCreated: boolean = false;

    /**
     * Action
     * 
     */
    public action?: Template;


    /**
     * Action constructor
     * 
     */
    constructor() {

        /**
         * BIND METHODS
         * 
         */
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
        this.use = this.use.bind(this)
    }

    /**
     * CREATE METHOD
     * 
     */
    public create(action: Template) {

        // Check has created
        if (this.hasCreated) return;

        // Create action
        this.action = action

        // Set has created
        this.hasCreated = true
    }

    /**
     * DELETE METHOD
     * 
     */
    public delete(): void {

        // Check has created
        if (!this.hasCreated) return;

        // Create action
        this.action = undefined;

        // Set has created
        this.hasCreated = false
    }

    /**
     * USE METHOD
     *  
     * @returns 
     */
    public use(...params: Parameters<Template>): ReturnType<Template> {

        return this.action ? this.action(...params) : undefined;
    }
}


/**
 * Create action method
 * 
 */
export default function createAction<This extends AnyAction>(): ((...params: Parameters<This>) => ReturnType<This>) & Action<This> {

    // Action
    const action = new Action<This>()

    return Object.assign(action.use, action)
}


/**
 * Use action hook
 * 
 * @param action 
 * 
 * @returns 
 */
export function useAction<This extends Action>(action: This, value?: This['action']): This['create'] {

    useEffect(() => {

        // Create action
        if (value) action.create(value)

        // Delete action after end component
        return action.delete;
    }, [])

    return action.create
}


/**
 * AnyAction type
 * 
 */
type AnyAction = (...params: any[]) => any;