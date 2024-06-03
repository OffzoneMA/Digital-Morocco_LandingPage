import MultiSelect, { SelectedInterface } from '../../../Components/MultiSelect'
import { Lang, useLang } from '../../../../Controller/Tools/Interface/Lang'
import { MemberInterface } from '../../../../Application/Member'
import Fetch from '../../../../Controller/Tools/Server/Fetch'
import Loader from '../../../Components/Loader'
import React, { useState } from 'react'
import styled from 'styled-components'
import Member from './member'

/**
 * API_URL
 * 
 */
const API_URL = `${process.env.REACT_APP_baseURL}members`;

/**
 * Record
 * 
 * @returns 
 */
const Record = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page state
     * 
     */
    const [page] = useState(1)

    /**
     * Sector filter state
     * 
     */
    const [sectorFilter, setSectorFilter] = useState<SelectedInterface[]>([])

    /**
     * Stage filter state
     * 
     */
    const [stageFilter, setStageFilter] = useState<SelectedInterface[]>([])

    /**
     * Country filter state
     * 
     */
    const [countryFilter, setCountryFilter] = useState<SelectedInterface[]>([])

    /**
     * Filters
     * 
     */
    const filters = [...sectorFilter, ...stageFilter, ...countryFilter];

    /**
     * Params
     * 
     */
    const params = {
        page: page,
        sectors: sectorFilter.map(filter => filter.value).toString(),
        stages: stageFilter.map(filter => filter.value).toString(),
        countries: countryFilter.map(filter => filter.value).toString()
    }

    return (
        <Container>
            <div id="filter">
                <div id="fields" style={{ borderBottom: filters.length ? "none" : undefined }}>
                    <MultiSelect label={lang('Filter by Sector')} options={sectors} onChange={setSectorFilter} />
                    <MultiSelect label={lang('Filter by Stage')} options={stages} onChange={setStageFilter} />
                    <MultiSelect label={lang('Filter by Country')} options={countries} onChange={setCountryFilter} />
                </div>
                {filters[0] && <div id="used">
                    <p><Lang>Result for</Lang>:</p>
                    <div id="items">
                        {filters.map((option, key) => (
                            <div key={key} className='item animation'>
                                <p><Lang>{option.label}</Lang></p>
                                <button onClick={option.remove}>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33329 1.66699L1.66663 8.33366M1.66663 1.66699L8.33329 8.33366" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    {<button id="clear" onClick={() => filters.forEach(filter => filter.remove())}>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 4.75L8.25 9.25M8.25 4.75L12.75 9.25M2.04 7.72L5.28 12.04C5.544 12.392 5.676 12.568 5.84329 12.6949C5.99145 12.8074 6.15924 12.8913 6.33808 12.9423C6.54 13 6.76 13 7.2 13H12.9C14.1601 13 14.7902 13 15.2715 12.7548C15.6948 12.539 16.039 12.1948 16.2548 11.7715C16.5 11.2902 16.5 10.6601 16.5 9.4V4.6C16.5 3.33988 16.5 2.70982 16.2548 2.22852C16.039 1.80516 15.6948 1.46095 15.2715 1.24524C14.7902 1 14.1601 1 12.9 1H7.2C6.76 1 6.54 1 6.33808 1.05767C6.15924 1.10874 5.99145 1.19264 5.84329 1.30506C5.676 1.432 5.544 1.608 5.28 1.96L2.04 6.28C1.84635 6.53819 1.74953 6.66729 1.71221 6.80907C1.67926 6.93423 1.67926 7.06577 1.71221 7.19093C1.74953 7.33271 1.84635 7.46181 2.04 7.72Z" stroke="#151439" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p><Lang>Clear Filter</Lang></p>
                    </button>}
                </div>}
            </div>
            <div id="record">
                <Fetch<ResponseInterface> url={API_URL} params={params}>
                    {({ response }) => !response ? <Loader /> : (
                        <div id="items" className='animation'>
                            {response.members.map(member => <Member key={member._id} data={member} />)}
                        </div>
                    )}
                </Fetch>
            </div>
        </Container>
    )
}

export default Record


/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: var(--content-width);
    width: calc(100% - 50px);
    padding-block: 50px;
    margin: auto;
    display: grid;
    gap: 20px;

    > #filter {
        display: grid;

        > #fields {
            display: grid;
            width: fit-content;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
            border-bottom: 1px solid rgb(16 24 40 / 10%);
            padding-bottom: 10px;

            @media (max-width: 768px) {
                // grid-template-columns: 1fr 1fr;
                display: flex;
                flex-flow: row wrap;
                gap: 10px;
                width: 100%;
            }
        }

        > #used {
            display: grid;
            grid-template-columns:auto 1fr auto;
            align-items: center;
            gap: 20px;
            justify-content: space-between;
            border-bottom: 1px solid rgb(16 24 40 / 10%);
            border-top: 1px solid rgb(16 24 40 / 10%);

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
                padding-bottom: 10px;
                gap: 10px;

                > p{
                    display: none;
                }

                > #clear{
                    max-width: 140px;
                }
            }

            >p {
                font-family: DMSans-Medium;
                font-size: 18px;
                line-height: 26px;
                margin: 0;

            }

            > #items {
                padding-top: 20px;

                > .item {
                    background-color: #2E90FA;
                    display: inline-flex;
                    align-items: center;
                    gap: 20px;
                    padding: 10px 20px;
                    color: white;
                    border-radius: 50px;
                    margin-inline-end: 10px;
                    margin-block-end: 20px;

                    > p {
                        margin: 0;
                    }

                    > button {
                        background-color: transparent;
                        border: none;
                        padding: 0;
                        margin: 0;
                        opacity: 0.6;
                        position: relative;
                        top: 1px;

                        &:hover {
                            opacity: 1;
                        }
                    }

                    // Media
                    @media (max-width: 900px) {
                        padding: 5px 10px;
                        gap: 10px;
                    }
                }
            }

            > #clear {
                background: transparent;
                border: none;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                gap: 5px;
                color: rgb(21 20 57 / 40%);
                border-bottom: 1px solid;

                > p {
                    font-weight: normal;
                    margin: 0;
                    font-size: 16px;
                }
            }
        }
    }

    > #record {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;

        > #items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 35px;
            width: 100%;
        }
    }
`;


/**
 * Sectors
 * 
 */
const sectors = [
    { label: 'Fintech', value: 'Fintech' },
    { label: 'Healthtech', value: 'Healthtech' },
    { label: 'ECommerce', value: 'ECommerce' },
    { label: 'Edutech', value: 'Edutech' },
    { label: 'Travel', value: 'Travel' },
    { label: 'CRM', value: 'CRM' },
    { label: 'HRM', value: 'HRM' }
];

/**
 * Stages
 * 
 */
const stages = [
    { label: 'Idea', value: 'Idea' },
    { label: 'Pree-Seed', value: 'Pree-Seed' },
    { label: 'Seed', value: 'Seed' },
    { label: 'Serie A', value: 'Serie A' },
    { label: 'Serie B', value: 'Serie B' },
    { label: 'Serie C', value: 'Serie C' },
    { label: 'Serie D', value: 'Serie D' },
    { label: 'Serie E', value: 'Serie E' },
    { label: 'IPO', value: 'ipo' }
];

/**
 * Countries
 * 
 */
const countries = [
    { label: 'Morocco', value: 'Morocco' },
    { label: 'France', value: 'France' }
];


/**
 * Response interface
 * 
 */
interface ResponseInterface {
    members: MemberInterface[]
    totalPages: number
}