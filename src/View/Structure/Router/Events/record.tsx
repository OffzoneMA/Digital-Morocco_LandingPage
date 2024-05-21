import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Event, { EventInterface } from './Event';
import Fetch from '../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../Components/Loader';
import Pages from '../../../Components/Pages';
import { format, parse } from 'date-fns';
import { fr , enUS } from 'date-fns/locale';
import { useLocation, useSearchParams } from 'react-router-dom';
import { language } from '../../../Language';

/**
 * Record
 * 
 * @returns 
 */
const Record = () => {
    
    /**
     * SearchParams
     */
    const [searchParams, setSearchParams] = useSearchParams();

     /**
     * Tolal Pages
     */
     const [totalPages, setTotalPages] = useState(1);
     const [current, setCurrent] = useState<number>(parseInt(searchParams.get("page") || "1"));
     const eventsPerPage = 2; 
 
     const getTotalPages = (totalItems: number) => {
         return Math.ceil(totalItems / eventsPerPage);
     };

    function formatEventDateTime(startDate: Date, endDate: Date, startTime: string, endTime: string): string {
    
        if (!startDate || !endDate || !startTime || !endTime || startTime=='' || endTime=='' ) {
            return 'Coming Soon';
        }
        else {
            const formattedStartTimev = format(parse(startTime, 'h:mm a', new Date()), 'ha', { locale: language =='fr-FR'? fr : enUS }).toLowerCase();
            const formattedEndTimev = format(parse(endTime, 'h:mm a', new Date()), 'ha', { locale: language =='fr-FR'? fr : enUS }).toLowerCase();

            const startDateTime = new Date(startDate);
            const endDateTime = new Date(endDate);

            if (startDateTime.getDate() === endDateTime.getDate() && startDateTime.getMonth() === endDateTime.getMonth() && startDateTime.getFullYear() === endDateTime.getFullYear()) {
                const formattedDate = format(startDateTime, language =='fr-FR'? 'EEEE d MMMM' : 'EEEE, MMMM d', { locale: language =='fr-FR'? fr : enUS });
                const gmtOffset = startDateTime.getUTCHours(); 
                const gmt = gmtOffset >= 0 ? `+${gmtOffset}` : gmtOffset.toString(); 
                return `${formattedDate}\u00A0\u00A0 • \u00A0\u00A0${formattedStartTimev} - ${formattedEndTimev} ${gmt}`;
            } else {
                const formattedStartDate = format(startDateTime, language =='fr-FR'? 'EEE d MMMM yyyy' : 'EEE, MMM d, yyyy', { locale: language =='fr-FR'? fr : enUS });
                return `${formattedStartDate}\u00A0\u00A0 • \u00A0\u00A0${startTime.toLowerCase()}`;
            }

                }
    }
    
    const location = useLocation();

    useEffect(() => {
        const thisRoute = location.pathname.split('/')[1];
        if (thisRoute === 'events') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [current, location.pathname]);

    
    return (
        <Container>
            <Fetch<any> url={`${process.env.REACT_APP_baseURL}events?page=${current}&pageSize=${eventsPerPage}`}>
                {({ response }) => {
                    if (!response) {
                        return <Loader />;
                    }

                    setTotalPages(response?.totalPages);
                    return response?.events.map((event: any, key: React.Key | null | undefined) => <Event key={key}
                    id={event?._id}
                    headerImage={event?.headerImage}
                    title={event?.title}
                    locationType={event?.locationType}
                    location={event?.physicalLocation}
                    price={event?.price}
                    date={formatEventDateTime(event?.startDate , event?.endDate , event?.startTime? event?.startTime : '', event?.endTime? event?.endTime : '')}
                    />);
                }
                }
            </Fetch>
            <Pages nbrPages={totalPages}/>
        </Container>
    )
}

export default Record

/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 50px;
    margin: auto;
    display: grid;
    gap: 30px;
    align-items: center;
    justify-items: center;
    min-height: 300px;
`;