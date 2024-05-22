import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { useLocation, useParams } from 'react-router-dom';

// @ts-ignore
import Imag23 from '../../../../Media/Images/image23.jpg';
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const { blog } = location.state || {};

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);

    if (blog) {
        return (
            <Container>
                {blog.details.split('\n').map((line: string, index: React.Key) => (
                    <p key={index}><Lang>{line}</Lang></p>
                ))}
                <img src={blog.image || Imag23} alt="" loading="lazy" />
                {blog.content.split('\n').map((line: string, index: React.Key) => (
                    <p key={index}><Lang>{line}</Lang></p>
                ))}
            </Container>
        );
    }

    return (
        <Container>
            <Fetch<any>
            url={`${process.env.REACT_APP_baseURL}blogs/${id}`}
            method="GET"
        >
            {({ response }) => (
                <>
                    {response ? (
                        <>
                            {response?.details.split('\n').map((line: string , index: React.Key | null | undefined) =>
                                <p key={index}><Lang>{line}</Lang></p>
                            ) }
                            <img src={response?.image || Imag23} alt="" loading='lazy'/>
                            {response?.content.split('\n').map((line: string , index: React.Key | null | undefined) =>
                                <p key={index}><Lang>{line}</Lang></p>
                            ) }
                        </>
                    ) : (
                        <div><Loader/></div>
                    )}
                </>
            )}
        </Fetch>
        </Container>
    );
};

export default Content;

/**
 * Container
 * 
 */
const Container = styled.div`
    > p {
        font-size: 16px;
        color: #15143966;
        font-family: DMSans-Regular;
        line-height: 26px;
    }

    > img {
        max-width: 100%;
        margin-top: 18px;
        margin-bottom: 18px;
        border-radius: 10px;
    }
    > div {
        margin: auto;
        height: 100%;
        width: 100%;
    }
`;
