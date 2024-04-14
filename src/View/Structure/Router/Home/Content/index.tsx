import React from 'react'
import styled from 'styled-components'
import WhoAreWe from './WhoAreWe'
import Discover from './Discover'
import Experience from './Experience'
import Activities from './Activities'

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    return (
        <Container>
            <WhoAreWe />
            <Discover />
            <Experience />
            <Activities />
        </Container>
    )
}

export default Content


/**
 * Container
 * 
 */
const Container = styled.div`
    margin-top: 100vh;
    display: grid;
    background-color: white;
    position: relative;
    padding-block: 30px;
    font-family: DMSans-Medium;
`;