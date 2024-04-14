import styled from 'styled-components';
import React from 'react'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import Button from '../../../../Components/Button';
import { useNavigate } from 'react-router-dom';

// @ts-ignore
import map from '../../../../Media/Images/map.png'

/**
 * Sidebar
 * 
 * @returns 
 */
const Sidebar = () => {

    /**
     * Navigate
     * 
     */
    const navigate = useNavigate()

    return (
        <Container>
            <div id="info">
                <div className='label'>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.75 7.5H1.25M11 1.5V4.5M5 1.5V4.5M4.85 16.5H11.15C12.4101 16.5 13.0402 16.5 13.5215 16.2548C13.9448 16.039 14.289 15.6948 14.5048 15.2715C14.75 14.7902 14.75 14.1601 14.75 12.9V6.6C14.75 5.33988 14.75 4.70982 14.5048 4.22852C14.289 3.80516 13.9448 3.46095 13.5215 3.24524C13.0402 3 12.4101 3 11.15 3H4.85C3.58988 3 2.95982 3 2.47852 3.24524C2.05516 3.46095 1.71095 3.80516 1.49524 4.22852C1.25 4.70982 1.25 5.33988 1.25 6.6V12.9C1.25 14.1601 1.25 14.7902 1.49524 15.2715C1.71095 15.6948 2.05516 16.039 2.47852 16.2548C2.95982 16.5 3.58988 16.5 4.85 16.5Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Saturday, October 21, 2023</p>
                </div>
                <div className='label'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>8am - 9pm +01</p>
                </div>
                <div className='label'>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 16.5C10 13.5 13 10.8137 13 7.5C13 4.18629 10.3137 1.5 7 1.5C3.68629 1.5 1 4.18629 1 7.5C1 10.8137 4 13.5 7 16.5Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Farah Hotel Casablanca</p>
                </div>
            </div>
            <div id="ticket">
                <div id="label">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5.5H6.0075M1.5 3.4L1.5 6.75589C1.5 7.12277 1.5 7.30622 1.54145 7.47885C1.57819 7.6319 1.6388 7.77822 1.72104 7.91243C1.8138 8.0638 1.94352 8.19351 2.20294 8.45294L7.95441 14.2044C8.84545 15.0955 9.29097 15.541 9.80471 15.7079C10.2566 15.8547 10.7434 15.8547 11.1953 15.7079C11.709 15.541 12.1545 15.0955 13.0456 14.2044L14.7044 12.5456C15.5955 11.6545 16.041 11.209 16.2079 10.6953C16.3547 10.2434 16.3547 9.75661 16.2079 9.30471C16.041 8.79097 15.5955 8.34545 14.7044 7.45441L8.95294 1.70294C8.69351 1.44352 8.5638 1.3138 8.41243 1.22104C8.27822 1.1388 8.1319 1.07819 7.97885 1.04145C7.80622 1 7.62277 1 7.25589 1L3.9 1C3.05992 1 2.63988 1 2.31901 1.16349C2.03677 1.3073 1.8073 1.53677 1.66349 1.81901C1.5 2.13988 1.5 2.55992 1.5 3.4ZM6.375 5.5C6.375 5.70711 6.20711 5.875 6 5.875C5.79289 5.875 5.625 5.70711 5.625 5.5C5.625 5.29289 5.79289 5.125 6 5.125C6.20711 5.125 6.375 5.29289 6.375 5.5Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Lang>Ticket Start From</Lang>
                </div>
                <div id="price">
                    <b id="symbol">$</b>
                    <b id="value">29.00</b>
                </div>
                <Button onClick={() => navigate('/checkout')} $isFill $background='#25DAC5' $color='white' $padding={[12, 30]}><Lang>Get Ticket</Lang></Button>
            </div>
            <div id="map">
                <p><Lang>Location Map</Lang></p>
                <img src={map} alt="" />
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
    display: flex;
    flex-direction: column;
    gap: 30px;

    > #info {

        > .label {
            display: flex;
            align-items: center;
            gap: 10px;

            > p {
                margin: 10px;
                color: #1D2939;
                font-weight: bold;
            }
        }
    }

    > #ticket {
        background-color: #FCFCFD;
        border: 1.3px solid #EBEAED;
        border-radius: 10px;
        box-shadow: 0px 4px 6px -2px #1018280D, 0px 12px 16px -4px #1018281A;
        display: grid;
        align-items: center;
        padding: 30px;
        gap: 15px;

        > #label {
            color: #667085;
            font-size: 17px;
            display: flex;
            align-items: center;
            justify-self: center;
            gap: 10px;
            font-family: DMSans-Medium;
        }

        > #price {
            display: flex;
            color: #344054;
            justify-self: center;
            gap: 10px;

            > #symbol {
                font-size: 30px;
            }

            > #value {
                font-size: 53px;
            }
        }

        > button {
            transition: 300ms;

            &:hover {
                background-color: #2575F0;
                border-color: #2575F0;
                color: white;
                filter: none;
            }
        }
    }

    > #map {

        > p {
            color: #15143980;
            text-transform: uppercase;
            margin-block: 5px;
            font-family: DMSans-Medium;
        }

        > img {
            width: 100%;
        }
    }
`;