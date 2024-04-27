import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link } from 'react-router-dom';
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';
import Pages from '../../../../Components/Pages';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';



/**
 * List
 * 
 * @returns 
 */
const List = () => {

    return (
        <Container>
            <Fetch<any> url="http://localhost:5000/blogs">
                {({ response }) => !response ? <Loader /> :
                    response.map((blog: any, key: React.Key | null | undefined) => 
                    <Link key={key} to={`/post/${blog?._id}`} className='item'>
                        <img src={blog.image} alt="" />
                        <h1><Lang>{blog?.title}</Lang></h1>
                        <b>{format(blog?.date, 'dd MMMM yyyy', { locale: enUS }).toUpperCase()}</b>
                        <p><Lang>{blog?.resume}</Lang></p>
                    </Link>
                    )}
            </Fetch>
            <Pages />
        </Container>
    )
}

export default List

/**
 * Container
 * 
 */
const Container = styled.div`
    display: grid;
    gap: 20px;
    justify-items: center;

    > .item {
        cursor: pointer;
        text-decoration: none;

        > img {
            width: 100%;
            border-radius: 12px;
        }

        > b {
            color: #15143966;
            font-weight: bold;
        }

        > p {
            margin-top: 40px;
            color: #15143966;
            font-size: 16px;
            line-height: 26px;

        }

        &:hover {
            color: #00CDAE;
        }
    }
`;