import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Content from './content';
import states from '../../../../../Store/states';
import Screen from '../../../../../Controller/Tools/Interface/Device';

// @ts-ignore
import Shape from '../../../../Media/Images/shape.svg';
// @ts-ignore
import MoroccoMap from '../../../../Media/Images/morocco-map.png';



/**
 * Interface
 * 
 * @returns 
 */
const Interface = () => {

    /**
     * container
     * 
     */
    const container = useRef<HTMLDivElement>(null)

    /**
     * shape
     * 
     */
    const shape = useRef<HTMLImageElement>(null)

    /**
     * Map
     * 
     */
    const map = useRef<HTMLImageElement>(null)


    /**
     * Scroll method
     * 
     */
    const scroll = () => {

        // Check container and check is up scroll
        if (container.current && window.scrollY <= window.innerHeight - 100) {
            const blur = (10 * (window.scrollY / window.innerHeight)).toFixed(2);
            const scale = (1 + ((window.scrollY / window.innerHeight) / 5)).toFixed(2);
            container.current.style.filter = `blur(${blur}px)`;
            container.current.style.scale = `${scale}`;

            // Set header for interface
            if (states.header.value !== 'interface')
                states.header.update('interface')

        // Set header for scroll
        } else if (states.header.value !== 'scroll')
            states.header.update('scroll');
    }

    /**
     * Move method
     * 
     */
    const move = (ev: MouseEvent) => {

        // Check shape and check is up scroll
        if (shape.current && window.scrollY <= window.innerHeight) {
            shape.current.style.transform = `rotateX(${ev.clientX / 50}deg) rotateY(${ev.clientY / 50}deg)`;
        }

        // Check map and check is up scroll
        if (map.current && window.scrollY <= window.innerHeight) {
            map.current.style.transform = `rotateX(-${ev.clientX / 100}deg) rotateY(-${ev.clientY / 100}deg)`;
        }
    }

    /**
     * On load
     * 
     */
    useEffect(() => {

        // Add EventListener
        window.addEventListener('scroll', scroll);
        window.addEventListener('mousemove', move);

        // Remove EventListener
        return () => {
            window.removeEventListener('scroll', scroll)
            window.removeEventListener('mousemove', move)
        }
    }, [])

    return (
        <Container ref={container}>
            <div id="background">
                <img ref={shape} className='animation' id='shape' src={Shape} alt='' loading='lazy' />
                <Screen min={740} available={<img ref={map} className='animation' id='map' src={MoroccoMap} alt='' loading='lazy' />} />
            </div>
            <Content />
        </Container>
    )
}

export default Interface


/**
 * Container
 * 
 */
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    overflow: hidden;

    > #background {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        pointer-events: none;
        user-select: none;
        
        > #shape {
            position: absolute;
            width: 100%;
            height: auto;

            // Media
            @media (max-width: 1300px) {
                width: auto;
                height: 100%;
            }
        }

        > #map {
            height: 100%;
            position: relative;
            z-index: 1;

            @media only screen and (min-width: 769px) and (max-width: 1281px) { 
                transform: translateX(50px); 
                // height: 95%;
            }
        }
    }
`;