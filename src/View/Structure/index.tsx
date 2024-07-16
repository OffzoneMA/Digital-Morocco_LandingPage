import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Portions/Header'
import Router from './Router'
import Footer from './Portions/Footer'
import Notifs from './Portions/Notifs'
import Scroller from './Portions/Scroller'
import Dialog from './Portions/Dialog'
import ScrollToTop from '../Components/ScrollToTop'
import ViewTicketPDF from '../Components/ViewTicketPDF'
import useCurrentPath from '../Components/useCurrentPath'

const NotFound = lazy(() => import('./Router/NotFound'))

/**
 * Structure 🏗️
 * 
 * @returns 
 */
const Structure = () => {

  const routes: string[] = [
    '/',
    '/about',
    '/feature',
    '/members',
    '/partners',
    '/events',
    '/pricing',
    '/contact',
    '/blog',
    '/post/:id',
    '/event/:id',
    '/checkout/:id',
    '/billing',
    '/thanks',
    '/faq',
    '/terms',
    '/privacy',
    '/legalNotices',
  ];
  
  const matchPath = (path: string, routes: string[]): boolean => {
    for (let route of routes) {
      const regex = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`);
      if (regex.test(path)) {
        return true;
      }
    }
    return false;
  };

  const pathname = window.location.pathname;
  const isNotFoundPage = !matchPath(pathname, routes);

    console.log(isNotFoundPage)
    return (
        <BrowserRouter>
          <ScrollToTop>
            <Container>
                {!isNotFoundPage && <Header />}
                <Router />
                {!isNotFoundPage && <Footer />}
                {!isNotFoundPage && <Dialog />}
                {!isNotFoundPage && <Notifs />}
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