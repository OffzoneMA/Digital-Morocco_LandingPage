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
 * Partners
 * 
 * @returns 
 */
const Partners = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Partners')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('List of our partners')} title={lang('Contribute to the growth of innovative ventures.')} /></PageHeader>
            <Record />
            <Brand />
        </Container>
    )
}

export default Partners


/**
 * Container
 * 
 */
const Container = styled.div`
`;