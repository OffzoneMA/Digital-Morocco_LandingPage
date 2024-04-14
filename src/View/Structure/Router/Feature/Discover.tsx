import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

// @ts-ignore
import Image from '../../../Media/Images/image34.jpg'
import Screen from '../../../../Controller/Tools/Interface/Device'

/**
 * Discover
 * 
 * @returns 
 */
const Discover = () => {
    
    return (
        <Container>
            <div id="content">
                <div id="text">
                    <h1 id="title" className='onscroll'><Lang>Discover a dynamic and innovative business networking platform</Lang></h1>
                    <p id="dec" className='onscroll'><Lang>Digital Morocco is dedicated to fostering meaningful connections and driving business success.</Lang></p>
                    <ul>
                        <li className='onscroll'><Lang>You will increase your visibility among professionals who share your vision and values.</Lang></li>
                        <li className='onscroll'><Lang>Being part of a business network is an effective way to expand your contacts.</Lang></li>
                        <li className='onscroll'><Lang>Participate in regular events and networking opportunities with professionals.</Lang></li>
                        <li className='onscroll'><Lang>Boost your business through word-of-mouth and business referrals within a global network</Lang></li>
                    </ul>
                </div>
            </div>
            <Screen min={1300} available={<img src={Image} alt='' loading='lazy' className='onscroll' />} />
        </Container>
    )
}

export default Discover


/**
 * Container
 * 
 */
const Container = styled.div`
    background-color: #F2F4F7;
    min-height: 100px;
    color: var(--content-color);
    position: relative;
    overflow: hidden;

    > #content {
        max-width: var(--content-width);
        width: calc(100% - 50px);
        margin: auto;
        margin-block: 70px;
        display: flex;
        flex-direction: row-reverse;

        > #text {
            max-width: 552px;

            > #subtitle {
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 700;
                line-height: 26px;
                letter-spacing: 2px;
            }

            > #title {
                font-size: 36px;
                font-weight: 700;
                line-height: 46px;
                letter-spacing: -0.4px;
                font-family: DMSans-Bold;
                margin: 0;

                // Media
                @media (max-width: 900px) {
                    font-size: 25px;
                }
            }

            > #dec {
                font-size: 21px;
                font-weight: 500;
                line-height: 32px;
                font-family: DMSans-Medium;
            }

            > ul {
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                display: grid;
                gap: 10px;
                margin-top: 70px;
            }
        }
    }

    > img {
        position: absolute;
        top: 0;
        height: 100%;
        left: 0;
        pointer-events: none;
        user-select: none;
    }
`;