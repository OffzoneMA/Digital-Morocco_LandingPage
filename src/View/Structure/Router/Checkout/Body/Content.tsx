import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import Quantity from '../../../../Components/Quantity';
import styled from 'styled-components';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';


/**
 * Content
 * 
 * @returns 
 */
const Content = () => {
    /**
     * Get Event Id
     */

    /**
     * Update quatity
     */

    const [quantity, setQuantity] = useState(1)


    const { id } = useParams<{ id: string }>();

    return (
        <Container>
            <h1><Lang>Buy Ticket</Lang></h1>
            <Fetch<any>
            url={`${process.env.REACT_APP_baseURL}events/${id}`}
            method="GET"
        >
            {({ response }) => (
                <>
                    {response ? (
                    <div className='item'>
                        <div id="content">
                            <h4><Lang>{response?.title}</Lang></h4>
                            {response?.price > 0 ? (
                            <>
                                {response?.salesEndDate ? (
                                    <p><Lang>Sales end on </Lang><Lang>{format(response?.salesEndDate, 'MMM d, yyyy', { locale: enUS }).toString()}</Lang></p>
                                ) : (
                                    <>
                                        {response?.startDate ? (
                                            <p><Lang>Sales end on </Lang><Lang>{format(response?.startDate, 'MMM d, yyyy', { locale: enUS }).toString()}</Lang></p>
                                        ) : (
                                            <p><Lang>Sales end on </Lang><Lang>Event Start Day</Lang></p>
                                        )}
                                    </>
                                )}
                            </>
                            ) : (
                                <p><Lang>Free</Lang></p>
                            )}
                        </div>
                        <div id="total">
                            <b>$ {(Number(response?.price.toFixed(2)) * quantity).toFixed(2)}</b>
                            <Quantity setQuantityValue={setQuantity} />
                        </div>
                    </div>
                    ) : (
                        <Loader/>
                    )}
                </>
            )}
            </Fetch>
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
        font-family: DMSans-Bold;
        font-size: 32px; 
        line-height: 22px; 
    }

    > .item {

        > #content {
            border-bottom: 2px solid #EBEAED;
            border-top: 2px solid #EBEAED;
            padding-block: 15px;
            padding-top: 19px;

            > h4 {
                font-size: 18px;
                margin: 0;
                font-family: DMSans-Medium;
                line-height: 28px; 
            }

            > p {
                margin-block: 6px;
                font-size: 14px;
                color: #15143966;
                font-family: DMSans-Medium;
            }
        }

        > #total {
            display: flex;
            font-size: 18px;
            font-family: DMSans-Medium;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
    }
`;