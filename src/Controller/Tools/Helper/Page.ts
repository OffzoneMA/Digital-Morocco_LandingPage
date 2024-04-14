import { useEffect } from "react"


/**
 * usePage hook
 * 
 */
export const usePage = ({ title, ...metadata }: Partial<HeadInterface> = {}): MethodsInterface => {

    /**
     * Set title method
     * 
     */
    const setTitle: MethodsInterface['setTitle'] = (title) => {

        // Set title
        document.title = title;
    }

    /**
     * Set metadata method
     * 
     */
    const setMetadata: MethodsInterface['setMetadata'] = (name, value) => {

        // Set data
        const metaElement = document.querySelector(`meta[name="${name}"]`);
        if (metaElement) metaElement.setAttribute("content", value);
    }


    /**
     * On load
     * 
     */
    useEffect(() => {

        // Set title
        if (title) setTitle(title);

        // Set metadata
        Object.keys(metadata).forEach(name => {

            // Get value
            let value = metadata[name as keyof MetaInterface];

            // set value
            if(value) setMetadata(name as keyof MetaInterface, value)
        })
    }, [])

    return { setTitle, setMetadata }
}


/**
 * MethodsInterface
 * 
 */
interface MethodsInterface {
    setTitle: (title: string) => void
    setMetadata: (name: keyof MetaInterface, value: string) => void
}

/**
 * Head interface
 * 
 */
interface HeadInterface extends MetaInterface {
    title: string
}

/**
 * Meta interface
 * 
 */
interface MetaInterface {
    description: string
    keywords: string
    author: string
}