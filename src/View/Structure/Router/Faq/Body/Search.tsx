import styled from 'styled-components';
import React from 'react'
import { useLang } from '../../../../../Controller/Tools/Interface/Lang';


/**
 * Search
 * 
 * @returns 
 */
const Search = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return (
        <Container>
            <input type="text" placeholder={lang('Search question/topic')} />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#475467" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Container>
    )
}

export default Search

/**
 * Container
 * 
 */
const Container = styled.div`
    position: relative;
    height: 40px;
    width: auto;
    
    > input {
        border: 2px solid #EBEAED;
        width: calc(100% - 70px);
        border-radius: 34px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding-inline: 20px;
        padding-inline-end: 50px;
        outline: none;
        font-size: 16px;
        font-weight: bold;

        &::placeholder {
            color: rgb(21 20 57 / 40%);
        }

        &:focus {
            border-color: #53B1FD;
            box-shadow: 0px 0px 0px 4px #007FFF21;
        }
    }

    > svg {
        position: absolute;
        right: 15px;
        top: 4px;
        bottom: 0;
        margin: auto;
        cursor: pointer;
    }
`;