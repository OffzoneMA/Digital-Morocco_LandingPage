import styled from 'styled-components';
import React from 'react'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';


/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    return (
        <Container>
            <p>Dreamin, a Salesforce conference led by the community for the community!Join us in Casablanca to boost your knowledge with international experts and meet the main Salesforce players in Morocco, Africa, and Europe, and North America.<br />
                Dreamin, a taste of Dreamforce in the heart of Africa<br />
                Not able to attend Dreamforce? No problem!Thanks to North Africa Dreamin, we bring a little of the Ohana spirit to Casablanca for a whole day. This will be an opportunity for Salesforce professionals to gather and share their knowledge.You will be able to follow different sessions to train you and to stock up on knowledge: whether you are rather click or rather code, you will certainly find the theme that suits your goal.</p>
            <iframe
                src="https://www.youtube.com/embed/2wSxNZnRxhY">
            </iframe>
            <p>The North Africa Dreamin team is made up of volunteers from the Moroccan Trailblazers community whose common vision could be summed up in one word: sharing<br />
                Our goal is to make available to the community all the resources needed to optimally improve the skills on Salesforce technology, by mobilizing international names.<br />
                Our mission is also to contribute to the expansion of this community by developing relationships between the different actors in the Salesforce ecosystem.<br />
                And more broadly, we want to improve the awareness and adoption of Salesforce in Morocco and Africa because we are convinced of its advantages in terms of CRM, marketing tools and other innovative technologies
            </p>
        </Container>
    )
}

export default Content

/**
 * Container
 * 
 */
const Container = styled.div`

    > p {
        font-size: 16px;
        color: #15143966;
        line-height: 26px;
    }

    > iframe {
        width: 100%;
        border: none;
        height: 350px;
    }
`;