import React from 'react'
import styled from 'styled-components'
import Button from '../../../../Components/Button'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang'

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    return (
        <Container>
            <h1 className='animation'><Lang>Grow your business through networking and digital solutions!</Lang></h1>
            <p className='animation'><Lang>Expand your professional network, gain access to exclusive resources, and connect with individuals and organizations committed to advancing the digital landscape in Morocco.</Lang></p>
            <Button className='animation' $background='var(--color-blue)' $padding={[13, 32]} $isFill><Lang>Get Started Now</Lang></Button>
        </Container>
    )
}

export default Content


/**
 * Container
 * 
 */
const Container = styled.div`
    position: absolute;
    z-index: 1;
    color: white;
    bottom: 0;
    top: 50px;
    margin-block: auto;
    height: fit-content;
    margin-inline-start: 200px;
    display: grid;
    justify-items: start;

    > h1 {
        max-width: 440px;
        font-size: 50px;
        line-height: 62px;
        margin: 0;
    }

    > p {
        max-width: 440px;
        line-height: 25px;
        color: white;
        opacity: 70%;
        margin-bottom: 20px;
    }

    > button {
        transition: 300ms;
        border: none;
        font-size: 20px;
        padding: 17px 35px;

        &:hover {
            background-color: #00CDAE;
            border-color: #00CDAE;
            filter: none;
        }
    }

    // Media
    @media (max-width: 740px) {
        margin-inline: auto;
        justify-items: center;
        text-align: center;
        left: 0;
        right: 0;
        margin-inline: 20px;

        > h1 {
            font-size: 40px;
        }
    }
`;