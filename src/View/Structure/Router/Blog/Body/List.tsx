import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';
import Pages from '../../../../Components/Pages';
import { format } from 'date-fns';
import { enUS , fr} from 'date-fns/locale';
import { language } from '../../../../Language';

// @ts-ignore
import curs2 from '../../../../Media/Icons/curs2.svg';



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
    const blogsPerPage = 5; 

    useEffect(() => {
        setCurrent(Number(searchParams.get("page")) || 1);
    }, [searchParams]);

    const location = useLocation();

    useEffect(() => {
        const thisRoute = location.pathname.split('/')[1];
        if (thisRoute === 'blog') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [current, location.pathname]);
    

    return (
        <Container>
            <Fetch<any> url={`${process.env.REACT_APP_baseURL}blogs?page=${current}&pageSize=${blogsPerPage}`}>
                {({ response }) => {
                    if (!response) {
                        return <Loader />;
                    }

                    setTotalPages(response?.totalPages);
                    return response?.blogs.map((blog: any, key: React.Key | null | undefined) => (
                        <Link key={key} to={`/post/${blog?._id}`} state={{blog}} className='item'>
                            <img src={blog?.image} alt="" loading='lazy'/>
                            <h1><Lang>{blog?.title}</Lang></h1>
                            <b>{format(blog?.date, 'd MMMM yyyy', { locale: language =='fr-FR'? fr : enUS }).toUpperCase()}</b>
                            <p><Lang>{blog?.resume}</Lang></p>
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
            > * {
                cursor: url(${curs2}), auto;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 10px;
        
        > .item {
            > h1 {
                font-size: 1.4rem;
            }
            > b {
                font-size: 16px;
            }

            > p {
                margin-top: 30px;
                font-size: 15px;
                line-height: 1.4;
            }
        }
    }

    @media (max-width: 576px) {
        padding: 5px;

        > .item {
            > h1 {
                font-size: 1.2rem;
            }
            > b {
                font-size: 15px;
            }

            > p {
                margin-top: 20px;
                font-size: 14px;
                line-height: 1.2;
            }
        }
    }
`;