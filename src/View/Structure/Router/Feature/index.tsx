import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../../Components/PageHeader'
import PageTitle from '../../../Components/PageTitle'
import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import Brand from '../../Portions/Brand'
import Discover from './Discover'
import Section1 from './Section1'
import Section2 from './Section2'


/**
 * Feature
 * 
 * @returns 
 */
const Feature = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Feature')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('Unleashing Growth and Innovation')} title={lang('Unlocking Opportunities through Networking')} /></PageHeader>
            <Section1 />
            <Section2 />
            {/* <Discover /> */}
            <Brand />
        </Container>
    )
}

export default Feature


/**
 * Container
 * 
 */
const Container = styled.div`
`;