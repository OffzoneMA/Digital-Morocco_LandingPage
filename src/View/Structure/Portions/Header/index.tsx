import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'
import Navbar from './Navbar'
import Started from './Started'
import Language from './Language'
import Screen from '../../../../Controller/Tools/Interface/Device'
import states from '../../../../Store/states'
import Menu from './Menu'
import { useHeader } from './headers'


/**
 * Header
 * 
 * @returns 
 */
const Header = () => {

    /**
     * Header state
     * 
     */
    const header = useHeader()

    /**
     * Location
     * 
     */
    const location = useLocation();

    /**
     * This route
     * 
     */
    const thisRoute = location.pathname.split('/')[1];

    /**
     * On change this route
     * 
     */
    useEffect(() => {

        // Set header
        setTimeout(() => {
            if (thisRoute === '') states.header.update('interface');
            else states.header.update('global');
        })

        // Scroll to top
        window.scrollTo({ top: 0 });
    }, [thisRoute])

    return (
        <Container $navBackground={header.navBackground}>
            <Logo />
            <Screen min={1300} available={<Navbar />} />
            <Screen min={1300} available={<Started />} />
            <Screen
                min={1300}
                available={<Language />}
                unavailable={<Menu />}
            />
        </Container>
    )
}

export default Header


/**
 * Container
 * 
 */
const Container = styled.div<{
    $navBackground: string
}>`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 20px 0;
    padding-inline: 100px;
    position: fixed;
    width: -webkit-fill-available;
    z-index: 1;
    background-color: ${p => p.$navBackground};
    transition: 0s;

    // Media
    @media (max-width: 1300px) {
        padding-inline: 15px;
    }
`;