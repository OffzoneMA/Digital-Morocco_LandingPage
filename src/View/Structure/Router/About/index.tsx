import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../../Components/PageHeader'
import PageTitle from '../../../Components/PageTitle'
import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Brand from '../../Portions/Brand'


/**
 * About
 * 
 * @returns 
 */
const About = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('About')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('About Digital Morocco')} title={lang('Powering Connections and Growth for Startups')} /></PageHeader>
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <Section4 /> */}
            <Brand />
        </Container>
    )
}

export default About


/**
 * Container
 * 
 */
const Container = styled.div`
    font-family: DMSans-Medium;
`;