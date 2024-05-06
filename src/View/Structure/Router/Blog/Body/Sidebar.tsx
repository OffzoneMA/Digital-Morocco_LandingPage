import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link } from 'react-router-dom';

// @ts-ignore
import Image from '../../../../Media/Images/image.png'
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';

/**
 * Sidebar
 * 
 * @returns 
 */
const Sidebar = () => {

    return (
        <Container>
            <p><Lang>LATEST STORIES</Lang></p>
            <div id="items">
                <Fetch<any> url={`${process.env.REACT_APP_baseURL}blogs/latest/5`}>
                    {({ response }) => !response ? <Loader /> :
                        response?.blogs.map((blog: any, key: React.Key | null | undefined) => 
                        <Link to={`/post/${blog?._id}`} className="item">
                            <img src={blog?.image || Image} alt="" />
                            <h5><Lang>{blog?.title}</Lang></h5>
                        </Link>
                        )}
                </Fetch>
            </div>
        </Container>
    )
}

export default Sidebar

/**
 * Container
 * 
 */
const Container = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    margin-bottom: 200px;
    align-self: flex-start;

    > p {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        color: #15143966;
        margin-bottom: 40px;
    }

    > #items {
        display: grid;
        gap: 20px;
        transition: 300ms;

        > .item {
            display: flex;
            gap: 16px;
            text-decoration: none;

            > img {
                width: 92px;
                border-radius: 10px;
                // height: 84px;
            }

            > h5 {
                margin: 0;
                font-size: 15px;
                // height: 84px;
                overflow: hidden; 
                text-overflow: ellipsis; 
                display: -webkit-box;
                -webkit-line-clamp: 4; 
                -webkit-box-orient: vertical;
                word-wrap: break-word;
            }

            &:hover {
                color: #00CDAE;
            }
        }
    }
`;