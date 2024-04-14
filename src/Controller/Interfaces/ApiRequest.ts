import { Method } from "axios";
import { ApiResponseCallback, ApiStatus } from "./ApiResponse";

/**
 * Api request interface
 * 
 */
export default interface ApiRequest<ResData = any, ReqData = any> extends Partial<Record<`on${ApiStatus}`, ApiResponseCallback<ResData>>> {
    api: string
    data?: ReqData
    method?: Method
    onResponse?: ApiResponseCallback<ResData>
    onNotif?: (message: string, status: string) => void
    onFinally?: () => void
}