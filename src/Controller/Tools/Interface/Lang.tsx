import React, { useContext, ReactNode, Fragment, createContext, useEffect, useState } from "react"

/**
 * Language
 * 
 * @returns 
 */
const Language = ({
    children,
    dictionary,
    loading,
    onError
}: {
    children: ReactNode,
    dictionary: Promise<{
        default: { [key: string]: string };
    }>,
    loading?: ReactNode,
    onError?: (error: string) => ReactNode
}) => {

    /**
     * Parent
     * 
     */
    const parent = useContext(Dictionary);

    /**
     * Error state
     * 
     */
    const [error, setError] = useState<string>();

    /**
     * Words state
     * 
     */
    const [words, setWords] = useState<{ [key: string]: string }>();

    /**
     * Is loading
     * 
     */
    const isLoading = words === undefined && error === undefined;

    /**
     * On load
     * 
     */
    useEffect(() => {

        // Dictionary fetch
        dictionary
            .then(data => setWords(data.default))
            .catch(error => {

                // Set error
                setError(String(error))

                // throw if not found catching 
                if (!onError) throw error;
            })
    }, [])

    return <Fragment>
        {isLoading ? loading :
            error ? onError ? onError(error) : undefined :
                <Dictionary.Provider value={{ ...parent, ...words }}>
                    {children}
                </Dictionary.Provider>}
    </Fragment>
}


/**
 * useLang hook
 * 
 */
export const useLang = (): (sentence: string) => string => {

    /**
     * Words
     * 
     */
    const words = useContext(Dictionary);

    return sentence => {

        // Save
        // storage.translate.update(translate => ({ ...translate, [sentence.replaceAll(' ', '_') + 'hexoldi98']: sentence }))

        // Define params
        let params: { [key: string]: string } = {};

        // Search dynamique params
        const matches = sentence.match(/--(\w+)='(.*?)'/g);

        // Export params
        if (matches)
            matches.forEach(match => {
                const data = match.match(/--(\w+)='(.*?)'/);
                if (data) {
                    params[data[1]] = data[2];
                    sentence = sentence.replace(match, `:${data[1]}`);
                }
            });

        // Serach sentence in words
        var translatedSentence = words[sentence] ?? sentence;

        // Update with dynamique params
        for (var key in params)
            translatedSentence = translatedSentence.replace(`:${key}`, params[key]);

        return translatedSentence;
    }
}


/**
 * Lang
 * 
 */
export const Lang = React.memo(({ children }: { children: string }) => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return <Fragment>{lang(children)}</Fragment>
})


/**
 * Dictionary context
 * 
 */
const Dictionary: React.Context<{ [key: string]: string }> = createContext({});

export default Language