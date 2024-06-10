import React from 'react'
import styled from 'styled-components';
import Content from './Content';
import Sidebar from './../../Blog/Body/Sidebar';

/**
 * Body
 * 
 * @returns 
 */
const Body = () => {

    return (
        <Container>
            <Content />
            <Sidebar />
        </Container>
    )
}

export default Body

/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 50px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 50px;

    // Media
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding-block: 40px;
    }

    @media (max-width: 468px) {
        padding-block: 15px;
        gap: 30px;
    }
`;