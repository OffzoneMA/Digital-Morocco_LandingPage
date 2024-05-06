import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// @ts-ignore
import Ornament from '../Media/Images/ornament.svg'

/**
 * Page header
 * 
 * @returns 
 */
const PageHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {

    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <Container scroll={scrolled}  {...props} />
}

export default PageHeader


/**
 * Container
 * 
 */
const Container = styled.div<{ scroll?: boolean }>`
    position: relative;
    padding-top: 150px;
    padding-bottom: 30px;
    padding-inline: 20px;

    &:before {
        content: "";
        position: absolute;
        margin-top: 20px;
        top: 0;
        left: 0;
        width: 500px;
        height: 100%;
        background-image: url(${Ornament});
        background-repeat: no-repeat;
        background-size: cover; 
        z-index: ${p => p.scroll ? '-1' : '1'}; 
        pointer-events: none;
         
    }
`;