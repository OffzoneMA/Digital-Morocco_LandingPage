import React from 'react'
import styled from 'styled-components';
import Event, { EventInterface } from './Event';
import Fetch from '../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../Components/Loader';
import Pages from '../../../Components/Pages';

/**
 * Record
 * 
 * @returns 
 */
const Record = () => {
    return (
        <Container>
            <Fetch<EventInterface[]> url="/storage/events/list.json">
                {({ response }) => !response ? <Loader /> :
                    response.map((event, key) => <Event key={key}
                        {...event}
                        image={`/storage/events/images/${event.image}`}
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