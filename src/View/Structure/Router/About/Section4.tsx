import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import actions from '../../../../Store/actions'
import Profile, { ProfileInterface } from './Profile'
import Fetch from '../../../../Controller/Tools/Server/Fetch'

// @ts-ignore
import curs2 from '../../../Media/Icons/curs2.svg';

/**
 * Section4
 * 
 * @returns 
 */
const Section4 = () => {

    return (
        <Container>
            <p id="slug"><Lang>Our Team</Lang></p>
            <h3><Lang>Discover Our Dynamic Team Behind Digital Morocco</Lang></h3>
            <div id="team">
                <Fetch<ProfileInterface[]> url='/storage/team/list.json'>
                    {({ response }) => !response ? null : response.map((profile, key) => (
                        <div key={key} className='item' onClick={() => actions.dialog(close => <Profile data={profile} close={close} />)}>
                            <img src={`/storage/team/pictures/${profile.profile}`} alt='' loading='lazy' />
                            <div id="content">
                                <p id="name">{profile.name}</p>
                                <p id="job">{profile.job}</p>
                            </div>
                        </div>
                    ))}
                </Fetch>
            </div>
        </Container>
    )
}

export default Section4


/**
 * Container
 * 
 */
const Container = styled.div`
    margin: auto;
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 100px;
    text-align: center;

    > #slug {
        font-size: 14px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #344054;
    }

    > h3 {
        font-size: 36px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: -0.4px;
        color: #344054;

        // Media
        @media (max-width: 900px) {
            font-size: 25px;
        }
    }

    > #team {
        display: flex;
        gap: 35px;
        margin: auto;
        width: fit-content;
        margin-top: 70px;

        > .item {
            position: relative;

            > img {
                width: auto;
                height: 286px;
                border-radius: 10px;

                // Media
                @media (max-width: 1050px) {
                    width: 100%;
                    height: auto;
                }
            }

            > #content {
                font-family: DMSans-Medium;

                > #name {
                    font-size: 21px;
                    line-height: 20px;
                    text-align: center;
                }

                > #job {
                    font-size: 14px;
                    line-height: 26px;
                    letter-spacing: 2px;
                    color: rgb(21 20 57 / 40%);
                    text-transform: uppercase;
                    font-family: DMSans-Bold;
                }
            }

            &:hover > #content > #name {
                color: #00CDAE;
                cursor: url(${curs2}), auto;
            }
        }

        // Media
        @media (max-width: 1050px) {
            flex-direction: column;
        }
    }
`;