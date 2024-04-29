import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link, useSearchParams } from 'react-router-dom';
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

    /**
     * SearchParams
     */
    const [searchParams, setSearchParams] = useSearchParams();

    /**
     * Tolal Pages
     */
    const [totalPages, setTotalPages] = useState(1);
    const [current, setCurrent] = useState<number>(parseInt(searchParams.get("page") || "1"));
    const blogsPerPage = 1; 

    const getTotalPages = (totalItems: number) => {
        return Math.ceil(totalItems / blogsPerPage);
    };

    useEffect(() => {
        setCurrent(Number(searchParams.get("page")) || 1);
    }, [searchParams]);

    return (
        <Container>
            <Fetch<any> url={`${process.env.REACT_APP_baseURL}blogs?page=${current}&pageSize=${blogsPerPage}`}>
                {({ response }) => {
                    if (!response) {
                        return <Loader />;
                    }

                    setTotalPages(response?.totalPages);
                    return response?.blogs.map((blog: any, key: React.Key | null | undefined) => (
                        <Link key={key} to={`/post/${blog?._id}`} className='item'>
                            <img src={blog.image} alt="" />
                            <h1>{blog?.title}</h1>
                            <b>{format(blog?.date, 'dd MMMM yyyy', { locale: enUS }).toUpperCase()}</b>
                            <p>{blog?.resume}</p>
                        </Link>
                    ));
                }}
            </Fetch>
            <Pages nbrPages={totalPages} />
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