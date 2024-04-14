import React from 'react'
import styled from 'styled-components'
import Interface from './Interface';
import Content from './Content';
import { useLang } from '../../../../Controller/Tools/Interface/Lang';
import { usePage } from '../../../../Controller/Tools/Helper/Page';
import { config } from '../../../../config';


/**
 * Home
 * 
 * @returns 
 */
const Home = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Home')}` })

    return (
        <Container>
            <Interface />
            <Content />
        </Container>
    )
}

export default Home


/**
 * Container
 * 
 */
const Container = styled.div`
`;