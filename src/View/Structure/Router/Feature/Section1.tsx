import styled from 'styled-components'
import React from 'react'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

/**
 * Section1
 * 
 * @returns 
 */
const Section1 = () => {

    return (
        <Container>
            <h1><Lang>Powering Connections and Fueling Growth for Startups, Companies, Project Holders, and Investors</Lang></h1>
            <div id="content">
                <div className="content-item">
                    <span><Lang>Ignite Your Business Potential with Digital Morocco!</Lang></span>
                    <Lang>Looking for a powerful platform to propel your business forward? Look no further! Digital Morocco is the ultimate hub for startups, companies, project holders, and investors, where incredible opportunities await.</Lang>
                </div>
                <div className="content-item">
                    <Lang>Digital Morocco is dedicated to fostering meaningful connections and driving business success. We accomplish this through a range of engaging activities, including professional events such as conferences and training sessions, as well as various networking opportunities.</Lang>
                </div>
            </div>
        </Container>
    )
}

export default Section1


/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    margin: auto;
    margin-block: 70px;

    > h1 {
        text-align: center;
        font-size: 42px;
        font-family: DMSans-Bold;

        // Media
        @media (max-width: 900px) {
            font-size: 20px;
        }
    }
    
    > #content {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 88px;
        font-size: 18px;
        color: #15143966;
        font-family: DMSans-Medium;

        // Media
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }
    .content-item {
        line-height: 28px;
        display: flex;
        flex-direction: column;
        
        > span {
            margin-bottom: 10px;
        }
    }
`;