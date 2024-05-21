import styled from 'styled-components';
import React from 'react'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';

// @ts-ignore
import image87 from '../../../../Media/Images/image2.png'

/**
 * Sidebar
 * 
 * @returns 
 */
const Sidebar = () => {

    return (
        <Container>
            <img src={image87} alt="" />
            <div id="content">
                <h2><Lang>North Africa Dreamin' 2023</Lang></h2>
                <div id="info">
                    <div className='label'>
                        <span>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 7.5H1.25M11 1.5V4.5M5 1.5V4.5M4.85 16.5H11.15C12.4101 16.5 13.0402 16.5 13.5215 16.2548C13.9448 16.039 14.289 15.6948 14.5048 15.2715C14.75 14.7902 14.75 14.1601 14.75 12.9V6.6C14.75 5.33988 14.75 4.70982 14.5048 4.22852C14.289 3.80516 13.9448 3.46095 13.5215 3.24524C13.0402 3 12.4101 3 11.15 3H4.85C3.58988 3 2.95982 3 2.47852 3.24524C2.05516 3.46095 1.71095 3.80516 1.49524 4.22852C1.25 4.70982 1.25 5.33988 1.25 6.6V12.9C1.25 14.1601 1.25 14.7902 1.49524 15.2715C1.71095 15.6948 2.05516 16.039 2.47852 16.2548C2.95982 16.5 3.58988 16.5 4.85 16.5Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <p><Lang>Saturday, October 21, 2023</Lang></p>
                    </div>
                    <div className='label'>
                        <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <p><Lang>8am - 9pm +01</Lang></p>
                    </div>
                    <div className='label'>
                        <span>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 16.5C10 13.5 13 10.8137 13 7.5C13 4.18629 10.3137 1.5 7 1.5C3.68629 1.5 1 4.18629 1 7.5C1 10.8137 4 13.5 7 16.5Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <p><Lang>Farah Hotel Casablanca</Lang></p>
                    </div>
                    <div className='label'>
                        <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H6.0075M1.5 3.9L1.5 7.25589C1.5 7.62277 1.5 7.80622 1.54145 7.97885C1.57819 8.1319 1.6388 8.27822 1.72104 8.41243C1.8138 8.5638 1.94352 8.69351 2.20294 8.95294L7.95441 14.7044C8.84545 15.5955 9.29097 16.041 9.80471 16.2079C10.2566 16.3547 10.7434 16.3547 11.1953 16.2079C11.709 16.041 12.1545 15.5955 13.0456 14.7044L14.7044 13.0456C15.5955 12.1545 16.041 11.709 16.2079 11.1953C16.3547 10.7434 16.3547 10.2566 16.2079 9.80471C16.041 9.29097 15.5955 8.84545 14.7044 7.95441L8.95294 2.20294C8.69351 1.94352 8.5638 1.8138 8.41243 1.72104C8.27822 1.6388 8.1319 1.57819 7.97885 1.54145C7.80622 1.5 7.62277 1.5 7.25589 1.5L3.9 1.5C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9ZM6.375 6C6.375 6.20711 6.20711 6.375 6 6.375C5.79289 6.375 5.625 6.20711 5.625 6C5.625 5.79289 5.79289 5.625 6 5.625C6.20711 5.625 6.375 5.79289 6.375 6Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        <p><Lang>From €29.00</Lang></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar

/**
 * Container
 * 
 */
const Container = styled.div`
    border: 1.3px solid #EBEAED;
    border-radius: 10px;
    box-shadow: 0px 4px 6px -2px #1018280D, 0px 12px 16px -4px #1018281A;
    height: fit-content;
    overflow: hidden;

    > img {
        width: 100%;
    }

    > #content {
        display: flex;
        flex-direction: column;
        padding: 20px 24px 26px 22px;
        background: #FCFCFD;
        gap: 16px;
        
        > h2 {
            // font-family: DMSans-Medium;
            font-size: 22px;
            line-height: 32px;
            margin: 0;
        }
        
        > #info {

            > .label {
                display: flex;
                align-items: center;
                gap: 10px;

                > span {
                    display: flex;
                    align-items: center;
                    width: 18px;
                }

                > p {
                    font-family: DMSans-Regular;
                    font-size: 16px;
                    line-height: 37px;
                    color: #475467;
                    margin: 0;
                }
            }
        }
    }
`;