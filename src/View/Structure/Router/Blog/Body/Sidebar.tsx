import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';

// @ts-ignore
import Image from '../../../../Media/Images/image.png'
// @ts-ignore
import Imag1 from '../../../../Media/Images/image (1).png'
// @ts-ignore
import Imag2 from '../../../../Media/Images/image (2).png'
// @ts-ignore
import Imag3 from '../../../../Media/Images/image (3).png'
// @ts-ignore
import Imag4 from '../../../../Media/Images/image (4).png'

/**
 * Sidebar
 * 
 * @returns 
 */
const Sidebar = () => {

    return (
        <Container>
            <p><Lang>LATEST STORIES</Lang></p>
            <div id="items">
                <div className="item">
                    <img src={Image} alt="" />
                    <h5><Lang>7 Questions to Ask Yourself When Investing in Startups</Lang></h5>
                </div>
                <div className="item">
                    <img src={Imag1} alt="" />
                    <h5><Lang>Revving Up for the Next Lap: Unveiling Meow Speed’s Exciting Future Plans!</Lang></h5>
                </div>
                <div className="item">
                    <img src={Imag2} alt="" />
                    <h5><Lang>Tips on creating FOMO amongst investors for your startup</Lang></h5>
                </div>
                <div className="item">
                    <img src={Imag3} alt="" />
                    <h5><Lang>Startup Fundraising. Top 3 incorrect assumptions.</Lang></h5>
                </div>
                <div className="item">
                    <img src={Imag4} alt="" />
                    <h5><Lang>The Finance Behind Startup Investing</Lang></h5>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar

/**
 * Container
 * 
 */
const Container = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    margin-bottom: 50px;
    align-self: flex-start;

    > p {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        color: #15143966;
        margin-bottom: 40px;
    }

    > #items {
        display: grid;
        gap: 20px;
        transition: 300ms;

        > .item {
            display: flex;
            gap: 10px;
            cursor: pointer;

            > img {
                width: 100px;
            }

            > h5 {
                margin: 0;
                font-size: 15px;
            }

            &:hover {
                color: #00CDAE;
            }
        }
    }
`;