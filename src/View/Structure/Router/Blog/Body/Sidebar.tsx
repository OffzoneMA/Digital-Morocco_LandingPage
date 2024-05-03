import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';

// @ts-ignore
import Image from '../../../../Media/Images/image.png'
// @ts-ignore
import Imag1 from '../../../../Media/Images/image (1).png'
// @ts-ignore
import Imag2 from '../../../../Media/Images/image (2).png'
// @ts-ignore
import Imag3 from '../../../../Media/Images/image (3).png'
// @ts-ignore
import Imag4 from '../../../../Media/Images/image (4).png'
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
                        <div className="item">
                            <img src={blog?.image || Image} alt="" />
                        <h5><Lang>{blog?.title}</Lang></h5>
                    </div>
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
    margin-bottom: 50px;
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
            cursor: pointer;

            > img {
                width: 92px;
                border-radius: 10px;
                height: 84px;
            }

            > h5 {
                margin: 0;
                font-size: 15px;
            }

            &:hover {
                color: #00CDAE;
            }
        }
    }
`;