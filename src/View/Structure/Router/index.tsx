import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../../Components/Loader'

// Sections
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Feature = lazy(() => import('./Feature'))
const Members = lazy(() => import('./Members'))
const Partners = lazy(() => import('./Partners'))
const Events = lazy(() => import('./Events'))
const Pricing = lazy(() => import('./Pricing'))
const Contact = lazy(() => import('./Contact'))
const Blog = lazy(() => import('./Blog'))
const Post = lazy(() => import('./Post'))
const Event = lazy(() => import('./Event'))
const Checkout = lazy(() => import('./Checkout'))
const Billing = lazy(() => import('./Billing'))
const Thanks = lazy(() => import('./Thanks'))
const Faq = lazy(() => import('./Faq'))
const Unavailable = lazy(() => import('./404'))


/**
 * Router 🔀
 * 
 * @returns 
 */
const Router = () => {

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='feature' element={<Feature />} />
                <Route path='members' element={<Members />} />
                <Route path='partners' element={<Partners />} />
                <Route path='events' element={<Events />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='contact' element={<Contact />} />
                <Route path='blog' element={<Blog />} />
                <Route path='post' element={<Post />} />
                <Route path='event' element={<Event />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='billing' element={<Billing />} />
                <Route path='thanks' element={<Thanks />} />
                <Route path='faq' element={<Faq />} />
                <Route path='*' element={<Unavailable />} />
            </Routes>
        </Suspense>
    )
}

export default Router


/**
 * Loading
 * 
 */
const Loading = styled(Loader)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    > #animate {
        opacity: 0.4;
    }
`;