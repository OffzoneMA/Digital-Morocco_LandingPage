import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang'

// @ts-ignore
import Icon1 from '../../../../Media/Icons/icon1.svg';
// @ts-ignore
import Icon2 from '../../../../Media/Icons/icon2.svg';
// @ts-ignore
import Icon3 from '../../../../Media/Icons/icon3.svg';
// @ts-ignore
import Icon4 from '../../../../Media/Icons/icon4.svg';

/**
 * Experience
 * 
 * @returns 
 */
const Experience = () => {

    return (
        <Container>
            <div id="content">
                <h1 className='onscroll'><Lang>Experience the power of networking</Lang></h1>
                <p className='onscroll'><Lang>The fourth industrial revolution, known as Industry 4.0, has transformed the world of technology. However, it does not evolve on its own. By sharing our experiences and achievements during events, conferences, training sessions, and other professional gatherings, we hope that our collective efforts will position us at the forefront of decision-makers in the digital world.</Lang></p>
                <div id="list">
                    <div className='item onscroll'>
                        <img src={Icon1} alt='' loading='lazy' />
                        <p id="title"><Lang>A Strong Professional Network</Lang></p>
                        <p id="desc"><Lang>The essence of startups lies in having a strong professional network. One of our fundamental objectives is to connect trusted entities, whether they are service providers, partners, or investors.</Lang></p>
                    </div>
                    <div className='item onscroll'>
                        <img src={Icon2} alt='' loading='lazy' />
                        <p id="title"><Lang>Successful Investments</Lang></p>
                        <p id="desc"><Lang>We aim to showcase the successful experiences of startups and businesses and share them with our members. Working together, we strive to implement digital-based development projects.</Lang></p>
                    </div>
                    <div className='item onscroll'>
                        <img src={Icon3} alt='' loading='lazy' />
                        <p id="title"><Lang>Strong Union</Lang></p>
                        <p id="desc"><Lang>Because unity is strength, one of our main objectives is to build a strong community that helps members overcome professional challenges and difficulties. Our aim is to become an official reference point for various sectors in the technological and digital world.</Lang></p>
                    </div>
                    <div className='item onscroll'>
                        <img src={Icon4} alt='' loading='lazy' />
                        <p id="title"><Lang>Investment Opportunities</Lang></p>
                        <p id="desc"><Lang>We aim to be the long-term partner for businesses of all sizes, providing partners, investors, and financial institutions with exceptional opportunities to invest and support inclusive and sustainable growth. Digital Morocco fosters relationships between startups, companies, and investors to unleash the potential of businesses and set them on a path of sustainable growth.</Lang></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Experience


/**
 * Container
 * 
 */
const Container = styled.div`
    background-color: #616886;
    min-height: 100px;
    color: white;

    > #content {
        max-width: var(--content-width);
        width: calc(100% - 50px);
        margin: auto;
        margin-block: 120px;

        > h1 {
            font-size: 42px;
            font-weight: 700;
            line-height: 52px;
            letter-spacing: -0.4px;
            margin: 0;
        }

        > p {
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
            max-width: 700px;
            filter: opacity(0.7);
        }

        > #list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            margin-top: 70px;

            > .item {
                > #title {
                    font-size: 22px;
                    font-weight: 500;
                    line-height: 32px;
                }
            
                > #desc {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 26px;
                    opacity: 0.7;
                    font-family: DMSans-Regular;
                }
            }

            // Media
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 30px;
            }
        }
    }
`;