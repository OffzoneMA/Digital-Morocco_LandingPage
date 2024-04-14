import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../../Components/PageHeader'
import PageTitle from '../../../Components/PageTitle'
import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import Brand from '../../Portions/Brand'
import Record from './record'


/**
 * Events
 * 
 * @returns 
 */
const Events = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Events')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('upcoming event')} title={lang('Stay updated on tech talks, workshops, conferences, and more.')} /></PageHeader>
            <Record />
            <Brand />
        </Container>
    )
}

export default Events


/**
 * Container
 * 
 */
const Container = styled.div`

    h1 {
        max-width: 1000px;
    }
`;