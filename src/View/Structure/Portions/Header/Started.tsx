import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../../Components/Button'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import { HeaderType, useHeader } from './headers'

/**
 * Started
 * 
 * @returns 
 */
const Started = () => {

    /**
     * Header
     * 
     */
    const header = useHeader()

    return (
        <Container className='animation' $name={header.name}>
            <Button $background={header.stroke} $color={header.color} style={{ borderColor: header.signStrok }}><Lang>Sign in</Lang></Button>
            <Button $background='var(--color-green)' $color='var(--color-dark)' $isFill><Lang>Get Started</Lang></Button>
        </Container>
    )
}

export default Started


/**
 * Container
 * 
 */
const Container = styled.div<{
    $name: HeaderType
}>`
    display: flex;
    gap: 20px;

    > button {
        transition: 300ms;

        &:first-child:hover {
            filter: none;
            color: #00CDAE;
            border-color: #00CDAE !important;
        }

        &:last-child:hover {
            filter: none;
            color: white;
            border-color: #01A395 !important;
            background-color: #01A395;
        }

        &:last-child {
            font-family: DMSans-Medium;
        }
    }

    ${props => props.$name === "global" && css`
        > button {

            &:first-child:hover {
            }

            &:last-child:hover {
                background-color: transparent;
                color: #01A395;
            }
        }
    `}
`;