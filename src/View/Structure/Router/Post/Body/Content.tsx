import styled from 'styled-components';
import React from 'react'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';

// @ts-ignore
import Imag23 from '../../../../Media/Images/image23.jpg'


/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    return (
        <Container>
            <p><Lang>As a Product Manager, I was quite close to the customers. I talked to them regularly, I knew their needs, wants and pain points. We discussed them in Product Discovery sessions, while testing prototypes and features and so on. I also regularly partnered with internal stakeholders like Sales or Marketing, Executives and obviously Engineering Teams and Designers.</Lang></p>
            <p><Lang>However, one group of stakeholders that I had not previously engaged with were investors. And this group of people has a huge impact on a product you develop. So recently in my role as Head of Product Strategy for an early stage start up I was campaigning to raise seed investments. Conversations that I had were eye-opening for me as a Product person.</Lang></p>
            <p><Lang>Those folks didn’t care at all how wonderful our product is, how and why everybody will love it, why it is innovative in our industry. All they asked about was: how much recurring revenue do you expect to generate? So here is my shout out to all PM’s and Heads of Product out there: when building your roadmap, think about your investors. How much recurring revenue would the features bring that you’re planning to build? None? Well then I strongly advise you to reconsider.</Lang></p>
            <img src={Imag23} alt="" />
            <p><Lang>As a Product Manager, I was quite close to the customers. I talked to them regularly, I knew their needs, wants and pain points. We discussed them in Product Discovery sessions, while testing prototypes and features and so on.</Lang></p>
            <p><Lang>I also regularly partnered with internal stakeholders like Sales or Marketing, Executives and obviously Engineering Teams and Designers.</Lang></p>
            <p><Lang>However, one group of stakeholders that I had not previously engaged with were investors. And this group of people has a huge impact on a product you develop.</Lang></p>
            <p><Lang>So recently in my role as Head of Product Strategy for an early stage start up I was campaigning to raise seed investments. Conversations that I had were eye-opening for me as a Product person.</Lang></p>
            <p><Lang>Those folks didn’t care at all how wonderful our product is, how and why everybody will love it, why it is innovative in our industry. All they asked about was: how much recurring revenue do you expect to generate?</Lang></p>
            <p><Lang>So here is my shout out to all PM’s and Heads of Product out there: when building your roadmap, think about your investors. How much recurring revenue would the features bring that you’re planning to build? None? Well then I strongly advise you to reconsider.</Lang></p>
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
        font-family: DMSans-Regular;
        line-height: 26px;

    }

    > img {
        max-width: 100%;
        margin-top:18px;
        margin-bottom:18px;
    }
`;