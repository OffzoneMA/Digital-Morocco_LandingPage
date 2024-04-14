import React, { ComponentProps } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// @ts-ignore
import LogoFull from '../Media/Logo/full.svg'
// @ts-ignore
import LogoWhite from '../Media/Logo/white.svg'

/**
 * Logo
 * 
 * @returns 
 */
const Logo = ({ type, ...rest }: Omit<ComponentProps<typeof Container>, 'src' | 'alt' | 'loading'> & {
    type: LogoType
}) => {

    return (
        <Link to='/'>
            <Container {...rest} src={types[type]} alt='' loading='lazy' />
        </Link>
    )
}

export default Logo


/**
 * Container
 * 
 */
const Container = styled.img`
    user-select: none;
    pointer-events: none;
`;

/**
 * Types
 * 
 */
const types: Record<LogoType, string> = {
    full: LogoFull,
    white: LogoWhite
}

/**
 * Logo type type
 * 
 */
export type LogoType = 'full' | 'white';