import React, { useState } from 'react'
import styled from 'styled-components'
import Fetch from '../../../../Controller/Tools/Server/Fetch'
import Loader from '../../../Components/Loader'
import { MemberInterface } from '../../../../Application/Member'
import Partner from './partner'


/**
 * Record
 * 
 * @returns 
 */
const Record = () => {

    /**
     * Page state
     * 
     */
    const [page] = useState(1)

    /**
     * Url
     * 
     */
    const url = `https://digitalmorocco-dev.vercel.app/partners/?page=${page}`

    return (
        <Container>
            <Fetch<ResponseInterface> url={url}>
                {({ response }) => !response ? <Loader /> : (
                    <div id="items">
                        {response.partners.map(partner => <Partner key={partner._id} data={partner} />)}
                    </div>
                )}
            </Fetch>
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;

    > #items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 35px;
        width: 100%;
    }
`;


/**
 * Response interface
 * 
 */
interface ResponseInterface {
    partners: MemberInterface[]
    totalPages: number
}