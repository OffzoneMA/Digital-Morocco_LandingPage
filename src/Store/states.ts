import createState from 'creeks';
import { DEV_MODE } from '../config';
import { theme } from '../View/Appearance/theme';
import { UserInterface } from '../Application/User';
import { HeaderType } from '../View/Structure/Portions/Header/headers';

/**
 * States
 * 
 */
const states = {

    /**
     * Theme 🎨
     * 
     */
    theme: createState<string>(theme),

    /**
     * Auth 🔓
     * 
     */
    auth: createState<Partial<UserInterface>>({}),

    /**
     * Header
     * 
     */
    header: createState<HeaderType>('interface')
}

// Share to window
if (DEV_MODE) (window as any).states = states;

export default states;