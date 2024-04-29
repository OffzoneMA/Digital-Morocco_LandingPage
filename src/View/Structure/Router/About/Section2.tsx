import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

/**
 * Section2
 * 
 * @returns 
 */
const Section2 = () => {

    return (
        <Container>
            <h3><Lang>Powering Connections and Fueling Growth for Startups, Companies, and Investors</Lang></h3>
            <p><Lang>Digital Morocco is dedicated to fostering meaningful connections and driving business success. We accomplish this through a range of engaging activities, including professional events such as conferences and training sessions, as well as various networking opportunities.</Lang></p>
            <div id="content">
                <div>
                    <p><Lang>Welcome to Digital Morocco, a thriving community of businesses, institutions, investors, and esteemed local and international experts in the digital field. We are united by a common goal: to foster the development of skills, advance cutting-edge technologies, and empower startups and digital projects to conquer the challenges of today's ever-evolving market.</Lang></p>
                    <p><Lang>Our mission is to qualify and equip entrepreneurs with the necessary tools and knowledge to navigate the dynamic business environment in Morocco and beyond. Through collaborative efforts, we strive to create a robust ecosystem that nurtures innovation, drives growth, and propels the digital landscape forward.</Lang></p>
                    <p><Lang>At Digital Morocco, we believe in the power of connectivity. By fostering meaningful connections among our members, we facilitate the exchange of ideas, expertise, and opportunities.</Lang></p>
                </div>
                <div>
                    <p><Lang>Our platform serves as a hub where startups can find the guidance and resources they need to flourish, while investors discover promising ventures that align with their vision.</Lang></p>
                    <p><Lang>We pride ourselves on curating a diverse network of industry experts who bring their wealth of knowledge and experience to the table. Through exclusive events, training sessions, and collaborative projects, we continuously strive to enhance skills, share insights, and promote transformative ideas.</Lang></p>
                    <p><Lang>Together, we are at the forefront of the digital revolution, propelling Morocco's business landscape to new heights. Join us on this exciting journey as we collectively shape the future of the digital industry in Morocco and make a lasting impact on a global scale.</Lang></p>
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
    margin: auto;
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 50px;

    > h3 {
        font-size: 22px;
        font-weight: 500;
        line-height: 32px;
        color: #2575F0;
    }

    > p {
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: -0.01em;
        color: #1D2939;
    }

    > #content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        color: #475467;
        font-size: 16px;
        line-height: 27.2px;
        font-weight: 400;
        font-family: DMSans-Regular;

        // Media
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }
    
`;