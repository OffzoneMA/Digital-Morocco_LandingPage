import React from 'react'
import styled from 'styled-components';
import { Lang } from '../../Controller/Tools/Interface/Lang';

/**
 * Pages
 * 
 * @returns 
 */
const Pages = () => {

    return (
        <Container>
            <div className='move'>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1667 6H0.833374M0.833374 6L5.83337 11M0.833374 6L5.83337 1" stroke="#667085" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p><Lang>Prev</Lang></p>
            </div>
            <div id="items">
                <div className='item active'>1</div>
                <div className='item'>2</div>
                <div className='item'>3</div>
                <div className='item'>4</div>
            </div>
            <div className='move'>
                <p><Lang>Next</Lang></p>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.833374 6H14.1667M14.1667 6L9.16671 1M14.1667 6L9.16671 11" stroke="#667085" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Container>
    )
}

export default Pages

/**
 * Container
 * 
 */
const Container = styled.div`
    border: 2px #EBEAED solid;
    border-radius: 50px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: fit-content;
    color: #15143966;
    overflow: hidden;

    > #items {
        display: flex;
        margin: auto;
        height: 100%;
        align-items: center;

        > .item {
            height: 100%;
            display: flex;
            align-items: center;
            width: 55px;
            justify-content: center;
            font-size: 17px;
            border-inline-end: 2px #EBEAED solid;
            cursor: pointer;
            font-weight: bold;

            &:first-child {
                border-inline-start: 2px #EBEAED solid;
            }

            &:hover {
                background-color: #344054;
                color: white;
            }

            &.active {
                background-color: #344054;
                color: white;
            }
        }
    }

    > .move {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-weight: bold;
        padding-inline: 13px;

        &:hover {
            background-color: #344054;
            color: white;
        }
    }
`;