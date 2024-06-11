import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import { Link } from 'react-router-dom'

// @ts-ignore
import Image6 from '../../../Media/Images/image6.png';
// @ts-ignore
import Image7 from '../../../Media/Images/image7.png';

/**
 * Section3
 * 
 * @returns 
 */
const Section3 = () => {

    return (
        <Container>
            <div id="items">
                <div className='item'>
                    <div id="content">
                        <h4><Lang>Unleashing Growth and Innovation</Lang></h4>
                        <p><Lang>Welcome to Digital Morocco, a thriving community of businesses, institutions, investors, and esteemed local and international experts in the digital field. We are united by a common goal: to foster the development of skills, advance cutting-edge technologies, and empower startups and digital projects to conquer the challenges of today's ever-evolving market.</Lang></p>
                        <Link to='/feature'><Lang>Explore</Lang></Link>
                    </div>
                    <img src={Image6} alt='' loading='lazy' />
                </div>
                <div className='item'>
                    <div id="content">
                        <h4><Lang>Revolutionizing the Future of Business in Morocco and Beyond</Lang></h4>
                        <p><Lang>Digital Morocco is a community comprised of businesses, institutions, investors, and local and international experts in the digital field. Our collective efforts are focused on developing skills, technologies, and qualifications for startups and digital projects, ensuring they are well-equipped to navigate market challenges and adapt to the evolving business environment in Morocco and worldwide.</Lang></p>
                        <Link to='/feature'><Lang>Explore</Lang></Link>
                    </div>
                    <img src={Image7} alt='' loading='lazy' />
                </div>
            </div>
        </Container>
    )
}

export default Section3


/**
 * Container
 * 
 */
const Container = styled.div`
    padding-block: 70px;
    background-color: #F9FAFB;

    > #items {
        display: grid;
        gap: 90px;
        margin: auto;
        max-width: var(--content-width);
        width: calc(100% - 50px);

        > .item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
    
            > img {
                width: 100%;
                height: auto;
                max-width: 440px;
                max-height: 320px;
                border-radius: 10px;
            }
    
            > #content {
                display: grid;
                grid-template-rows: auto 1fr auto;
                font-family: DMSans-Regular;
    
                > h4 {
                    font-size: 22px;
                    font-weight: 500;
                    line-height: 32px;
                    margin: 0;
                    font-family: DMSans-Medium;

                    @media (max-width: 1024px) {
                        font-size: 20px;
                        line-height: 30px;
                    }
        
                    @media (max-width: 900px) {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    @media (max-width: 700px) {
                        font-size: 20px;
                        line-height: 28px;
                    }

                    @media (max-width: 480px) {
                        font-size: 18px;
                        line-height: 22px;
                    }
                }
    
                > p {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 26px;
                    color: rgba(21, 20, 57, 0.4);


                    @media (max-width: 1024px) {
                        font-size: 16px;
                        line-height: 26px;
                    }
        
                    @media (max-width: 900px) {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    @media (max-width: 800px) {
                        font-size: 13px;
                        line-height: 20px;
                    }

                    @media (max-width: 700px) {
                        font-size: 14px;
                        line-height: 22px;
                    }

                    @media (max-width: 480px) {
                        font-size: 14px;
                        line-height: 22px;
                    }
                }
    
                > a {
                    width: 110px;
                    height: 40px;
                    border-radius: 50px;
                    border: 2px solid #EBEAED;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    padding: 0;
                    margin: 0;
                    font-family: DMSans-Medium;

                    &:hover {
                        color: #00CDAE;
                        border-color: #00CDAE;
                    }
                    
                }
            }

            &:nth-child(even){
                > img {
                    order: 1;
                }

                > #content {
                    order: 2;
                }
            }

            // Media
            @media (max-width: 1024px) {
                gap: 30px;
                // padding-inline: 60px;
            }

            @media (max-width: 900px) {
                gap: 25px;
                // padding-inline: 40px;

            }
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
                gap: 30px;
                // padding-inline: 20px;
                justify-items: center;

                > img {
                    width: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    height: auto;
                    grid-row: 1;
                }
            }

            @media (max-width: 480px) {
                gap: 20px;
                // padding-inline: 0px;

                > img {
                    width: 100%;
                    height: auto;
                }

                > #content {
                    > h4 {
                        font-size: 18px;
                    }

                    > p {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;