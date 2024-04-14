import React from 'react'
import styled from 'styled-components'
import { MemberInterface } from '../../../../Application/Member'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'


/**
 * Member
 * 
 * @returns 
 */
const Member = ({ data }: { data: MemberInterface }) => {

    return (
        <Container>
            <div id="logo">
                <img src={data.logo} alt='' loading='lazy' />
            </div>
            <p id="name">{data.companyName}</p>
            <p id="sector">Healthcare</p>
            <p id="desc">{data.desc}</p>
            <a id="website" href={data.website} target='_blank' rel="noreferrer">
                <Lang>Visit Website</Lang>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.75 5.75L14.75 1.25M14.75 1.25H10.25M14.75 1.25L8.75 7.25M6.5 2.75H4.85C3.58988 2.75 2.95982 2.75 2.47852 2.99524C2.05516 3.21095 1.71095 3.55516 1.49524 3.97852C1.25 4.45982 1.25 5.08988 1.25 6.35V11.15C1.25 12.4101 1.25 13.0402 1.49524 13.5215C1.71095 13.9448 2.05516 14.289 2.47852 14.5048C2.95982 14.75 3.58988 14.75 4.85 14.75H9.65C10.9101 14.75 11.5402 14.75 12.0215 14.5048C12.4448 14.289 12.789 13.9448 13.0048 13.5215C13.25 13.0402 13.25 12.4101 13.25 11.15V9.5" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </Container>
    )
}

export default Member


/**
 * Container
 * 
 */
const Container = styled.div`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto auto;
    background-color: #FCFCFD;
    gap: 10px 10px; 
    grid-template-areas: 
      "logo logo"
      "name sector"
      "desc desc"
      "website website";
    border-radius: 14px;
    border: 2px solid #EBEAED;
    padding: 20px;

    #logo {
        grid-area: logo;
        display: flex;
        align-items: center;
        margin: auto;
        height: 100px;

        > img {
            max-height: 100%;
            max-width: 100%;
            width: auto;
            height: auto;
        }
    }

    #name {
        grid-area: name;
        align-self: center;
        margin: 0;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        font-family: DMSans-Medium;
    }

    #sector {
        grid-area: sector;
        justify-self: end;
        align-self: center;
        margin: 0;
        border: 2px solid #2E90FA;
        background-color: rgb(46 144 250 / 12%);
        color: #2E90FA;
        border-radius: 30px;
        padding: 5px 10px;
    }

    #desc {
        grid-area: desc;
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: rgb(21 20 57 / 60%);
    }

    #website {
        grid-area: website;
        align-self: end;
        color: #2E90FA;
        display: flex;
        text-decoration: none;
        align-items: center;
        gap: 7px;
        border-bottom: 1.5px solid;
        width: fit-content;
    }

    &:hover {
        border-color: #2E90FA;
        box-shadow: 0px 12px 16px -4px rgb(16 24 40 / 10%);
    }
`;