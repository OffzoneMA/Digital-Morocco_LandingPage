import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import styled from 'styled-components';
import React from 'react'
import Button from '../../../../Components/Button';

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
            <h2>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="19.95" stroke="#25DAC5" strokeWidth="2.1" />
                    <path d="M16.275 21.525L19.5756 24.675L26.25 18.375" stroke="#25DAC5" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Lang>Thanks for your order!</Lang>
            </h2>
            <hr style={{ border: '1px solid #EBEAED' }} />
            <b className='label'><Lang>You’re going to</Lang></b>
            <h1>North Africa Dreamin' 2023<br />THE #1 SALESFORCE COMMUNITY CONFERENCE IN AFRICA</h1>
            <b className='label'><Lang>1 ticket sent to</Lang></b>
            <p>Saturday, October 21, 2023    8am - 9pm +01 <button className="meet"><Lang>Add to Google Calendar</Lang></button></p>
            <b className='label'><Lang>date</Lang></b>
            <p>Saturday, October 21, 2023    8am - 9pm +01</p>
            <b className='label'><Lang>Note</Lang></b>
            <p>The information below is emailed to you. Scroll down in your confirmation email. Here's the link!<br /><br />

                We're looking forward to you joining us!Join the event using this Zoom link (registration form to deter Zoom mischiefs!):<br />
                Click bit.ly link below to Join Zoom Meeting (or copy and paste into your browser and click 'launch meeting')<br /><br />

                https://bit.ly/StWOpnMicMeeting <br />
                ID: 848 4416 4280 <br />
                Passcode: OpenMic<br /><br />

                Please send us an email if you have any questions.<br /><br />
                Accessibility: Captioning is available, please let us know if you have any other accessibility needs.</p>
            <hr style={{ border: '1px solid #EBEAED' }} />
            <Button style={{ marginBlock: 15 }} $isFill $background='#482BE7' $color='white' $padding={[12, 70]}><Lang>View Ticket</Lang></Button>
            <hr style={{ border: '1px solid #EBEAED' }} />
        </Container>
    )
}

export default Content

/**
 * Container
 * 
 */
const Container = styled.div`

    > .label {
        font-size: 14px;
        text-transform: uppercase;
        margin-top: 30px;
        margin-bottom: 10px;
        display: block;
        font-family: DMSans-Medium;
    }

    > h2 {
        font-size: 24px;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    > h1 {
        font-size: 28px;
        margin: 0;
    }

    > p {
        color: #15143966;
        font-size: 16px;
        font-family: DMSans-Medium;
    }

    .meet {
        background-color: #482BE7;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: white;
        padding: 4px 12px;
        margin-inline-start: 5px;
    }

    > button {
        transition: 300ms;

        &:hover {
            background-color: #00CDAE;
            border-color: #00CDAE;
            filter: none;
        }
    }
`;