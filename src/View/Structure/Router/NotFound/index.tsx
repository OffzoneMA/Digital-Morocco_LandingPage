import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../../Components/PageHeader'
import PageTitle from '../../../Components/PageTitle'
import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import NotFound from './NotFound'

const NotFoundPage = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('NotFound')}` })

    return (
        <Container>
            <NotFound />
        </Container>
    );
}

export default NotFoundPage;


/**
 * Container
 * 
 */
const Container = styled.div`
`;
