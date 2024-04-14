import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import styled from 'styled-components';
import React from 'react'
import Input from '../../../../Components/Input';
import Select from '../../../../Components/Select';
import Checkbox from '../../../../Components/Checkbox';

// @ts-ignore
import pay from '../../../../Media/Images/pay.png'

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return (
        <Container>
            <h1><Lang>Billing information</Lang></h1>
            <div id="form">
                <label>
                    <p><Lang>First Name</Lang></p>
                    <Input type='text' placeholder={lang('First Name')} />
                </label>
                <label>
                    <p><Lang>Last Name</Lang></p>
                    <Input type='text' placeholder={lang('Last Name')} />
                </label>
                <label>
                    <p><Lang>Phone</Lang></p>
                    <Input type='text' placeholder={lang('Phone Number')} />
                </label>
                <label>
                    <p><Lang>e-mail</Lang></p>
                    <Input type='text' placeholder={lang('Email Address')} />
                </label>
                <label>
                    <p><Lang>Job Title</Lang></p>
                    <Input type='text' placeholder={lang('Job Title')} />
                </label>
                <label>
                    <p><Lang>Company</Lang></p>
                    <Input type='text' placeholder={lang('Company Name')} />
                </label>
                <label>
                    <p><Lang>City</Lang></p>
                    <Select>
                        <option><Lang>Select City</Lang></option>
                    </Select>
                </label>
                <label>
                    <p><Lang>Country</Lang></p>
                    <Select>
                        <option><Lang>Select Country</Lang></option>
                    </Select>
                </label>
            </div>
            <Checkbox><Lang>Keep me updated on more events and news from this event organizer</Lang></Checkbox>
            <Checkbox><Lang>Send me emails about the best events happening nearby or online.</Lang></Checkbox>
            <div id="pay-methods">
                <h1>Select Payment Method</h1>
                <img width={250} src={pay} alt="" />
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

    > #form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 20px;

        > label {

            > p {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 14px;
                font-family: DMSans-Medium;
                color: #1E0E62;
            }

            > input, select {
                width: -webkit-fill-available;
            }
        }

        // Media
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }

    > #pay-methods {
        border-top: 2px solid #EBEAED;
        font-family: DMSans-Bold;
    }
`;