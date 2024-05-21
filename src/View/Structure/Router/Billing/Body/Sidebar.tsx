import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import Button from '../../../../Components/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../Components/Input';
import { language } from '../../../../Language';

/**
 * Sidebar
 * 
 * @returns 
 */
const Sidebar = () => {

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


    /**
     * Checkout Infos
     */

    const [checkoutInfo, setCheckoutInfo] = useState<any>(null);

    const [serviceFee, setServiceFee] = useState(() => {
        const fee = process.env.REACT_APP_SERVICEFEE;
        return fee ? Number(fee) : 1;
    });


    useEffect(() => {
        const storedInfo = sessionStorage.getItem('checkoutInfo');
        if (storedInfo) {
            setCheckoutInfo(JSON.parse(storedInfo));
        }
    }, []);

    useEffect(() => {
        if(!checkoutInfo?.promoCodeChecked){
            if (promoCode === checkoutInfo?.promoCode) {
                const totalPrice = checkoutInfo.price * checkoutInfo.quantity * 0.9 + serviceFee;
                setCheckoutInfo((prevInfo: any) => ({
                    ...prevInfo,
                    total: totalPrice,
                    promoCodeChecked: true
                }));
                setErrorMessage(null);
            } else {
                if(promoCode.length > 5) {
                    setErrorMessage('Promo Code incorrect or expired.');
                }
                else{
                    setErrorMessage(null);
                }
            }
        }
    } , [promoCode])


    return (
        <Container>
            <h5><Lang>Order Summary</Lang></h5>
            <div className='item'>
                <p>{checkoutInfo?.quantity || 1}x <Lang>Ticket</Lang></p>
                {language === 'fr-FR' ?
                <b>{(Number(checkoutInfo?.price) * Number(checkoutInfo?.quantity)).toFixed(2)} $</b>
                :
                <b>$ {(Number(checkoutInfo?.price) * Number(checkoutInfo?.quantity)).toFixed(2)}</b>
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
                <b>{checkoutInfo?.subTotal.toFixed(2)} $</b>
                :
                <b>$ {checkoutInfo?.subTotal.toFixed(2)}</b>
                }
            </div>
            <Input $height={49} $background='#FCFCFD' $hasError={errorMessage !==null} placeholder={lang('Enter Promo Code')}  onChange={(e)=> setPromoCode(e.target.value)}/>
            {errorMessage && <span id='errorMsg'>{errorMessage}</span>}
            <hr style={{ border: '1px solid #EBEAED' , marginTop: '24px'}} />
            <div id="total">
                <p><Lang>Total</Lang></p>
                {language === 'fr-FR' ?
                <b>{checkoutInfo?.total.toFixed(2)} $</b>
                :
                <b>$ {checkoutInfo?.total.toFixed(2)}</b>
                }
            </div>
            <Button onClick={() => navigate('/thanks')} $isFill $background='#482BE7' $color='white' $padding={[12, 30]}><Lang>Proceed to Checkout</Lang></Button>
        </Container>
    )
}

export default Sidebar

/**
 * Container
 * 
 */
const Container = styled.div`
    border: 1.3px solid #EBEAED;
    border-radius: 10px;
    box-shadow: 0px 4px 6px -2px #1018280D, 0px 12px 16px -4px #1018281A;
    padding: 20px;
    padding-block: 27px;
    height: fit-content;
    background-color: #FCFCFD;

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
        font-size: 14px;
        color: #E85555CC;
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
            background-color: #00CDAE;
            border-color: #00CDAE;
            filter: none;
        }
    }
    
`;