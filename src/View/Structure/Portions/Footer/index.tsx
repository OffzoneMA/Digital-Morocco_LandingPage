import React from 'react'
import styled from 'styled-components'
import Links from './Links'
import About from './About'
import Copyright from './Copyright'


/**
 * Footer
 * 
 * @returns 
 */
const Footer = () => {

    return (
        <Container>
            <div id="content">
                <Links />
                <About />
                <Copyright />
            </div>
        </Container>
    )
}

export default Footer


/**
 * Container
 * 
 */
const Container = styled.div`
    background-color: white;
    position: relative;
    border-top: var(--border-section);
    font-size: 15px;

    > #content {
        max-width: var(--content-width);
        width: calc(100% - 50px);
        margin: auto;
        padding-block: 15px;
    }
`;