import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useHeader } from './headers'
import Links from './Links'
import { useLocation } from 'react-router-dom'
import Language from './Language';
import Started from './Started'

const Menu = () => {

    /**
     * Active state
     * 
     */
    const [active, setActive] = useState(false)

    /**
     * Header
     * 
     */
    const header = useHeader()

    /**
     * Location
     * 
     */
    const location = useLocation()

    /**
     * On change location
     * 
     */
    useEffect(() => {

        // Hide menu
        setActive(false)
    }, [location])

    return (
        <Container $active={active} $color={header.color} $background={header.background}>
            <div id="button" onClick={() => setActive(!active)}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.25C5.69036 16.25 6.25 15.6904 6.25 15C6.25 14.3096 5.69036 13.75 5 13.75C4.30964 13.75 3.75 14.3096 3.75 15C3.75 15.6904 4.30964 16.25 5 16.25Z" fill="#202123"></path><path d="M25.075 13.75H9.925C9.27607 13.75 8.75 14.2761 8.75 14.925V15.075C8.75 15.7239 9.27607 16.25 9.925 16.25H25.075C25.7239 16.25 26.25 15.7239 26.25 15.075V14.925C26.25 14.2761 25.7239 13.75 25.075 13.75Z" fill="#202123"></path><path d="M25.075 20H4.925C4.27607 20 3.75 20.5261 3.75 21.175V21.325C3.75 21.9739 4.27607 22.5 4.925 22.5H25.075C25.7239 22.5 26.25 21.9739 26.25 21.325V21.175C26.25 20.5261 25.7239 20 25.075 20Z" fill="#202123"></path><path d="M25.075 7.5H4.925C4.27607 7.5 3.75 8.02607 3.75 8.675V8.825C3.75 9.47393 4.27607 10 4.925 10H25.075C25.7239 10 26.25 9.47393 26.25 8.825V8.675C26.25 8.02607 25.7239 7.5 25.075 7.5Z" fill="#202123"></path></svg>
            </div>
            {active ? (
                <div id="list" className='animation'>
                    <div id="content">
                        <Links withHome />
                        {/* <Started/> */}
                        <Language />
                    </div>
                </div>
            ) : null}
        </Container>
    )
}

export default Menu


/**
 * Container
 * 
 */
const Container = styled.div<{
    $active: boolean
    $color: string
    $background: string
}>`
    > #button {
        position: relative;
        z-index: 1;
        display: flex;

        > svg > path {
            fill: ${p => p.$color};

            // Active
            ${p => p.$active && css`
                &:nth-child(1) {transform: translateX(-10px);}
                &:nth-child(2) {transform: translateX(30px);}
                &:nth-child(3) {transform: rotate(45deg) translate(6px, -21px);}
                &:nth-child(4) {transform: rotate(-45deg) translate(-15px, 12px);}
            `}
        }
    }

    > #list {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 100vh;
        backdrop-filter: blur(10px);
        background-color: rgb(${p => p.$background}, 0.8);

        > #content {
            display: grid;
            gap: 10px;
            margin: 40px;
            margin-top: 130px;

            > a {
                text-decoration: none;
                color: ${p => p.$color};
                display: flex;
                align-items: center;
                gap: 7px;
                width: fit-content;
                    
                &:hover {
                    color: var(--color-green);
                }
            
                &.active {
                    color: var(--color-green);
                }
            }
            > .started {
                margin-top: 20px;
                display: grid;
                gap: 10px;

                >.dash {
                    border-top: 3px dotted;
                    border-color: ${p => p.$color};
                }

                > a {
                    text-decoration: none;
                    color: ${p => p.$color};
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    width: fit-content;
                        
                    &:hover {
                        color: var(--color-green);
                    }
                
                    &.active {
                        color: var(--color-green);
                    }
                }
            }
        }
    }
`;