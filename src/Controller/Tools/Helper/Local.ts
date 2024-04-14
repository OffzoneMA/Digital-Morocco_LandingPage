
/**
 * Local is class to management browser local storage
 * 
 */
class Local<Template extends any> {

    /**
     * Container
     * 
     */
    public container: string;

    /**
     * Template
     * 
     */
    public template: Template;


    /**
     * Local constructor
     * 
     */
    public constructor(route: string, template: Template) {

        // Set container
        this.container = (route as any).replaceAll('.', '_');

        // Set template
        this.template = template;

        // BIND METHODS
        this.update = this.update.bind(this)
        this.reset = this.reset.bind(this)
    }

    /**
     * READ GET
     * 
     */
    public get read(): Template {

        // Container
        const container = localStorage[this.container];

        try {

            // Is Object
            if (this.template instanceof Object)
                return JSON.parse(container) as Template;

            // Is Number
            else if (this.template instanceof Number)
                return Number(container) as Template;

            // Is Boolean
            else if (this.template instanceof Boolean)
                return Boolean(container) as Template;

            // Is null
            else if (container === 'null')
                return null as Template;

            else return container ?? this.template;
        } catch {

            // Return default template
            return this.template;
        }
    }

    /**
     * UPDATE METHOD
     * 
     */
    public update(value: Template | ((old: Template) => Template)): void {

        // Real value
        const realValue = value instanceof Function ? value(this.read) : value;

        // Is object
        if (this.template instanceof Object)
            localStorage[this.container] = JSON.stringify(realValue);

        else
            localStorage[this.container] = realValue;
    }

    /**
     * RESET METHOD
     * 
     */
    public reset(): this {

        // Clear
        this.update(this.template);

        return this;
    }
}


/**
 * Create storage method
 * 
 */
export default function createStorage<This extends any>(route: string, template: This): Local<This> {

    return new Local<This>(route, template);
}