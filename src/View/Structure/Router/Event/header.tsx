import styled from 'styled-components'
import React from 'react'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

// @ts-ignore
import image87 from '../../../Media/Images/image87.jpg'
// @ts-ignore
import profile from '../../../Media/Images/profile.png'

/**
 * Header
 * 
 * @returns 
 */
const Header = () => {

    return (
        <Container>
            <img src={image87} alt="" />
            <div id="layer">
                <div id="content">
                    <h1><Lang>North Africa Dreamin' 2023</Lang></h1>
                    <p><Lang>THE #1 SALESFORCE COMMUNITY CONFERENCE IN AFRICA</Lang></p>
                    <div id="info">
                        <img src={profile} alt="" />
                        <div>
                            <p>Event by</p>
                            <b>North Africa Dreamin</b>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header


/**
 * Container
 * 
 */
const Container = styled.div`
    position: relative;
    min-height: 370px;
    max-height: 370px;
    overflow: hidden;
    max-width: 100vw;
    padding: 20px;
    max-width: calc(var(--content-width) - 40px);
    width: 100%;
    padding-block: 50px;
    margin: auto;
    margin-top: 100px;
    
    > img {
        height: 100%;
        scale: 1.1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;


        // Media
        @media (max-width: 900px) {
            height: 100%;
            width: auto;
        }
    }

    > #layer {
        background-color: #482BE766;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        display: grid;

        > #content {
            max-width: var(--content-width);
            width: calc(100% - 50px);
            padding-block: 50px;
            align-self: end;
            justify-self: center;
            color: white;

            > h1 {
                font-size: 50px;
                max-width: 780px;
                margin: 0;

                // Media
                @media (max-width: 900px) {
                    font-size: 30px;
                }
            }

            > p {
                font-size: 23px;
                text-transform: uppercase;
                margin: 0;
            }

            > #info {
                display: flex;
                gap: 20px;
                align-items: center;
                margin-top: 20px;

                > img {
                    width: 60px;
                    height: 60px;
                }

                > div {
                    display: grid;
                    gap: 7px;

                    > p {
                        margin: 0;
                    }
                }
            }

            // Media
            @media (max-width: 900px) {
                align-self: center;
                justify-self: center;
            }
        }
    }

    // Media
    @media (max-width: 900px) {
        min-height: 300px;
    }
`;