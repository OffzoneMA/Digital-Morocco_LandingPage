import styled from 'styled-components';
import React from 'react'
import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import Button from '../../../../Components/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../Components/Input';

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

    return (
        <Container>
            <h5><Lang>Order Summary</Lang></h5>
            <div className='item'>
                <p><Lang>1x Ticket</Lang></p>
                <b>$ 29.00</b>
            </div>
            <div className='item'>
                <p><Lang>Service Fee</Lang></p>
                <b>$ 0.00</b>
            </div>
            <hr style={{ border: '1px solid #EBEAED' }} />
            <div className='item'>
                <p><Lang>Sub Total</Lang></p>
                <b>$ 29.00</b>
            </div>
            <Input placeholder={lang('Enter Promo Code')} />
            <hr style={{ border: '1px solid #EBEAED' }} />
            <div id="total">
                <p><Lang>Sub Total</Lang></p>
                <b>$ 29.00</b>
            </div>
            <Button onClick={() => navigate('/events/billing')} $isFill $background='#482BE7' $color='white' $padding={[12, 30]}><Lang>Check Out</Lang></Button>
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
    height: fit-content;
    background-color: #FCFCFD;

    > h5 {
        margin: 0;
        font-size: 16px;
        color: #1D2939;
        font-family: DMSans-Medium;
    }

    > .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > p {
            color: #98A2B3;
        }
    }

    > input {
        margin: auto;
        display: block;
        width: -webkit-fill-available;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    > #total {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > p {
            font-size: 18px;
            font-weight: bold;
        }

        > b {
            font-size: 22px;
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