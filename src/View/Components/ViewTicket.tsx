import React, { forwardRef, Ref } from 'react';
import { styled } from 'styled-components';
import { Lang } from '../../Controller/Tools/Interface/Lang';
import QRCode from 'qrcode.react';


interface TicketProps {
  title?: string;
  date?: string;
  locationType?: string;
  location?: string;
  price?: number;
  name?: string;
  address?: string;
  email?: string;
  ticketNumber?: number;
  TicketCode?: string;
}

const ViewTicket = forwardRef<HTMLDivElement, TicketProps>((props, ref: Ref<HTMLDivElement>) => {
  const { title, date, locationType, location, price , name , address , email , ticketNumber , TicketCode } = props;

  return (
    <Container ref={ref}>
      <div id='title'>
        <h3>#432-092</h3>
        <h2>{title || "North Africa Dreamin' 2023"}</h2>
      </div>
      <div id='userInfo'>
            <div className='item'>
                <b><Lang>Your Name</Lang></b>
                <p><Lang>{name || "Cameron Williamson"}</Lang></p>
            </div>
            <div className='item'>
                <b><Lang>Address</Lang></b>
                <p><Lang>{address || "2715 Ash Dr. San Jose, South Dakota 83475"}</Lang></p>
            </div>
            <div className='item'>
                <b><Lang>Email</Lang></b>
                <p><Lang>{email || "janelle.champlin@hotmail.com"}</Lang></p>
            </div>
      </div>
      <div id='ticketInfo'>
        <div className='info'>
            <h3><Lang>Your Ticket</Lang></h3>
            <div className='item'>
                <b>{ticketNumber || 1} x</b>
                <p className='ticketTitle'><Lang>{title || "North Africa Dreamin' 2023"}</Lang></p>
            </div><div className='item'>
                <b><Lang>Date</Lang></b>
                <p><Lang>{date || "Fri, Sep 1, 2023  18:30AM"}</Lang></p>
            </div>
            <div className='item'>
                <b><Lang>Location</Lang></b>
                <p><Lang>{location || "Farah Hotel, Casablanca"}</Lang></p>
            </div>
            <div className='item'>
                <b><Lang>Ticket Code</Lang></b>
                <p><Lang>{TicketCode || "NAD00345"}</Lang></p>
            </div>
        </div>
        <div className='qr'>
            <QRCode size={172} value="https://reactjs.org/" renderAs="canvas" />,
        </div>
      </div>
      <div id='footer'>
        <p>The <span>Ticket Terms and Conditions</span> apply to the booking of all Event tickets to the exclusion of all other terms and conditions.</p>
        <p>Need Assistance? If you have any questions or need assistance, feel free to contact our support team at <span> support@digitalmorocco.com</span>.</p>
      </div>
    </Container>
  );
});

export default ViewTicket;


const Container = styled.div`
    margin: auto;
    margin-top: 100px;
    max-width: var(--content-width);
    width: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    border: 1px solid #aaaaaa33; 

    > #title {
        display: flex;
        flex-direction: column;
        background: #f2f4f7;
        padding: 42px 24px;
        gap: 10px;

        > h3 {
            line-height: 19.6px;
            margin: 0;
            font-family: DMSans-Bold
            font-size: 14px;
            letter-spacing: 0.14em;
            color: #2575F0;

        }

        > h2 {
            line-height: 32px;
            margin: 0;
            font-family: DMSans-Medium;
            font-size: 22px;
            color: #101828;
        }
    }

    > #userInfo {
        display: flex;
        flex-direction: column;
        padding: 32px 24px;
        gap: 12px;
        border: 0px 0px 1px 0px;
        border-bottom: 1px solid #e4e7ec;

        > .item {
            display: grid;
            grid-template-columns: 240px 1fr;

            > b {
                font-family: DMSans-Medium;
                font-size: 14px;
                line-height: 26px;
                color: #344054;
                margin: 0;

            }
            > p {
                margin: 0;
                font-family: DMSans-Regular;
                font-size: 14px;
                line-height: 26px;
                color: #475467;
            }
        }
    }

    > #ticketInfo {
        display: grid;
        grid-template-columns: 1fr 178px;
        border-bottom: 1px solid #E4E7EC;
        padding: 32px 24px 32px 24px;
        gap: 38px;
        border: 0px 0px 1px 0px;

        > .info{
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;

            > h3 {
                font-family: DMSans-Bold;
                font-size: 14px;
                line-height: 26px;
                margin: 0;
                color: #344054;
            }
            > .item {
                display: grid;
                grid-template-columns: 240px 1fr;

                > b {
                    font-family: DMSans-Medium;
                    font-size: 14px;
                    line-height: 26px;
                    color: #344054;
                    margin: 0;
    
                }
                > p {
                    margin: 0;
                    font-family: DMSans-Regular;
                    font-size: 14px;
                    line-height: 26px;
                    color: #475467;
                }

                > .ticketTitle {
                    font-family: DMSans-Medium;
                }
            }
        }
    }

    > #footer {
        display: flex;
        flex-direction: column;
        padding: 24px 94px 24px 94px;
        gap: 10px;

        > p {
            margin: 0;
            font-family: DMSans-Regular;
            font-size: 12px;
            line-height: 19.2px;
            text-align: center;
            color: #667085;

            > span {
                color: #2575F0;
            }

        }

    }
`;