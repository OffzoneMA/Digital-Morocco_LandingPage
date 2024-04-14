import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../Components/Button';

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

    return (
        <Container>
            <p><Lang>Select Topic</Lang></p>
            <div id="links">
                <Link to='/topic'><Lang>Account and Registration</Lang></Link>
                <Link to='/topic'><Lang>Membership and Profiles</Lang></Link>
                <Link to='/topic'><Lang>Networking and Connections</Lang></Link>
                <Link to='/topic'><Lang>Becoming Investors</Lang></Link>
                <Link to='/topic'><Lang>Events and Activities</Lang></Link>
                <Link to='/topic'><Lang>Partnerships and Sponsorships</Lang></Link>
                <Link to='/topic'><Lang>Billing and Payments</Lang></Link>
            </div>
            <div id="help">
                <h3><Lang>Didn't find the answer you were looking for ?</Lang></h3>
                <Button $isFill $background='#482BE7' $color='white' onClick={() => navigate("/contact")}><Lang>Get Help</Lang></Button>
            </div>
        </Container>
    )
}

export default Sidebar

/**
 * Container
 * 
 */
const Container = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    margin-bottom: 50px;
    align-self: flex-start;

    > p {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        color: #15143966;        
    }

    > #links {
        display: grid;
        gap: 20px;

        > a {
            color: #2575F0;
            text-decoration: none;
            font-size: 18px;

            &:hover {
                color: #00CDAE;
            }
        }
    }

    > #help {
        margin-top: 120px;

        > h3 {
            font-size: 22px;
        }

        > button {
            transition: 300ms;

            &:hover {
                background-color: #00CDAE;
                border-color: #00CDAE;
                filter: none;
            }
        }
    }
`;