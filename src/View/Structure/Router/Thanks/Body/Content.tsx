import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import Button from '../../../../Components/Button';
import ViewTicketPDF from '../../../../Components/ViewTicketPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

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

    /**
     * Checkout Infos
     */

    const [checkoutInfo, setCheckoutInfo] = useState<any>(null);

    useEffect(() => {
      const storedInfo = sessionStorage.getItem('checkoutInfo');
      if (storedInfo) {
          setCheckoutInfo(JSON.parse(storedInfo));
      }
  }, []);

    const handleButtonClick = () => {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          newWindow.document.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Document PDF</title>
                <style>
                  body { margin: 0; }
                </style>
              </head>
              <body>
                <PDFViewer width="100%" height="600">
                  <ViewTicketPDF />
                </PDFViewer>
              </body>
            </html>
          `);
        } else {
          alert("Veuillez autoriser les popups pour afficher le document PDF.");
        }
      };

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
            <h1><Lang>North Africa Dreamin' 2023</Lang><br /><Lang>THE #1 SALESFORCE COMMUNITY CONFERENCE IN AFRICA</Lang></h1>
            <b className='label'>{checkoutInfo?.quantity || 1} <Lang>ticket sent to</Lang></b>
            <p>example.name@email.com</p>
            <b className='label'><Lang>date</Lang></b>
            <p><Lang>Saturday, October 21, 2023 8am - 9pm +01</Lang> <button className="meet"><Lang>Add to Google Calendar</Lang></button></p>
            <b className='label'><Lang>Note</Lang></b>
            <p id='note'><Lang>The information below is emailed to you. Scroll down in your confirmation email. Here's the link!</Lang><br /><br />

                <Lang>We're looking forward to you joining us!Join the event using this Zoom link (registration form to deter Zoom mischiefs!):</Lang><br />
                <Lang>Click bit.ly link below to Join Zoom Meeting (or copy and paste into your browser and click 'launch meeting')</Lang><br /><br />

                https://bit.ly/StWOpnMicMeeting <br />
                ID: 848 4416 4280 <br />
                <Lang>Passcode</Lang> : OpenMic<br /><br />

                <Lang>Please send us an email if you have any questions.</Lang><br />
                <Lang>Accessibility: Captioning is available, please let us know if you have any other accessibility needs.</Lang></p>
            <hr style={{ border: '1px solid #EBEAED' }} />

            <div id='btnDiv'>
            <PDFDownloadLink document={<ViewTicketPDF title="North Africa Dreamin' 2023" TicketCode='OpenMic' name='Ichane Roukéya' ticketNumber={2}/>} fileName="ticket.pdf">
                {({ blob, url, loading, error }) => ( 
                loading ? <Button id='btn' onClick={handleButtonClick} style={{ marginBlock: 15 }} $isFill $background='#482BE7' $color='white' $padding={[12, 70]}><Lang>View Ticket</Lang></Button>:<Button id='btn' onClick={handleButtonClick} style={{ marginBlock: 15 }} $isFill $background='#482BE7' $color='white' $padding={[12, 70]}><Lang>View Ticket</Lang></Button>

                )}
            </PDFDownloadLink>
            </div>
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
        font-family: DMSans-Regular;
    }

    > #note {
        line-height: 26px;
    }

    .meet {
        background-color: #482BE7;
        border: none;
        border-radius: 10px;
        color: white;
        padding: 6.5px 12px;
        margin-inline-start: 5px;
    }

    > #btnDiv {
        > * {
          > button {
            transition: 300ms;
            
            &:hover {
              background-color: #00CDAE;
              border-color: #00CDAE;
              filter: none;
            }
          }
        }
    }
`;