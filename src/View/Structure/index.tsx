import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Portions/Header'
import Router from './Router'
import Footer from './Portions/Footer'
import Notifs from './Portions/Notifs'
import Scroller from './Portions/Scroller'
import Dialog from './Portions/Dialog'
import ScrollToTop from '../Components/ScrollToTop'

/**
 * Structure 🏗️
 * 
 * @returns 
 */
const Structure = () => {

    return (
        <BrowserRouter>
          <ScrollToTop>
            <Container>
                <Header />
                <Router />
                <Footer />
                <Dialog />
                <Notifs />
                <Scroller />
            </Container>
          </ScrollToTop>
        </BrowserRouter>
    )
}

export default Structure


/**
 * Container
 * 
 */
const Container = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
`;