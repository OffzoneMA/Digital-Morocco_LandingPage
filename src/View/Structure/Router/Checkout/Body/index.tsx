import React, { useEffect, useState } from 'react'
import Quantity from '../../../../Components/Quantity';
import styled from 'styled-components';
import Fetch from '../../../../../Controller/Tools/Server/Fetch';
import Loader from '../../../../Components/Loader';
import { format } from 'date-fns';
import { enUS , fr } from 'date-fns/locale';
import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import Button from '../../../../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../../../Components/Input';
import axios from 'axios';
import { language } from '../../../../Language';

/**
 * Body
 * 
 * @returns 
 */
const Body = () => {

    /**
     * Get Event Id
     */
    const { id } = useParams<{ id: string }>();

    /**
     * Update quatity
     */

    const [quantity, setQuantity] = useState(1)

    /**
     * Navigate
     * 
     */
    const navigate = useNavigate()

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Promo code value
     */

    const [promoCode  , setPromoCode ] = useState('');

    /**
     * Promo Code error message
     */
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const [serviceFee, setServiceFee] = useState(() => {
        const fee = process.env.REACT_APP_SERVICEFEE;
        return fee ? Number(fee) : 1;
    });

    console.log(process.env.REACT_APP_SERVICEFEE)

    const [eventPromoCode , setEventPromoCode ] = useState('');

    /**
     * CheckOut Infos
     */
    const [info, setInfo] = useState<CheckoutInfo>({
        quantity: 0,
        price: 0,
        subTotal: 0,
        total: 0,
        promoCode: '',
        promoCodeChecked: false
      });

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_baseURL}events/${id}`);
                const eventData = response.data;

                if (eventData) {
                    const { price } = eventData;
                    const totalPrice = promoCode === eventData.promoCode ? price * 0.9 * quantity + serviceFee: price * quantity + serviceFee;
                    const subTotal = price * quantity + serviceFee;

                    setInfo({
                        quantity,
                        price,
                        subTotal,
                        total: totalPrice,
                        promoCode: eventData?.promoCode || '', 
                        promoCodeChecked: promoCode === eventData?.promoCode 
                    });

                    if(promoCode?.length >= 5 && promoCode !== eventData?.promoCode) {
                        setErrorMessage('Expired or incorrect promo code!');
                    }
                    else {
                        setErrorMessage(null);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch event data:', error);
            }
        };

        fetchData();
    }, [id, quantity, promoCode]);

    const handleCheckout = () => {
        sessionStorage.setItem('checkoutInfo', JSON.stringify(info));
        navigate('/billing');
    };

    return (
        <Container>
            <Fetch<any>
                url={`${process.env.REACT_APP_baseURL}events/${id}`}
                method="GET"
            >
                {({ response }) => {
                    if (!response) {
                        return <div id="loader"><Loader/></div>;
                    }
                    return (<>
                        <ContainerContent>
                            <h1><Lang>Buy Ticket</Lang></h1>
                            <div className='item'>
                                <div id="content">
                                    <h4><Lang>{response?.title}</Lang></h4>
                                    {response?.price > 0 ? (
                                        <>
                                            {response?.salesEndDate ? (
                                                <p><Lang>Sales end on </Lang><Lang>{format(response?.salesEndDate, language =='fr-FR'? 'd MMM yyyy' : 'MMM d, yyyy', { locale: language =='fr-FR'? fr : enUS}).toString()}</Lang></p>
                                            ) : (
                                                <>
                                                    {response?.startDate ? (
                                                        <p><Lang>Sales end on </Lang><Lang>{format(response?.startDate, language =='fr-FR'? 'd MMM yyyy' : 'MMM d, yyyy' , { locale: language =='fr-FR'? fr : enUS }).toString()}</Lang></p>
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
                                    {language === 'fr-FR' ? <b>{(Number((response?.price).toFixed(2)) * quantity).toFixed(2)} $</b> :
                                    <b>$ {(Number((response?.price).toFixed(2)) * quantity).toFixed(2)}</b>
                                    }                                    
                                    <Quantity setQuantityValue={setQuantity} />
                                </div>
                            </div>
                        </ContainerContent>
                        <ContainerSidebar>
                            <h5><Lang>Order Summary</Lang></h5>
                            <div className='item'>
                                <p>{quantity}x <Lang>Ticket</Lang></p>
                                {language === 'fr-FR' ?
                                 <b>{(Number((response?.price).toFixed(2)) * quantity).toFixed(2)} $</b>
                                :
                                <b>$ {(Number((response?.price).toFixed(2)) * quantity).toFixed(2)}</b>
                                }
                            </div>
                            <div className='item'>
                                <p><Lang>Service Fee</Lang></p>
                                {language === 'fr-FR' ?
                                 <b>{Number(serviceFee).toFixed(2)} $</b>
                                :
                                <b>$ {Number(serviceFee).toFixed(2)}</b>
                                }
                            </div>
                            <hr style={{ border: '1px solid #EBEAED' }} />
                            <div className='item'>
                                <p><Lang>Sub Total</Lang></p>
                                {language === 'fr-FR' ?
                                <b>{(Number((response?.price).toFixed(2)) * quantity + Number(serviceFee)).toFixed(2)} $</b>
                                :
                                <b>$ {(Number((response?.price).toFixed(2)) * quantity + Number(serviceFee)).toFixed(2)}</b>
                                }
                            </div>
                            <Input $height={49} $hasError={errorMessage !== null} $background='#FCFCFD' placeholder={lang('Enter Promo Code')} onChange={(e)=> setPromoCode(e.target.value)}/>
                            {errorMessage && <span id='errorMsg'><Lang>{errorMessage}</Lang></span>}
                            <hr style={{ border: '1px solid #EBEAED' , marginTop: '24px'}} />
                            <div id="total">
                                <p><Lang>Total</Lang></p>
                                {language === 'fr-FR' ?
                                <b>
                                {promoCode === response?.promoCode
                                    ? (Number((response?.price * 0.9).toFixed(2)) * quantity + Number(serviceFee)).toFixed(2)
                                    : (Number((response?.price).toFixed(2)) * quantity + Number(serviceFee)).toFixed(2) 
                                } $
                                </b>                               
                                :
                                <b>
                                $ {promoCode === response?.promoCode
                                    ? (Number((response?.price * 0.9).toFixed(2)) * quantity + Number(serviceFee)).toFixed(2)
                                    : (Number((response?.price).toFixed(2)) * quantity + Number(serviceFee)).toFixed(2) 
                                } 
                                </b>                               
                                }
                            </div>
                            <Button onClick={handleCheckout} $isFill $background='#482BE7' $color='white' $padding={[12, 30]}><Lang>Check Out</Lang></Button>
                        </ContainerSidebar>
                    </> )
                }}
            </Fetch>
        </Container>
    )
}

export default Body

/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 50px;
    padding-block: 150px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 50px;

    > #loader {
        display: flex;
        margin: auto;
        align-items: center;
    }

    // Media
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

/**
 * Container
 * 
 */
const ContainerContent = styled.div`
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

/**
 * Container Sidebar
 * 
 */
const ContainerSidebar = styled.div`
border: 1.3px solid #EBEAED;
border-radius: 10px;
box-shadow: 0px 4px 6px -2px #1018280D, 0px 12px 16px -4px #1018281A;
padding: 20px;
padding-block: 27px;
height: fit-content;
background-color: #FCFCFD;
// min-width: 320px;

> h5 {
    margin: 0;
    font-size: 16px;
    color: #1D2939;
    font-family: DMSans-Bold;
    line-height: 20.83px; 
    margin-block: 6px;

}
> hr {
    margin-block: 12px;
}
> #errorMsg {
    margin: 0;
    font-size: 14px;
    color: #EC7373;
    font-family: DMSans-Medium;
}

> .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 20.83px;
    margin-block: 3px; 


    > p {
        color: #98A2B3;
        font-size: 16px;
        font-family: DMSans-Medium;
    }

    > b {
        font-size: 18px;
        font-family: DMSans-Medium;
    }
}

> input {
    margin: auto;
    display: block;
    width: -webkit-fill-available;
    margin-top: 15px;
    margin-bottom: 12px;
}

> #total {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
        font-size: 18px;
        font-family: DMSans-Medium;
    }

    > b {
        font-size: 22px;
        font-family: DMSans-Bold;
    }
}

> button {
    margin: auto;
    display: block;
    width: -webkit-fill-available;
    transition: 300ms;

    &:hover {
        background-color: #3016C0;
        border-color: #3016C0;
        filter: none;
    }
}

    
`;

interface CheckoutInfo {
    quantity: number;
    price: number;
    subTotal: number;
    total: number;
    promoCode: string;
    promoCodeChecked: boolean;
  }