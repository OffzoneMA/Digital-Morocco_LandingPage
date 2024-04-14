import createStorage from "../Controller/Tools/Helper/Local";
import { DEV_MODE } from "../config";


/**
 * Storage  
 * 
 */
const storage = {

    /**
     * Theme 🎨
     * 
     */
    theme: createStorage<string>('theme', null!),

    /**
     * Language 🌐
     * 
     */
    language: createStorage<string>('language', null!),

    /**
     * User 🤵🏻
     * 
     */
    user: {

        /**
         * Token 🔑
         * 
         */
        token: createStorage<string>('user.token', null!)
    },

    /**
     * Headers
     * 
     */
    headers: createStorage<Record<string, string>>('headers', {}),

    /**
     * Translate
     * 
     */
    translate: createStorage<Record<string, string>>('translate', {})
}


// Share to window
if (DEV_MODE) (window as any).storage = storage;

export default storage;