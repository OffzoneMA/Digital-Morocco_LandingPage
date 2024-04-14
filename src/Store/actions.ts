import createAction from "../Controller/Tools/Helper/Action";
import { DialogMethod } from "../View/Structure/Portions/Dialog";
import { DEV_MODE } from "../config";


/**
 * Actions
 * 
 */
const actions = {

    /**
     * Notif
     * 
     */
    notif: createAction<(message: string) => void>(),

    /**
     * Dialog
     * 
     */
    dialog: createAction<DialogMethod>()
}


// Share to window
if (DEV_MODE) (window as any).actions = actions;

export default actions;