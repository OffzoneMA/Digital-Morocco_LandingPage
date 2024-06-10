import styled from 'styled-components'
import React from 'react'

// @ts-ignore
import image76 from '../../../Media/Images/image76.jpg'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import Fetch from '../../../../Controller/Tools/Server/Fetch'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import Loader from '../../../Components/Loader'
import { language } from '../../../Language'

/**
 * Header
 * 
 * @returns 
 */
const Header = () => {

    /**
     * Get Id Param
     */
    const { id } = useParams<{ id: string }>();

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
                   <img src={response?.coverImage || image76} alt="" loading='lazy'/>
                   <div id="layer">
                    <div id="content">
                    <h1><Lang>{response.title}</Lang></h1>
                                <div id="info">
                                <p>{format(response?.date, 'd MMMM yyyy', { locale: language =='fr-FR'? fr : enUS }).toUpperCase()}</p>
                                    {response.tags && response.tags.length > 0 ? (
                                    <div id="tags">
                                        {
                                            response.tags.map((tag: string, index: number) => (
                                                <span key={index}><Lang>{tag}</Lang></span>
                                            ))
                                       }
                                    </div>
                                     ) : (
                                        <span></span>
                                    )
                                    }
                                </div>
                    </div>
                </div>
                </>
                ) : (
                    <div id='loader'><Loader/></div>
                )}
            </>
                
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

    @media (max-width: 900px) {
        min-height: 450px;
    }

    @media (max-width: 468px) {
        margin-top: 60px;
        min-height: 400px;
    }

    > #loader {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        height: 100%;
        width: 100%;
    }
    
    > p{
        height: 100%;
        scale: 1.1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    
    > img {
        width: auto;
        min-width: 80%;
        height: 100%;
        scale: 1.1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        // object-fit: cover;


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

            > p {
                font-size: 48px;
                animation: rotate 1s linear infinite;
            }

            > h1 {
                font-size: 58px;
                max-width: 780px;
                margin: 0;

                @media (max-width: 1024px) {
                    font-size: 52px;
                }

                @media (max-width: 900px) {
                    font-size: 42px;
                }

                @media (max-width: 600px) {
                    font-size: 34px;
                }

                @media (max-width: 468px) {
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

                        @media (max-width: 768px) {
                            // padding: 5px 13px;
                            font-size: 13px;
                        }

                        @media (max-width: 468px) {
                            // padding: 3px 8px;
                            font-size: 12px;
                        }
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
`;

