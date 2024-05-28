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
                {/* <h4><Lang>Address</Lang></h4>
                <p>493 Av. 2 Mars, Casablanca 20550, Morocco</p> */}
            </section>
            <section>
                <h4><Lang>Try Digital Morocco for free!</Lang></h4>
                <p><Lang>Join the top 200 project leaders and enjoy 12 months of free access to our premier networking platform. Sign up now and connect with the best!</Lang></p>
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
    // grid-template-columns: auto 200px  1fr;

    grid-template-columns: auto 50px  1fr;

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
                background-color: #3016C0;
                border-color: #3016C0;
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