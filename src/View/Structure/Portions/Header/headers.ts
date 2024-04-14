import states from '../../../../Store/states'
import { LogoType } from '../../../Components/Logo'
import { useCopy } from 'creeks'

/**
 * useHeader hook
 * 
 */
export const useHeader = () => {

    /**
     * Header
     * 
     */
    const [header] = useCopy(states.header)

    return headers[header];
}


/**
 * Headers
 * 
 */
export const headers: Record<HeaderType, HeaderInterface> = {
    interface: {
        name: 'interface',
        logo: 'white',
        color: 'white',
        stroke: 'var(--color-green)',
        background: 'var(--rgb-dark)',
        signStrok: "rgb(255, 255, 255, 50%)",
        navBackground: 'transparent'
    },
    scroll: {
        name: 'scroll',
        logo: 'white',
        color: 'white',
        stroke: 'var(--color-green)',
        background: 'var(--rgb-dark)',
        signStrok: "rgb(255, 255, 255, 50%)",
        navBackground: '#1F2545'
    },
    global: {
        name: 'global',
        logo: 'full',
        color: 'var(--color-dark)',
        stroke: 'var(--color-dark)',
        signStrok: "rgb(var(--rgb-dark))",
        background: '255, 255, 255',
        navBackground: 'white'
    }
}

/**
 * Header interface
 * 
 */
export interface HeaderInterface {
    name: HeaderType
    logo: LogoType
    color: string
    stroke: string
    background: string
    navBackground: string
    signStrok: string
}


/**
 * Header type
 * 
 */
export type HeaderType = 'global' | 'interface' | 'scroll'