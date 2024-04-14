import { config } from "../../config";
import Notif from "./Notif";

/**
 * Api status type
 * 
 */
export type ApiStatus = keyof typeof config.API_STATUS;


/**
 * Api response interface
 * 
 */
export default interface ApiResponse<ResData = any> {
    status: ApiStatus
    message: string | null
    data: ResData
}

/**
 * Api response callback
 * 
 */
export type ApiResponseCallback<ResData = any> = ((props: {
    isSuccess: boolean
    body: ApiResponse<ResData>
    notif: Notif
}) => void)