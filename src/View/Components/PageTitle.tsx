import React from 'react'
import styled from 'styled-components'
import { language } from '../Language'

/**
 * Page title
 * 
 * @returns 
 */
const PageTitle = ({ slug, title }: { slug?: string, title: string }) => {

    return (
        <Container lang={language}>
            {slug ? <p className='animation'>{slug}</p> : undefined}
            <h1 className='animation'>{title}</h1>
        </Container>
    )
}

export default PageTitle


/**
 * Container
 * 
 */
const Container = styled.div<{lang?: string}>`
    text-align: center;
    font-family: DMSans-Bold;

    > p {
        font-size: 14px;
        line-height: 26px;
        letter-spacing: 2px;
        color: rgb(21 20 57 / 40%);
        text-transform: uppercase;
    }

    > h1 {
        font-size: 58px;
        letter-spacing: -1px;
        max-width: ${props => props.lang === 'fr-FR' ? '984px' : '904px'};
        margin: auto;

        // Media
        @media (max-width: 900px) {
            font-size: 25px;
        }
    }
`;