import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components';

/**
 * Scroller
 * 
 * @returns 
 */
const Scroller = () => {

    /**
     * On load
     * 
     */
    useEffect(() => {

        /**
         * Revealing method
         * 
         */
        const revealing = () => document.querySelectorAll(".onscroll").forEach(reveal => {

            if (reveal.getBoundingClientRect().top < window.innerHeight - 170)
                reveal.classList.add('scrolled');
            else
                reveal.classList.remove('scrolled');
        })

        // Add EventListener
        window.addEventListener("scroll", revealing);

        // Remove EventListener
        return () => window.removeEventListener("scroll", revealing);
    }, [])
    
    return <Style />;
}

export default Scroller


/**
 * Style
 * 
 */
const Style = createGlobalStyle`
    .onscroll {
        opacity: 0;
        transform: translateX(-10px);

        &:nth-child(even) {
            transform: translateX(10px);
        }

        &.scrolled {
            opacity: 1;
            transform: none;
        }
    }
`;