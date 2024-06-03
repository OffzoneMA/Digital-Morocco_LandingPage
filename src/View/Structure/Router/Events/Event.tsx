import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Lang } from '../../../../Controller/Tools/Interface/Lang';
import { languages , language } from '../../../Language';

/**
 * Event
 *  
 * @returns 
 */
const Event = ({id, headerImage, title, date, locationType , location, price }: any) => {

    return (
        <Container className='animation'>
            <Link to={`/event/${id}`} className="item">
                <div id="content">
                    <h3><Lang>{title}</Lang></h3>
                    <div className='label'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 7H1.25M11 1V4M5 1V4M4.85 16H11.15C12.4101 16 13.0402 16 13.5215 15.7548C13.9448 15.539 14.289 15.1948 14.5048 14.7715C14.75 14.2902 14.75 13.6601 14.75 12.4V6.1C14.75 4.83988 14.75 4.20982 14.5048 3.72852C14.289 3.30516 13.9448 2.96095 13.5215 2.74524C13.0402 2.5 12.4101 2.5 11.15 2.5H4.85C3.58988 2.5 2.95982 2.5 2.47852 2.74524C2.05516 2.96095 1.71095 3.30516 1.49524 3.72852C1.25 4.20982 1.25 4.83988 1.25 6.1V12.4C1.25 13.6601 1.25 14.2902 1.49524 14.7715C1.71095 15.1948 2.05516 15.539 2.47852 15.7548C2.95982 16 3.58988 16 4.85 16Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p id='eventDate'><Lang>{date}</Lang></p>
                    </div>
                    <div className='label'>
                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9.25C8.24264 9.25 9.25 8.24264 9.25 7C9.25 5.75736 8.24264 4.75 7 4.75C5.75736 4.75 4.75 5.75736 4.75 7C4.75 8.24264 5.75736 9.25 7 9.25Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 16C10 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 4 13 7 16Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p><Lang>{locationType=="online"? "Online Only" : location}</Lang></p>
                    </div>
                    <div className='label'>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5.5H6.0075M1.5 3.4L1.5 6.75589C1.5 7.12277 1.5 7.30622 1.54145 7.47885C1.57819 7.6319 1.6388 7.77822 1.72104 7.91243C1.8138 8.0638 1.94352 8.19351 2.20294 8.45294L7.95441 14.2044C8.84545 15.0955 9.29097 15.541 9.80471 15.7079C10.2566 15.8547 10.7434 15.8547 11.1953 15.7079C11.709 15.541 12.1545 15.0955 13.0456 14.2044L14.7044 12.5456C15.5955 11.6545 16.041 11.209 16.2079 10.6953C16.3547 10.2434 16.3547 9.75661 16.2079 9.30471C16.041 8.79097 15.5955 8.34545 14.7044 7.45441L8.95294 1.70294C8.69351 1.44352 8.5638 1.3138 8.41243 1.22104C8.27822 1.1388 8.1319 1.07819 7.97885 1.04145C7.80622 1 7.62277 1 7.25589 1L3.9 1C3.05992 1 2.63988 1 2.31901 1.16349C2.03677 1.3073 1.8073 1.53677 1.66349 1.81901C1.5 2.13988 1.5 2.55992 1.5 3.4ZM6.375 5.5C6.375 5.70711 6.20711 5.875 6 5.875C5.79289 5.875 5.625 5.70711 5.625 5.5C5.625 5.29289 5.79289 5.125 6 5.125C6.20711 5.125 6.375 5.29289 6.375 5.5Z" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>{price === 0 ? (<Lang>Free</Lang>) : (<>
                            <Lang>From</Lang> {language === "fr-FR" ? (
                                    <>
                                    {price.toFixed(2)} <Lang>$</Lang>
                                    </>
                                ) : (
                                    <>
                                    <Lang>$</Lang>{price.toFixed(2)}
                                    </>
                                )}
                            </>
                        )}
                        </p>
                    </div>
                </div>
                <img src={headerImage} alt="" loading='lazy'/>
            </Link>
        </Container>
    )
}

export default Event

/**
 * Container
 * 
 */
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;

    > .item {
        display: grid;
        grid-template-columns: 1fr auto;
        width: 100%;
        text-decoration: none;
        
        > img {
            width: 230px;
            height: 230px;
            border-radius: 12px;
        }
    
        > #content {
    
            > h3 {
                font-size: 22px;
                font-family: DMSans-Medium;
            }
    
            > .label {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #475467;

                > #eventDate {
                    text-transform : capitalize;
                }
    
                > p {
                    margin: 10px;
                }
            }
        }
        &:hover {
            color: #00CDAE;
        }
    }

    // Media
    @media (max-width: 40em) {
        grid-template-columns: 1fr;
        gap: 30px;
        padding-block: 25px;

        > .item {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-block: 25px;
            
            > img {
                width: 100%;
                height: auto;
                grid-row: 1;
            }
        }
    }
`;


export interface EventInterface {
    headerImage: string
    title: string
    date: string
    location: string
    price: string
}