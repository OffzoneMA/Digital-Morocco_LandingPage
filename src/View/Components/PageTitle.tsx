import React from 'react'
import styled from 'styled-components'

/**
 * Page title
 * 
 * @returns 
 */
const PageTitle = ({ slug, title }: { slug?: string, title: string }) => {

    return (
        <Container>
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
const Container = styled.div`
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
        font-size: 59px;
        letter-spacing: -1px;
        max-width: 873px;
        margin: auto;

        // Media
        @media (max-width: 900px) {
            font-size: 25px;
        }
    }
`;