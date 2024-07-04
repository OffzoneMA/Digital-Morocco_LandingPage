import React , {useState} from 'react'
import styled from 'styled-components'
import Button from '../../../../Components/Button'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang'
import { useNavigate } from 'react-router-dom'

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    /**
     * Navigate
     * 
     */
    const navigate = useNavigate()

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

    return (
        <Container islongpressed={isLongPressed.toString()}>
            <h1 className='animation'><Lang>Grow your business through networking and digital solutions!</Lang></h1>
            <p className='animation'><Lang>Expand your professional network, gain access to exclusive resources, and connect with individuals and organizations committed to advancing the digital landscape in Morocco.</Lang></p>
            <Button className='animation' $background={isLongPressed ? '#224A94' : 'var(--color-blue)'} $hoverBackground='#235DBD' $padding={[13, 32]} $isFill 
            onClick={() => navigate('/pricing')} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ><Lang>Get Started Now</Lang></Button>
        </Container>
    )
}

export default Content


/**
 * Container
 * 
 */
const Container = styled.div<{islongpressed?: string}>`
    position: absolute;
    z-index: 1;
    color: white;
    bottom: 0;
    top: 50px;
    margin-block: auto;
    height: fit-content;
    margin-inline-start: 200px;
    display: grid;
    justify-items: start;

    > h1 {
        max-width: 450px;
        font-size: 50px;
        line-height: 62px;
        margin: 0;
    }

    > p {
        max-width: 440px;
        line-height: 25px;
        color: white;
        opacity: 70%;
        margin-bottom: 20px;
    }

    > button {
        transition: 300ms;
        border: none;
        font-size: 20px;
        padding: 17px 35px;

        &:hover {
            background-color: ${({islongpressed }) => {
                return islongpressed === "true" ? '#224A94' : '#235DBD';
                }};
            border-color: ${({islongpressed }) => {
                return islongpressed === "true" ? '#224A94' : '#235DBD';
                }};
            filter: none;
        }
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) { 
        margin-inline-start: 50px;
    }

    @media only screen and (min-width: 1025px) and (max-width: 1281px) { 
        margin-inline-start: 100px;
    }

    // Media
    @media (max-width: 768px) {
        margin-inline: auto;
        justify-items: center;
        left: 0;
        right: 0;
        margin-inline: 20px;
        // margin-top: 20px;

        > h1 {
            font-size: 45px;
        }

    }

    @media (max-width: 380px) {
        margin-inline: auto;
        left: 0;
        right: 0;
        margin-inline: 20px;
        margin-top: 30px;

        > h1 {
            font-size: 35px;
        }
        > button {
            transition: 300ms;
            border: none;
            font-size: 18px;
            padding: 17px 25px;
        }
    }
`;