import { default as LogoImg } from '../../../Components/Logo'
import { useHeader } from './headers'
import React from 'react'

/**
 * Navbar
 * 
 * @returns 
 */
const Logo = () => {

    /**
     * Header
     * 
     */
    const header = useHeader()

    return <LogoImg className='animation' type={header.logo} width='148' />
}

export default Logo