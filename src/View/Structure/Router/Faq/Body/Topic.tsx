import styled from 'styled-components';
import React, { useState } from 'react'


/**
 * Topic
 * 
 * @returns 
 */
const Topic = ({ question, answer }: { question: string, answer: string }) => {

    /**
     * Active state
     * 
     */
    const [active, setActive] = useState(false)

    return (
        <Container onClick={() => setActive(old => !old)}>
            <div id="title">
                <h5>{question}</h5>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={active ? 'M1.5 1.25L7 6.75L12.5 1.25' : 'M1.25 12.5L6.75 7L1.25 1.5'} stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {active && <p className='animation'>{answer}</p>}
        </Container>
    )
}

export default Topic

/**
 * Container
 * 
 */
const Container = styled.div`
    border-bottom: 1.4px solid #EBEAED;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 15px;
    cursor: pointer;

    > #title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h5 {
            text-transform: uppercase;
            margin: 0;
        }

        > svg {
            cursor: pointer;
        }
    }

    > p {
        color: #15143966;
        font-size: 16px;
    }
`;