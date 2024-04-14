import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import PageHeader from '../../../Components/PageHeader'
import { config } from '../../../../config'
import Brand from '../../Portions/Brand'
import styled from 'styled-components'
import React from 'react'
import PageTitle from '../../../Components/PageTitle'
import Body from './Body'

/**
 * Contact
 * 
 * @returns 
 */
const Contact = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Blog')}` })

    return (
        <Container>
            <PageHeader><PageTitle slug={lang('Blog')} title={lang('Updates and announcements.')} /></PageHeader>
            <Body />
            <Brand />
        </Container>
    )
}

export default Contact


/**
 * Container
 * 
 */
const Container = styled.div`
`;