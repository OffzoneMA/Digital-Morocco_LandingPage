import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang'

/**
 * Who are we
 * 
 * @returns 
 */
const WhoAreWe = () => {
    return (
        <Container id='whoarewe'>
            <div className='title onscroll'></div>
            <div id='header' className='onscroll'>
                <p id='subtitle'><Lang>Who Are We?</Lang></p>
                <p><Lang>Digital Morocco is a community of businesses, institutions, investors, and local and international experts in the digital field, working to develop skills and technologies and to qualify startups and digital projects to meet the challenges of the market and changes in the business environment in Morocco and around the world.</Lang></p>
            </div>
            <div className='title onscroll'><Lang>Our Mission</Lang></div>
            <div className='content onscroll'><Lang>To help professionals in the digital field grow their businesses. Digitalization is now everywhere, making our mission even more important and essential than ever.</Lang></div>
            <div className='title onscroll'><Lang>Our Approach</Lang></div>
            <div className='content onscroll'><Lang>Unity is strength, which is why we offer our members the opportunity to collaborate and progress together.</Lang></div>
            <div className='title onscroll'><Lang>Our Spirit</Lang></div>
            <div className='content onscroll'><Lang>Happy Business! Let's be demanding, efficient, reliable, and not take ourselves too seriously. Enjoying working as a team makes every experience and encounter effective and Fun.</Lang></div>
            <div className='title onscroll'><Lang>Our Motto</Lang></div>
            <div className='content onscroll'>
                <Lang>Mutual Aid</Lang> <br /><br />
                <Lang>Giving and receiving. Helping others and receiving their help. It is noble and highly efficient.</Lang>
            </div>
        </Container>
    )
}

export default WhoAreWe


/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
    margin: auto;
    color: var(--content-color);
    margin-bottom: 70px;

    > .title {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 2px;
        padding-inline-start: 130px;
    }

    > #header {
        font-size: 22px;
        font-weight: 500;
        line-height: 32px;
        padding-bottom: 20px;
        padding-inline-start: 0px;

        > #subtitle {
            font-size: 14px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }

    > .content {
        color: #667085;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        border-bottom: var(--border-section);
        padding-bottom: 20px;
        padding-inline-start: 0px;
    }

    // Media Queries
    @media (max-width: 1200px) {
        grid-template-columns: 250px 1fr;

        > .title {
            font-size: 13px;
            padding-inline-start: 100px;
        }

        > #header {
            font-size: 20px;
        }

        > .content {
            font-size: 17px;
        }
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: center;

        > .title {
            padding-inline: 20px;
            font-size: 14px;
        }

        > #header {
            padding-inline: 40px;
            font-size: 18px;

            > #subtitle {
                font-size: 13px;
            }
        }

        > .content {
            font-size: 16px;
            padding-inline-start: 0;
        }
    }

    @media (max-width: 600px) {
        width: calc(100% - 20px);
        gap: 15px;

        > .title {
            font-size: 12px;
        }

        > #header {
            font-size: 16px;

            > #subtitle {
                font-size: 12px;
            }
        }

        > .content {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        gap: 10px;

        > .title {
            font-size: 11px;
        }

        > #header {
            font-size: 14px;

            > #subtitle {
                font-size: 11px;
            }
        }

        > .content {
            font-size: 14px;
        }
    }
`;