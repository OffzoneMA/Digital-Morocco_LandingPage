import React, { useEffect, useState, Fragment } from 'react'
import axios, { Method } from 'axios'

/**
 * Fetch
 * 
 * @returns 
 */
function Fetch<Response>({ url, method, params, children }: {
    url: string,
    method?: Method
    params?: Record<string, any>
    children: (props: {
        response?: Response
        reload: () => void
    }) => React.ReactNode
}) {

    /**
     * Response state
     * 
     */
    const [response, setResponse] = useState<Response>()

    /**
     * Reload method
     * 
     * @returns 
     */
    const reload = () => {

        // Clear old response
        setResponse(undefined)

        // Call
        axios.request<Response>({ url, method, params }).then(({ data }) => setResponse(data))
    }

    /**
     * On load
     * 
     */
    useEffect(reload, [url, JSON.stringify(params)])

    return <Fragment>{children({ response, reload })}</Fragment>
}

export default Fetch