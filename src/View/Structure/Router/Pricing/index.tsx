import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../../Components/PageHeader'
import PageTitle from '../../../Components/PageTitle'
import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import Brand from '../../Portions/Brand'
import Packages from './packages'


/**
 * Pricing
 * 
 * @returns 
 */
const Pricing = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Pricing')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('Plan & Pricing')} title={lang('Simple & flexible pricing built for everyone')} /></PageHeader>
            <Packages />
            <Brand />
        </Container>
    )
}

export default Pricing


/**
 * Container
 * 
 */
const Container = styled.div`
`;