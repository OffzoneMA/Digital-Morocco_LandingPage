import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import Quantity from '../../../../Components/Quantity';
import styled from 'styled-components';
import React from 'react'


/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    return (
        <Container>
            <h1><Lang>Buy Ticket</Lang></h1>
            <div className='item'>
                <div id="content">
                    <h4><Lang>North Africa Dreamin' 2023</Lang></h4>
                    <p><Lang>Sales end  on August, 31 2023</Lang></p>
                </div>
                <div id="total">
                    <b>$ 29.00</b>
                    <Quantity />
                </div>
            </div>
        </Container>
    )
}

export default Content

/**
 * Container
 * 
 */
const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;

    > h1 {
        margin-top: 0;
    }

    > .item {

        > #content {
            border-bottom: 2px solid #EBEAED;
            border-top: 2px solid #EBEAED;
            padding-block: 15px;
            padding-top: 17px;

            > h4 {
                font-size: 18px;
                margin: 0;
            }

            > p {
                margin-block: 5px;
                font-size: 14px;
                color: #15143966;
            }
        }

        > #total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
    }
`;