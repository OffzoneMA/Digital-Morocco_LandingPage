import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import {useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


/**
 * Copyright
 * 
 * @returns 
 */
const Copyright = () => {

    /**
     * Location
     * 
     */
    const location = useLocation();

    /**
     * This route
     * 
     */
    const thisRoute = location.pathname.split('/')[1];

    return (
        <Container>
            <div id="links">
                <Link to='/terms' className={thisRoute === 'terms' ? 'active' : ''}><span><Lang>Terms of Use</Lang></span></Link>
                <a href='/privacy' className={thisRoute === 'privacy' ? 'active' : ''}><span><Lang>Privacy Policy</Lang></span></a>
                <a href='/legalNotices' className={thisRoute === 'legalNotices' ? 'active' : ''}><span><Lang>Legal Notice</Lang></span></a>
            </div>
            <p id="copyright"><Lang>Copyright © 2023 Digital Morocco, all Rights Reserved.</Lang> <Lang>By</Lang> <a rel="noreferrer" href="https://offzone.net/" target="_blank">OFFZONE</a></p>
        </Container>
    )
}

export default Copyright


/**
 * Container
 * 
 */
const Container = styled.div`
    color: var(--color-grey);
    font-size: 12px;
    text-align: center;
    padding-top: 10px;

    > #links {
        line-height: 25px;
        font-family: DMSans-Regular;

        > a {
            text-decoration: none;
            margin-inline-end: 15px;

            &:hover {
                color: var(--color-green);
            }
        }

        > .active {
            color: var(--color-green);
        }
    }

    > #copyright {
        font-family: DMSans-Regular;

        > a {
            font-family: DMSans-Medium;
            color: #2575F0;
            text-decoration: none;
        }
    }
`;