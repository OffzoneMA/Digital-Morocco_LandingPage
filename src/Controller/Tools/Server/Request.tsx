import Axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import storage from "../../../Store/storage";
import { DEV_MODE, config } from "../../../config";
import { default as ApiRequestInterface } from '../../Interfaces/ApiRequest';
import ApiResponse, { ApiResponseCallback } from '../../Interfaces/ApiResponse';


/**
 * HTTP_SERVER
 * 
 */
export const HTTP_SERVER: Readonly<string> = DEV_MODE ? config.HTTP_DEV_SERVER : config.HTTP_SEREVER;

/**
 * HTTP_API_BASE
 * 
 */
export const HTTP_API_BASE: Readonly<string> = HTTP_SERVER + config.BASE_API_URI;


/**
 * Instance
 * 
 * @returns
 */
export const instance = () => Axios.create({
    baseURL: HTTP_API_BASE,
    headers: {
        "Authorization": storage.user.token.read,
        ...storage.headers.read
    }
})


/**
 * API request method
 * 
 */
export function apiRequest<ResData = any, ReqData = any>({
    api,
    data,
    method,
    onNotif,
    onFinally,
    onResponse,
    ...status
}: ApiRequestInterface<ResData, ReqData>) {

    // Make request
    instance().request<ApiResponse<ResData>>({
        url: api,
        data: data,
        method: method ?? 'POST',
    }).then(({ data: body }) => {

        try {

            // Response
            const response: Parameters<ApiResponseCallback<ResData>>[0] = {
                isSuccess: config.API_STATUS[body.status].isSuccess ?? false,
                body: body,
                notif: {
                    message: body.message ? body.message : body.status,
                    status: config.API_STATUS[body.status].notif
                }
            }

            // Call onResponse callback
            if (onResponse) onResponse(response);

            // Call status callback
            const onStatus = status[`on${body.status}`];
            if (onStatus) onStatus(response);

            // Call onNotif callback
            if (onNotif) onNotif(response.notif.message, response.notif.status);
        } catch { }
    }).catch(error => {

        // Response
        const response: Parameters<ApiResponseCallback<ResData>>[0] = {
            isSuccess: false,
            body: { status: 'ERROR', message: String(error), data: null! },
            notif: { message: String(error), status: 'error' }
        }

        // Call onResponse callback
        if (onResponse) onResponse(response);

        // Call onERROR callback
        if (status.onERROR) status.onERROR(response)

        // Call onNotif callback
        if (onNotif) onNotif(response.notif.message, response.notif.status);
    }).finally(onFinally);
}


/**
 * API request
 * 
 * @returns 
 */
export default function ApiRequest<ResData = any, ReqData = any>({
    children,
    ...restProps
}: Omit<ApiRequestInterface<ResData, ReqData>, 'onResponse'> & {
    children: (props?: Parameters<ApiResponseCallback<ResData>>[0] & {
        reload: () => void
    }) => ReactNode
}) {

    /**
     * Response
     * 
     */
    const [response, setResponse] = useState<Parameters<ApiResponseCallback<ResData>>[0]>()

    /**
     * Send method
     * 
     */
    const send = () => apiRequest({ ...restProps, onResponse: setResponse })

    /**
     * Reload method
     * 
     */
    const reload = () =>  `${setResponse(undefined)} ${send()}`;

    /**
     * On load
     * 
     */
    useEffect(send, [])

    return <React.Fragment>{children(response ? { ...response, reload } : undefined)}</React.Fragment>
}