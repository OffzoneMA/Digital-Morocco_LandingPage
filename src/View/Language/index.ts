import catalog from './catalog.json';
import storage from "../../Store/storage"


/**
 * Languages 📋🔠
 * 
 */
export const languages: {
    code: string,
    name: string,
    direction?: string,
    isDfault?: boolean,
    flag?: string
}[] = catalog;


/**
 * Language 🔠
 * 
 */
export const language = (

    // Get from storage
    storage.language.read ??

    // Get from navigator with country
    languages.find(item => item.code === window.navigator.language)?.code ??

    // Get from navigator without country 
    languages.find(item => item.code.slice(0, 2) === window.navigator.language.slice(0, 2))?.code ??

    // Get default
    languages.find(item => item.isDfault)?.code ??

    // Get first
    languages[0].code
)


/**
 * Direction ⬅️➡️
 * 
 */
export const direction = catalog.find(item => item.code === language)?.direction ?? 'ltr';


/**
 * Change lang 🔄🌐
 * 
 */
export const changeLang = (language: string) => {

    // Change in storage 💾
    storage.language.update(language)

    // Refresh window ↻
    window.location.reload()
}