import React from 'react'
import styled from 'styled-components'

/**
 * Profile
 * 
 * @returns 
 */
const Profile = ({ data, close }: { data: ProfileInterface, close: () => void }) => {

    return (
        <Container>
            <img src={`/storage/team/pictures/${data.profile}`} alt='' loading='lazy' />
            <div id="content">
                <p id="job">{data.job}</p>
                <p id="name">{data.name}</p>
                <p id="shortdesc">{data.shortdesc}</p>
                <p id="desc">{data.desc}</p>
            </div>
        </Container>
    )
}

export default Profile


/**
 * Container
 * 
 */
const Container = styled.div`
    display: flex;
    gap: 10px;
    overflow: hidden;
    max-width: 1100px;
    height: 570px;

    > img {
        height: 100%;

        // Media
        @media (max-width: 900px) {
            width: 80%;
            margin: auto;
            margin-top: 42px;
        }
    }

    > #content {
        overflow: auto;
        padding-inline: 84px;
        padding-top: 100px;

        &::-webkit-scrollbar {
            display: none;
        }

        > #job {
            font-size: 14px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 2px;
            color: rgb(21 20 57 / 40%);
            text-transform: uppercase;
        }

        > #name {
            font-size: 36px;
            font-weight: 700;
            letter-spacing: -0.4px;
            margin: 0;
            color: #344054;
        }

        > #shortdesc {
            font-size: 21px;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: left;
            color: #344054;
            font-family: DMSans-Medium;
        }

        > #desc {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }

        > button {
            position: absolute;
            z-index: 2;
            right: 20px;
            top: 15px;
            font-size: 23px;
            color: #dbb3b3;
            // cursor: pointer;
            padding: 0;
            background-color: transparent;
            border: none;
        }

        // Media
        @media (max-width: 900px) {
            overflow: initial;
            padding: 20px;
        }
    }

    // Media
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: calc(100vh - 70px);
    }
`;


/**
 * Profile interface
 * 
 */
export interface ProfileInterface {
    name: string
    job: string
    profile: string
    shortdesc: string
    desc: string
}