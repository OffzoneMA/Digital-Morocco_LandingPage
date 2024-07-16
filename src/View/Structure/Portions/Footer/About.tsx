import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../../../Components/Logo'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import Button from '../../../Components/Button'
import { useNavigate , useLocation } from 'react-router-dom'


/**
 * About
 * 
 * @returns 
 */
const About = () => {
    
    /**
     * Long press
     */
    const [isLongPressed, setIsLongPressed] = useState(false);

    let timer: NodeJS.Timeout | undefined;

    const handleMouseDown = () => {
      timer = setTimeout(() => {
        setIsLongPressed(true);
      }, 1000);
    };

    const handleMouseUp = () => {
        clearTimeout(timer);
        if (isLongPressed) {
        setIsLongPressed(false);
        }
    };

    const handleMouseLeave = () => {
        clearTimeout(timer);
        if (isLongPressed) {
        setIsLongPressed(false);
        }
    };

    const [isKeyboardUser, setIsKeyboardUser] = useState(false);

    useEffect(() => {
        const handleKeyDown = () => {
            setIsKeyboardUser(true);
        };

        const handleMouseDown = () => {
            setIsKeyboardUser(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    /**
     * Navigate
     * 
     */
    const navigate = useNavigate()

    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/pricing') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/pricing');
        }
    };


    return (
        <Container islongpressed={isLongPressed.toString()}>
            <section>
                <Logo type='full' width={170} />
            </section>
            <section>
                {/* <h4><Lang>Address</Lang></h4>
                <p>493 Av. 2 Mars, Casablanca 20550, Morocco</p> */}
            </section>
            <section>
                <h4><Lang>Try Digital Morocco for free!</Lang></h4>
                <p><Lang>Join the first 200 project leaders and enjoy 12 months of free access to our top-tier networking platform. Sign up now and connect with the best!</Lang></p>
                <Button className={isKeyboardUser ? 'button keyboardBlueF' : 'button mouse'} onClick={handleClick} $isFill $color='white' $background={isLongPressed ? '#251192' : 'var(--color-blue-dark)'} $padding={[10, 65]} 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}><Lang>Get Started</Lang></Button>
            </section>
        </Container>
    )
}

export default About


/**
 * Container
 * 
 */
const Container = styled.div<{islongpressed?: string}>`
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
                background-color: ${({islongpressed }) => {
                    return islongpressed === "true" ? '#251192' : '#3016C0';
                    }};
                border-color: ${({islongpressed }) => {
                    return islongpressed === "true" ? '#251192' : '#3016C0';
                    }};
                filter: none;
            }
            &:focus {
                outline: none;
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