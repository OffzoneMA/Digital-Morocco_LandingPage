import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

/**
 * Multi select
 * 
 * @returns 
 */
const MultiSelect = ({
    name,
    label,
    options,
    onChange
}: {
    name?: string
    label?: string
    options: OptionInterface[],
    onChange?: (selected: SelectedInterface[]) => void
}) => {

    /**
     * Active state
     * 
     */
    const [active, setActive] = useState(false)

    /**
     * Selected state
     * 
     */
    const [selected, setSelected] = useState<OptionInterface[]>([])

    /**
     * Change method
     * 
     */
    const change = (option: OptionInterface) => {

        // Set selected
        setSelected(old => old.find(item => item.value === option.value) ? old.filter(item => item.value !== option.value) : [...old, option]);
    }

    /**
     * On change
     * 
     */
    useEffect(() => {

        // onChange callback
        if (onChange) onChange(selected.map(option => ({
            ...option,
            remove: () => setSelected(old => old.filter(item => item.value !== option.value))
        })));
    }, [selected]);

    return (
        <Container onMouseEnter={() => setTimeout(() => setActive(true))} onMouseLeave={() => setActive(false)}>
            <div id="label" onClick={() => setActive(old => !old)}>
                <p>{label}</p>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={active ? 'M1 7L7 1L13 7' : 'M1 1L7 7L13 1'} stroke="#151439" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div >
            {active && (
                <div id="options">
                    <div id="list" className='animation'>
                        {options.map(option => (
                            <label key={option.value}>
                                <input type='checkbox' checked={selected.find(item => item.value === option.value) !== undefined} onChange={() => change(option)} />
                                {selected.find(item => item.value === option.value) !== undefined ?
                                    <svg key='1' className='animation' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="6" fill="#25DAC5" />
                                        <path d="M6 10.5L8.64706 13L14 8" stroke="#1E0E62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> :
                                    <svg key='2' className='animation' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="6" fill="#EBEAED" />
                                    </svg>
                                }
                                <p id="label">{option.label}</p>
                            </label>
                        ))}
                    </div>
                </div>
            )}
            {name && <input type="hidden" name={name} value={selected.map(item => item.value).join(',')} />}
        </Container >
    )
}

export default MultiSelect


/**
 * Container
 * 
 */
const Container = styled.div`
    width: fit-content;
    display: grid;
    position: relative;
    width: 215px;
    height: 52px;
    font-family: DMSans-Medium;

    > #label {
        border: 2px solid;
        color: #2E90FA;
        border-radius: 50px;
        padding: 12px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;

        > p {
            margin: 0;
        }
    }

    > #options {
        position: absolute;
        min-width: 100%;
        width: fit-content;
        z-index: 1;
        top: 100%;

        > #list {
            border: 2px solid #2E90FA;
            background-color: white;
            padding: 15px;
            margin-top: 5px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: 0px 12px 16px 5px rgb(16 24 40 / 10%);

            > label {
                display: flex;
                align-items: center;
                gap: 7px;

                > input {
                    display: none;
                }

                > #label {
                    font-size: 16px;
                    margin-block: 5px;
                }
            }
        }
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