import React from 'react'
import styled from 'styled-components'

/**
 * Checkbox
 * 
 * @returns 
 */
const Checkbox = ({ children }: { children: React.ReactNode }) => {


    return (
        <Container>
            <input type='checkbox' />
            <svg id="active" key='1' className='animation' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="6" fill="#25DAC5" />
                <path d="M6 10.5L8.64706 13L14 8" stroke="#1E0E62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg id="inactive" key='2' className='animation' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="6" fill="#EBEAED" />
            </svg>
            <p id="label">{children}</p>
        </Container>
    )
}

export default Checkbox


/**
 * Container
 * 
 */
const Container = styled.label`
    display: flex;
    gap: 9px;

    > input {
        display: none;

        ~ #active {
            display: none;
        }

        ~ #inactive {
            display: block;
        }

        &:checked ~ #active {
            display: block;
        }

        &:checked ~ #inactive {
            display: none;
        }
    }

    > p {
        margin: 0;
    }
`;


/**
 * Option interface
 * 
 */
export interface OptionInterface {
    label: string
    value: string | number
}

/**
 * Selected interface
 * 
 */
export interface SelectedInterface extends OptionInterface {
    remove: () => void
}