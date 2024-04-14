import React from 'react'
import styled, { keyframes } from 'styled-components';

/**
 * Loader
 * 
 * @returns 
 */
const Loader = (props: React.ComponentProps<typeof Container>) => {

    return (
        <Container {...props}>
            <div id="animate"></div>
        </Container>
    )
}

export default Loader


/**
 * Container
 * 
 */
const Container = styled.div`
    > #animate {
        width: 69px;
        height: 30px;
        --c: radial-gradient(farthest-side, #766DF4 90%, #0000);
        background: var(--c), var(--c), var(--c), var(--c);
        background-size: 12px 12px;
        background-repeat: no-repeat;
        animation: ${keyframes`
            0%, 5% {background-position: calc(0*100%/3) 50%, calc(1*100%/3) 50%, calc(2*100%/3) 50%, calc(3*100%/3) 50%}
            12.5% {background-position: calc(0*100%/3) 0, calc(1*100%/3) 50%, calc(2*100%/3) 50%, calc(3*100%/3) 50%}
            25% {background-position: calc(0*100%/3) 0, calc(1*100%/3) 0, calc(2*100%/3) 50%, calc(3*100%/3) 50%}
            37.5% {background-position: calc(0*100%/3) 100%, calc(1*100%/3) 0, calc(2*100%/3) 0, calc(3*100%/3) 50%}
            50% {background-position: calc(0*100%/3) 100%, calc(1*100%/3) 100%, calc(2*100%/3) 0, calc(3*100%/3) 0}
            62.5% {background-position: calc(0*100%/3) 50%, calc(1*100%/3) 100%, calc(2*100%/3) 100%, calc(3*100%/3) 0}
            75% {background-position: calc(0*100%/3) 50%, calc(1*100%/3) 50%, calc(2*100%/3) 100%, calc(3*100%/3) 100%}
            87.5% {background-position: calc(0*100%/3) 50%, calc(1*100%/3) 50%, calc(2*100%/3) 50%, calc(3*100%/3) 100%}
            95%, 100% {background-position: calc(0*100%/3) 50%, calc(1*100%/3) 50%, calc(2*100%/3) 50%, calc(3*100%/3) 50%}
        `} 1s infinite linear alternate;
    }
`;