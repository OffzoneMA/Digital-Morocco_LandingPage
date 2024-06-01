import styled from 'styled-components'
import React from 'react'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

// @ts-ignore
import icon7 from '../../../Media/Icons/icon7.svg'
// @ts-ignore
import icon8 from '../../../Media/Icons/icon8.svg'
// @ts-ignore
import icon9 from '../../../Media/Icons/icon9.svg'

/**
 * Section2
 * 
 * @returns 
 */
const Section2 = () => {

    return (
        <Container>
            <h1><Lang>Navigating the Business Landscape</Lang></h1>
            <p><Lang>At Digital Morocco, we believe that growth and innovation are the pillars of success in today's competitive business landscape. Our platform is designed to provide you with the tools, resources, and connections you need to foster both.</Lang></p>
            <div id="features">
                <div className="item">
                    <img src={icon7} alt="" />
                    <b><Lang>Empowering Your Growth</Lang></b>
                    <p><Lang>With a dynamic community of startups, companies, investors, and experts, you'll find endless opportunities for collaboration, partnerships, and expansion.</Lang></p>
                </div>
                <div className="item">
                    <img src={icon8} alt="" />
                    <b><Lang>Collaboration that Counts</Lang></b>
                    <p><Lang>The magic happens when minds come together. Digital Morocco provides a collaborative space where ideas are born</Lang></p>
                </div>
                <div className="item">
                    <img src={icon9} alt="" />
                    <b><Lang>Your Path to Success</Lang></b>
                    <p><Lang>Success isn't a destination; it's a journey. With Digital Morocco as your partner, you'll navigate this journey with confidence.</Lang></p>
                </div>
            </div>
        </Container>
    )
}

export default Section2


/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    margin: auto;
    margin-block: 100px;

    > h1 {
        text-align: center;
        font-size: 42px;
        font-family: DMSans-Bold;

        // Media
        @media (max-width: 900px) {
            font-size: 20px;
        }
    }

    > p {
        text-align: center;
        font-size: 21px;
        color: #15143966;
        max-width: 796px;
        margin: auto;
        line-height: 32px;
    }

    > #features {
        display: flex;
        margin-top: 70px;
        gap: 60px;

        > .item {
            display: flex;
            flex-direction: column;
            justify-items: center;
            text-align: center;
            width: 284.67px;

            > img {
                height: 100px;
            }

            > b {
                color: #151439CC;
                font-size: 18px;
                margin-top: 30px;
                font-family: DMSans-Medium;
            }

            > p {
                color: #15143966;
                font-size: 16px;
                line-height: 25.6px;
            }
        }

        // Media
        @media (max-width: 900px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;