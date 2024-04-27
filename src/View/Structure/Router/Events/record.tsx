import React from 'react'
import styled from 'styled-components';
import Event, { EventInterface } from './Event';
import Fetch from '../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../Components/Loader';
import Pages from '../../../Components/Pages';
import { format, parse } from 'date-fns';
import { enUS } from 'date-fns/locale';

/**
 * Record
 * 
 * @returns 
 */
const Record = () => {

    function formatEventDateTime(startDate: Date, endDate: Date, startTime: string, endTime: string): string {
    
        if (!startDate || !endDate || !startTime || !endTime || startTime=='' || endTime=='' ) {
            return 'Coming Soon';
        }
        else {
            const formattedStartTimev = format(parse(startTime, 'h:mm a', new Date()), 'ha', { locale: enUS }).toLowerCase();
            const formattedEndTimev = format(parse(endTime, 'h:mm a', new Date()), 'ha', { locale: enUS }).toLowerCase();

            const startDateTime = new Date(startDate);
            const endDateTime = new Date(endDate);

            if (startDateTime.getDate() === endDateTime.getDate() && startDateTime.getMonth() === endDateTime.getMonth() && startDateTime.getFullYear() === endDateTime.getFullYear()) {
                const formattedDate = format(startDateTime, 'EEEE, MMMM d', { locale: enUS });
                const gmtOffset = startDateTime.getTimezoneOffset() / 60; // Offset en heures
                const gmt = gmtOffset >= 0 ? `+${gmtOffset}` : gmtOffset.toString(); // Gestion du signe pour le décalage GMT
                return `${formattedDate}\u00A0\u00A0 • \u00A0\u00A0${formattedStartTimev} - ${formattedEndTimev} ${gmt}`;
            } else {
                const formattedStartDate = format(startDateTime, 'EEE, MMM d, yyyy', { locale: enUS });
                return `${formattedStartDate}\u00A0\u00A0 • \u00A0\u00A0${startTime.toLowerCase()}`;
            }

                }
    }

    
    return (
        <Container>
            <Fetch<any> url="http://localhost:5000/events">
                {({ response }) => !response ? <Loader /> :
                    response.map((event: any, key: React.Key | null | undefined) => <Event key={key}
                    id={event?._id}
                    headerImage={event?.headerImage}
                    title={event?.title}
                    locationType={event?.locationType}
                    location={event?.physicalLocation}
                    price={event?.price.toFixed(2)}
                    date={formatEventDateTime(event?.startDate , event?.endDate , event?.startTime? event?.startTime : '', event?.endTime? event?.endTime : '')}
                    />)}
            </Fetch>
            <Pages />
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