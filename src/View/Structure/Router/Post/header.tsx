import styled from 'styled-components'
import React from 'react'

// @ts-ignore
import image76 from '../../../Media/Images/image76.jpg'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import Fetch from '../../../../Controller/Tools/Server/Fetch'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

/**
 * Header
 * 
 * @returns 
 */
const Header = () => {

    const { id } = useParams<{ id: string }>();

    return (
        <Container>
            <img src={image76} alt="" />
            <Fetch<any>
            url={`${process.env.REACT_APP_baseURL}blogs/${id}`}
            method="GET"
        >
            {({ response }) => (
                <div id="layer">
                    <div id="content">
                        {response ? (
                            <>
                                <h1><Lang>{response.title}</Lang></h1>
                                <div id="info">
                                    <p>{format(response?.date, 'dd MMMM yyyy', { locale: enUS }).toUpperCase()}</p>
                                    <div id="tags">
                                       {response.tags?.[0].split(',').map((tag: string, index: number) => (
                                            <span key={index}><Lang>{tag}</Lang></span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            )}
            </Fetch>
        </Container>
    )
}

export default Header


/**
 * Container
 * 
 */
const Container = styled.div`
    position: relative;
    margin-top: 80px;
    min-height: 500px;
    max-height: 500px;
    overflow: hidden;
    max-width: 100vw;
    padding: 20px;
    
    > img {
        height: 100%;
        scale: 1.1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;


        // Media
        @media (max-width: 900px) {
            height: 100%;
            width: auto;
        }
    }

    > #layer {
        background-color: #482BE733;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        display: grid;

        > #content {
            max-width: var(--content-width);
            width: calc(100% - 50px);
            padding-block: 50px;
            align-self: end;
            justify-self: center;
            color: white;

            > h1 {
                font-size: 58px;
                max-width: 780px;
                margin: 0;

                // Media
                @media (max-width: 900px) {
                    font-size: 30px;
                }
            }

            > #info {
                display: flex;
                align-items: center;
                gap: 15px;

                > p {
                    text-transform: uppercase;
                    font-size: 14px;
                }

                > #tags {
                    display: flex;
                    gap: 10px;

                    > span {
                        background-color: #FFFFFF4D;
                        border: 2px solid;
                        border-radius: 50px;
                        padding: 7px 17px;
                        font-weight: bold;
                        text-transform: uppercase;
                        font-size: 14px;
                        letter-spacing: 3px;
                        margin: 0;
                    }
                }

                // Media
                @media (max-width: 900px) {
                    flex-direction: column;
                }
            }

            // Media
            @media (max-width: 900px) {
                align-self: center;
                justify-self: center;
            }
        }
    }

    // Media
    @media (max-width: 900px) {
        min-height: 300px;
    }
`;