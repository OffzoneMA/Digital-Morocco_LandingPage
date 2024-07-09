import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'

/**
 * Contact data
 * 
 * @returns 
 */
const ContactData = () => {

    return (
        <Container>
            <div className="item">
                <h5><Lang>General Inquiries</Lang></h5>
                <p><Lang>Email:</Lang> info@digitalmorocco.net</p>
                {/* <p>Phone: +123-456-7890</p> */}
            </div>
            <div className="item">
                <h5><Lang>Membership Support:</Lang></h5>
                <p><Lang>Email:</Lang> support@digitalmorocco.net</p>
                {/* <p>Phone: +123-456-7890</p> */}
            </div>
            {/* <div className="item">
                <h5><Lang>Visit Us</Lang></h5>
                <p>Digital Morocco Headquarters</p>
                <p>123 Innovation Street, Casablanca, Morocco</p>
            </div> */}
            <div className="item">
                <h5><Lang>Social Media</Lang></h5>
                <p><Lang>Connect with us on social media for the latest updates, events, and more!</Lang></p>
                <p>Facebook: @DigitalMorocco</p>
                <p>Instagram: @DigitalMorocco</p>
                <p>LinkedIn: @DigitalMorocco</p>
            </div>
        </Container>
    )
}

export default ContactData


/**
 * Container
 * 
 */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > .item {

        > h5 {
            margin: 7px 0;
            font-size: 22px;
            font-weight: 100;
            font-family: DMSans-Medium;
        }

        > p {
            margin: 0;
            color: rgb(21 20 57 / 40%);
            line-height: 28px;
        }
    }
`;