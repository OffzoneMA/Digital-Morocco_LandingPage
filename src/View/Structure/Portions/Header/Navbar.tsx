import React from 'react'
import styled from 'styled-components'
import { useHeader } from './headers'
import Links from './Links'

/**
 * Navbar
 * 
 * @returns 
 */
const Navbar = () => {

    /**
     * Header
     * 
     */
    const header = useHeader()

    return (
        <Container $color={header.color} className='animation'>
            <Links />
        </Container>
    )
}

export default Navbar


/**
 * Container
 * 
 */
const Container = styled.div<{
    $color: string
}>`
    display: flex;
    gap: 40px;

    > a {
        text-decoration: none;
        color: ${p => p.$color};

        &:hover {
            color: var(--color-green);
        }

        &.active {
            color: var(--color-green);
            font-family: DMSans-Medium;
        }
    }
`;