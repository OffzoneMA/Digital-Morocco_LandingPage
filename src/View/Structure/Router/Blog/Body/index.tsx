import React from 'react'
import styled from 'styled-components';
import List from './List';
import Sidebar from './Sidebar';

/**
 * Body
 * 
 * @returns 
 */
const Body = () => {

    return (
        <Container>
            <List />
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

    // Media queries
    @media (max-width: 1200px) {
        width: calc(100% - 30px);
        gap: 40px;
    }

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    @media (max-width: 768px) {
        padding-block: 30px;
    }

    @media (max-width: 576px) {
        padding-block: 20px;
        width: calc(100% - 20px);
    }
`;