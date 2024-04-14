import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang'

// @ts-ignore
import Image2 from '../../../../Media/Images/image2.png';
// @ts-ignore
import Image3 from '../../../../Media/Images/image3.png';
// @ts-ignore
import Image4 from '../../../../Media/Images/image4.png';
// @ts-ignore
import Image5 from '../../../../Media/Images/image5.png';

/**
 * Activities
 * 
 * @returns 
 */
const Activities = () => {
    
    return (
        <Container>
            <h1 className='onscroll'><Lang>Our Activities</Lang></h1>
            <p className='onscroll'><Lang>Digital Morocco is dedicated to fostering meaningful connections and driving business success. We accomplish this through a range of engaging activities, including professional events such as conferences and training sessions.</Lang></p>
            <div id="list">
                <div className='item onscroll'>
                    <img src={Image2} alt='' loading='lazy' />
                    <h3><Lang>Conferences and Seminars</Lang></h3>
                    <p><Lang>Whether you are a speaker or a participant, our conferences will bring added value to your business. You'll gain insights into the market and discover potential partners.</Lang></p>
                </div>
                <div className='item onscroll'>
                    <img src={Image3} alt='' loading='lazy' />
                    <h3><Lang>Business Meetings</Lang></h3>
                    <p><Lang>An innovative model of rapid, energetic, and friendly meetings. It provides opportunities to network with entrepreneurs, potential clients, or partners.</Lang></p>
                </div>
                <div className='item onscroll'>
                    <img src={Image4} alt='' loading='lazy' />
                    <h3><Lang>Trainings</Lang></h3>
                    <p><Lang>A potential strategy for acquiring new clients. Our programs are increasingly appealing to startups and businesses.</Lang></p>
                </div>
                <div className='item onscroll'>
                    <img src={Image5} alt='' loading='lazy' />
                    <h3><Lang>Support and Guidance</Lang></h3>
                    <p><Lang>Unleashing the potential of your company and setting it on a path of sustainable growth.</Lang></p>
                </div>
            </div>
        </Container>
    )
}

export default Activities


/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 70px;
    margin: auto;

    > h1 {
        font-size: 42px;
        font-weight: 700;
        line-height: 52px;
        letter-spacing: -0.4px;
        font-family: DMSans-Bold;
        text-align: center;
    }

    > p {
        font-size: 21px;
        font-weight: 500;
        line-height: 32px;
        max-width: 770px;
        margin: auto;
        color: rgb(21 20 57 / 40%);
        text-align: center;
    }

    > #list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        margin-top: 50px;

        > .item {
            border-radius: 10px;
            border: 1px solid #e4e5e8;
            overflow: hidden;

            > h3 {
                font-size: 22px;
                line-height: 32px;
                padding-inline: 30px;
            }

            > p {
                font-size: 16px;
                font-weight: 400;
                line-height: 26px;
                color: rgb(21 20 57 / 40%);
                padding-inline: 30px;
            }

            > img {
                width: 100%;
            }
        }

        // Media
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
        }
    }
`;