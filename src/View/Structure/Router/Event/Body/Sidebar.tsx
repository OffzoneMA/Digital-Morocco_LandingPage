import styled from 'styled-components';
import React from 'react'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import Button from '../../../../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';

// @ts-ignore
import map from '../../../../Media/Images/map.png'
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';
import { format, parse } from 'date-fns';
import { enUS , fr } from 'date-fns/locale';
import { language } from '../../../../Language';

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

    /**
     * Get Event
     */

    const { id } = useParams<{ id: string }>();

    const formattedTime = (time: string, language: string): string => {
        const parsedTime = parse(time, 'h:mm a', new Date());
        if (language === 'fr-FR') {
          return format(parsedTime, 'H', { locale: fr }) + 'h';
        }
        return format(parsedTime, 'h a', { locale: enUS }).toLowerCase();
      };

    function formatEventDate(startDate: Date, endDate: Date): string {
    
        if (!startDate || !endDate ) {
            return 'Coming Soon';
        }
        else {

            const startDateTime = new Date(startDate);
            const endDateTime = new Date(endDate);

            if (startDateTime.getDate() === endDateTime.getDate() && startDateTime.getMonth() === endDateTime.getMonth() && startDateTime.getFullYear() === endDateTime.getFullYear()) {
                const formattedDate = format(startDateTime, language =='fr-FR'? 'EEEE d MMM yyyy' : 'EEEE, MMMM d, yyyy', { locale: language =='fr-FR'? fr : enUS });
                return `${formattedDate}`;
            } else {
                const formattedStartDate = format(startDateTime, language =='fr-FR'? 'EEE d MMM yyyy' : 'EEE, MMM d, yyyy', { locale: language =='fr-FR'? fr : enUS });
                return `${formattedStartDate}`;
            }

            }
    }

    function formatEventTime(startDate: Date, endDate: Date, startTime: string, endTime: string): string {
    
        if (!startDate || !endDate || !startTime || !endTime || startTime=='' || endTime=='' ) {
            return '24 hours a day, 7 days a week';
        }
        else {
            const formattedStartTimev = formattedTime(startTime, language);
            const formattedEndTimev = formattedTime(endTime, language);

            const startDateTime = new Date(startDate);
            const endDateTime = new Date(endDate);

            if (startDateTime.getDate() === endDateTime.getDate() && startDateTime.getMonth() === endDateTime.getMonth() && startDateTime.getFullYear() === endDateTime.getFullYear()) {
                const gmtOffset = startDateTime.getTimezoneOffset() / 60; 

                console.log(gmtOffset)
                const gmt = gmtOffset >= 0 ? `+${gmtOffset}` : gmtOffset.toString(); 
                if(language =='fr-FR') {
                    return `De ${formattedStartTimev} à ${formattedEndTimev} GMT${gmt}`
                }
                return `${formattedStartTimev} - ${formattedEndTimev} ${gmt}`;
            } else {
                
                const parsedTime = parse(startTime, 'h:mm a', new Date());
                if (language === 'fr-FR') {
                  return format(parsedTime, 'H:mm', { locale: fr }).replace(':', 'h');
                }
                return format(parsedTime, 'h:mm a', { locale: enUS }).toUpperCase();            }

        }
    }

    return (
        <Container>
            <Fetch<any>
            url={`${process.env.REACT_APP_baseURL}events/${id}`}
            method="GET"
         >
            {({ response }) => (
                <>
                    {response ? (
                        <>
                        <div id="info">
                            <div className='label'>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.5H1.25M11 1.5V4.5M5 1.5V4.5M4.85 16.5H11.15C12.4101 16.5 13.0402 16.5 13.5215 16.2548C13.9448 16.039 14.289 15.6948 14.5048 15.2715C14.75 14.7902 14.75 14.1601 14.75 12.9V6.6C14.75 5.33988 14.75 4.70982 14.5048 4.22852C14.289 3.80516 13.9448 3.46095 13.5215 3.24524C13.0402 3 12.4101 3 11.15 3H4.85C3.58988 3 2.95982 3 2.47852 3.24524C2.05516 3.46095 1.71095 3.80516 1.49524 4.22852C1.25 4.70982 1.25 5.33988 1.25 6.6V12.9C1.25 14.1601 1.25 14.7902 1.49524 15.2715C1.71095 15.6948 2.05516 16.039 2.47852 16.2548C2.95982 16.5 3.58988 16.5 4.85 16.5Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><Lang>{formatEventDate(response?.startDate , response?.endDate)}</Lang></p>
                            </div>
                            <div className='label'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><Lang>{formatEventTime(response?.startDate , response?.endDate , response?.startTime? response?.startTime : '', response?.endTime? response?.endTime : '')}</Lang></p>
                            </div>
                            <div className='label'>
                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 16.5C10 13.5 13 10.8137 13 7.5C13 4.18629 10.3137 1.5 7 1.5C3.68629 1.5 1 4.18629 1 7.5C1 10.8137 4 13.5 7 16.5Z" stroke="#00CDAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p><Lang>{response?.physicalLocation || "Online Only"}</Lang></p>
                            </div>
                        </div>
                        <div id="ticket">
                            <div id="label">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5H5.5075M1 3.4L1 6.75589C1 7.12277 1 7.30622 1.04145 7.47885C1.07819 7.6319 1.1388 7.77822 1.22104 7.91243C1.3138 8.0638 1.44352 8.19351 1.70294 8.45294L7.45441 14.2044C8.34545 15.0955 8.79097 15.541 9.30471 15.7079C9.75661 15.8547 10.2434 15.8547 10.6953 15.7079C11.209 15.541 11.6545 15.0955 12.5456 14.2044L14.2044 12.5456C15.0955 11.6545 15.541 11.209 15.7079 10.6953C15.8547 10.2434 15.8547 9.75661 15.7079 9.30471C15.541 8.79097 15.0955 8.34545 14.2044 7.45441L8.45294 1.70294C8.19351 1.44352 8.0638 1.3138 7.91243 1.22104C7.77822 1.1388 7.6319 1.07819 7.47885 1.04145C7.30622 1 7.12277 1 6.75589 1L3.4 1C2.55992 1 2.13988 1 1.81901 1.16349C1.53677 1.3073 1.3073 1.53677 1.16349 1.81901C1 2.13988 1 2.55992 1 3.4ZM5.875 5.5C5.875 5.70711 5.70711 5.875 5.5 5.875C5.29289 5.875 5.125 5.70711 5.125 5.5C5.125 5.29289 5.29289 5.125 5.5 5.125C5.70711 5.125 5.875 5.29289 5.875 5.5Z" stroke="#25DAC5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <Lang>Ticket Start From</Lang>
                            </div>
                            <div id="price">
                                <b id="symbol">$</b>
                                <b id="value">{response?.price.toFixed(2)}</b>
                            </div>
                            <Button disabled onClick={() => navigate(`/checkout/${response?._id}`)} $isFill $background='#25DAC5' $size={18} $height={50} $color='white' $padding={[12, 30]}><Lang>Get Ticket</Lang></Button>
                        </div>
                        <div id="map">
                            <p><Lang>Location Map</Lang></p>
                            <img src={map} alt="" />
                        </div>
                        </>
                    ) : (
                        <Loader/>
                    )}
                </>
            )}
            </Fetch>
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
    width: 280px;

    > #info {
        display: flex;
        flex-direction: column;

        > .label {
            display: flex;
            align-items: center;
            gap: 10px;

            > p {
                color: #1D2939;
                font-family: DMSans-Medium;
                font-size: 18px;
                // white-space: nowrap;
                line-height: 8px;
                
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
            line-height: 18.23px;
            font-size: 14px;
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
            font-family: DMSans-Bold;

            > #symbol {
                font-size: 30px;
            }

            > #value {
                font-size: 48px;
            }
        }

        > button {
            transition: 300ms;
            background-color: #E5E5E6;
            border-color: #E5E5E6;
            color: #A7A6A8;

            &:hover {
                // background-color: #01A395;
                // border-color: #01A395;
                // color: white;
                filter: none;
            }
        }
    }

    > #map {

        > p {
            color: #15143980;
            font-size: 14px;
            line-height: 26px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-block: 5px;
            font-family: DMSans-Medium;
        }

        > img {
            width: 100%;
        }
    }
`;