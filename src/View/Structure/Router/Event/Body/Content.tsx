import styled from 'styled-components';
import React from 'react'
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import { useParams } from 'react-router-dom';

// @ts-ignore
import Imag23 from '../../../../Media/Images/image23.jpg'
import Loader from '../../../../Components/Loader';

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    const { id } = useParams<{ id: string }>();

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
                            {response?.description.split('\n').map((line: string , index: React.Key | null | undefined) =>
                                <p key={index}><Lang>{line}</Lang></p>
                            ) }
                            {
                                response?.youtubeVideo ? 
                                <iframe
                                    src={response?.youtubeVideo }>
                                </iframe>
                                :
                                <img src={response?.image || Imag23} alt="" />
                            }
                            {response?.summary.split('\n').map((line: string , index: React.Key | null | undefined) =>
                                <p key={index}><Lang>{line}</Lang></p>
                            ) }
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

export default Content

/**
 * Container
 * 
 */
const Container = styled.div`

    > p {
        font-size: 16px;
        color: #15143966;
        line-height: 26px;
    }

    > iframe {
        width: 100%;
        border: none;
        height: 350px;
    }

    > img {
        max-width: 100%;
        margin-top:18px;
        margin-bottom:18px;
    
`;