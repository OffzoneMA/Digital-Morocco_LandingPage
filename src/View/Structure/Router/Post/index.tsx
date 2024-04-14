import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import styled from 'styled-components'
import React from 'react'
import Header from './header'
import Body from './Body'
import Brand from '../../Portions/Brand'

/**
 * Post
 * 
 * @returns 
 */
const Post = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Post')}` })

    return (
        <Container>
            <Header />
            <Body />
            <Brand />
        </Container>
    )
}

export default Post


/**
 * Container
 * 
 */
const Container = styled.div`
`;