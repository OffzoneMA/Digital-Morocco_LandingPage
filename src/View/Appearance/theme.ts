import catalog from './catalog.json';
import states from "../../Store/states"
import storage from "../../Store/storage"


/**
 * Themes 📋🖌️
 * 
 */
export const themes: {
    code: string,
    name: string,
    isDfault?: boolean,
    colorScheme?: string
}[] = catalog;


/**
 * Color scheme 🌻
 * 
 */
export const colorScheme = window.matchMedia ? (
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' :
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null
) : null;


/**
 * Theme 🎨
 * 
 */
export const theme = (

    // Get from storage
    storage.theme.read ??

    // Get from navigator with country
    themes.find(item => item.colorScheme === colorScheme)?.code ??

    // Get default
    themes.find(item => item.isDfault)?.code ??

    // Get first
    themes[0].code
)


/**
 * Change theme 🌘 🔅
 * 
 */
export const changeTheme = (theme: string) => {

    // Change in states
    states.theme.update(theme)

    // Change in storage 💾
    storage.theme.update(theme)
}