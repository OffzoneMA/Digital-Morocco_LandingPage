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
 * Members
 * 
 * @returns 
 */
const Members = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Members')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('List of our Startups')} title={lang("We've enabled entrepreneurs to reveal their full potential!")} /></PageHeader>
            <Record />
            <Brand />
        </Container>
    )
}

export default Members


/**
 * Container
 * 
 */
const Container = styled.div`
`;