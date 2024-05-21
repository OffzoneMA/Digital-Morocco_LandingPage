import React from 'react'
import styled from 'styled-components'
import Logo from '../../../Components/Logo'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import Button from '../../../Components/Button'


/**
 * About
 * 
 * @returns 
 */
const About = () => {

    return (
        <Container>
            <section>
                <Logo type='full' width={170} />
            </section>
            <section>
                <h4><Lang>Address</Lang></h4>
                <p>493 Av. 2 Mars, Casablanca 20550, Morocco</p>
            </section>
            <section>
                <h4><Lang>Try Digital Morocco for Free</Lang></h4>
                <p><Lang>Start a 14 Day Free Trial on any of our paid plans. No credit card required.</Lang></p>
                <Button $isFill $color='white' $background='var(--color-blue-dark)' $padding={[10, 65]}><Lang>Get Started</Lang></Button>
            </section>
        </Container>
    )
}

export default About


/**
 * Container
 * 
 */
const Container = styled.div`
    border-top: var(--border-section);
    padding-block: 30px;
    display: grid;
    grid-template-columns: auto 200px 1fr;
    gap: 75px;

    > section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        > h4 {    
            margin: 0;
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 2px;
        }

        > p {
            opacity: 0.4;
        }
        
        > button {
            transition: 300ms;

            &:hover {
                background-color: #224A94;
                border-color: #224A94;
                filter: none;
            }
        }
    }

    // Media
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 40px;

        > section {
            align-items: center;
            text-align: center;
            gap: 0;
        }
    }
`;