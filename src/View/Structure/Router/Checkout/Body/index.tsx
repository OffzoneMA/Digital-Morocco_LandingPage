import React from 'react'
import styled from 'styled-components';
import Content from './Content';
import Sidebar from './Sidebar';

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
    padding-block: 150px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 290px;
    gap: 50px;

    // Media
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;