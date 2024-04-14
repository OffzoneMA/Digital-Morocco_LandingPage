import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import Button from '../../../Components/Button'

/**
 * Packages
 * 
 * @returns 
 */
const Package = ({ name, price, desc, features, recommended, ...restProps }: {
    name: string
    price: number
    desc: string
    features: string[]
    recommended?: boolean
} & React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <Container {...restProps} $recommended={recommended}>
            <div id="data">
                <p id="name">{name}</p>
                <div id="price">
                    <b id="currency">$</b>
                    <b id="value">{price}</b>
                    <p id="duration"><Lang>per month</Lang></p>
                </div>
                <p id="desc">{desc}</p>
            </div>
            <div id="features">
                {features.map((feature, key) => <p key={key}>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.5L4.97059 8L13 1" stroke="#25DAC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                </p>)}
            </div>
            <Button
                $background={recommended ? 'var(--color-green)' : '#EBEAED'}
                $color={recommended ? 'white' : undefined}
                $isFill={recommended}
                $padding={[9, 25]}
            >
                <Lang>Start Free Trial</Lang>
            </Button>
        </Container>
    )
}

export default Package


/**
 * Container
 * 
 */
const Container = styled.div<{
    $recommended?: boolean
}>`
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    gap: 15px;

    > #data {
        display: grid;
        grid-template-rows: 100px auto auto;
        justify-items: center;
        text-align: center;
        padding-inline: 60px;
        border: 2px solid ${p => p.$recommended ? '#2575F0' : '#EBEAED'};
        background-color: ${p => p.$recommended ? '#2575F0' : 'initial'};
        color: ${p => p.$recommended ? 'white' : 'initial'};
        border-radius: 10px;

        > #name {
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2px;
            margin: 0;
            align-self: center;
        }

        > #price {
            display: flex;
            gap: 5px;
            height: fit-content;

            > #currency {
                line-height: 1;
                font-size: 23px;
                align-self: start;
            }

            > #value {
                line-height: 1;
                font-size: 45px;
                align-self: end;
            }

            > #duration {
                margin: 0;
                line-height: 1;
                align-self: end;
            }
        }

        > #desc {
            color: ${p => p.$recommended ? 'white' : 'rgb(21 20 57 / 40%)'};
            margin-block: 30px;
            line-height: 26px;
        }
    }

    > #features {
        padding-inline: 15px;

        > p {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: rgb(21 20 57 / 40%);

            > svg {
                position: relative;
                top: 6px;
            }
        }
    }

    > button {
        transition: 300ms;
        margin: auto;

        &:hover {
            filter: none;
            color: #25DAC5;
            border-color: #25DAC5;
            background-color: transparent;
        }
    }
`;