import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import PageHeader from '../../../Components/PageHeader'
import PageTitle from '../../../Components/PageTitle'
import { config } from '../../../../config'
import Brand from '../../Portions/Brand'
import styled from 'styled-components'
import React from 'react'
import Body from './Body'

/**
 * Faq
 * 
 * @returns 
 */
const Faq = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('FAQ')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('FAQ')} title={lang('Your questions answered')} /></PageHeader>
            <Body />
            <Brand />
        </Container>
    )
}

export default Faq


/**
 * Container
 * 
 */
const Container = styled.div`
`;