import { useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import styled from 'styled-components'
import React from 'react'
import Brand from '../../Portions/Brand'
import Body from './Body'

/**
 * Checkout
 * 
 * @returns 
 */
const Checkout = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Checkout')}` })

    return (
        <Container>
            <Body />
            <Brand />
        </Container>
    )
}

export default Checkout


/**
 * Container
 * 
 */
const Container = styled.div`
`;