import React from 'react';


/**
 * Form
 * 
 * @returns 
 */
function Form<Template extends Params = Params>({ children, onSubmit, ...restProps }: Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
    onSubmit: (params: Template) => void;
}) {

    /**
     * Submit method
     * 
     */
    const submit = (event: React.FormEvent) => {

        // Disable default event
        event.preventDefault();

        // Get form data
        const formData = new FormData(event.target as HTMLFormElement);

        // Define params
        const params: Params = {};

        // Set params
        formData.forEach((value, key) => {
            params[key] = value;
        })

        onSubmit(params as Template);
    }

    return <form {...restProps} onSubmit={submit}>{children}</form>;
}


/**
 * Params type
 * 
 */
type Params = Record<string, string | number | File>;

export default Form;