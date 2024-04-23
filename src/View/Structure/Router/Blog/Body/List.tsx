import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link } from 'react-router-dom';
import Pages from '../../../../Components/Pages';

// @ts-ignore
import Imag5 from '../../../../Media/Images/image (5).png'
// @ts-ignore
import Imag6 from '../../../../Media/Images/image.jpg'
// @ts-ignore
import Imag7 from '../../../../Media/Images/image5.jpg'
// @ts-ignore
import Imag9 from '../../../../Media/Images/image9.jpg'
// @ts-ignore
import Imag10 from '../../../../Media/Images/image10.jpg'


/**
 * List
 * 
 * @returns 
 */
const List = () => {

    return (
        <Container>
            <Link to='/post' className='item'>
                <img src={Imag5} alt="" />
                <h1><Lang>Maximizing Revenue Through Effective Revenue Operations Planning</Lang></h1>
                <b>20 JULY 2023</b>
                <p><Lang>When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.</Lang></p>
            </Link>
            <Link to='/post' className='item'>
                <img src={Imag6} alt="" />
                <h1><Lang>Maximizing Revenue Through Effective Revenue Operations Planning</Lang></h1>
                <b>20 JULY 2023</b>
                <p><Lang>When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.</Lang></p>
            </Link>
            <Link to='/post' className='item'>
                <img src={Imag7} alt="" />
                <h1><Lang>Maximizing Revenue Through Effective Revenue Operations Planning</Lang></h1>
                <b>20 JULY 2023</b>
                <p><Lang>When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.</Lang></p>
            </Link>
            <Link to='/post' className='item'>
                <img src={Imag9} alt="" />
                <h1><Lang>Maximizing Revenue Through Effective Revenue Operations Planning</Lang></h1>
                <b>20 JULY 2023</b>
                <p><Lang>When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.</Lang></p>
            </Link>
            <Link to='/post' className='item'>
                <img src={Imag10} alt="" />
                <h1><Lang>Maximizing Revenue Through Effective Revenue Operations Planning</Lang></h1>
                <b>20 JULY 2023</b>
                <p><Lang>When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.</Lang></p>
            </Link>
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