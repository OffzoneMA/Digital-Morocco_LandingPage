import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

/**
 * Section1
 * 
 * @returns 
 */
const Section1 = () => {
    
    return (
        <Container>
            <div className='box'></div>
            <div className='box'>
                <p id="subtitle"><Lang>Who are we?</Lang></p>
                <p id="desc"><Lang>Digital Morocco is a community of businesses, institutions, investors, and local and international experts in the digital field, working to develop skills and technologies and to qualify startups and digital projects to meet the challenges of the market and changes in the business environment in Morocco and around the world.</Lang></p>
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
    display: grid;
    grid-template-columns: 320px 1fr;
    padding-block: 30px;
    margin: auto;
    max-width: var(--content-width);
    width: calc(100% - 50px);

    > .box {
        > #subtitle {
            font-size: 14px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        > #desc {
            font-size: 22px;
            line-height: 32px;
            color: var(--content-color);
        }
    }

    // Media
    @media (max-width: 900px) {
        grid-template-columns: 0px 1fr;
    }
`;