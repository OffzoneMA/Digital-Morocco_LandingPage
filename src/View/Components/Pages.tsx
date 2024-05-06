import React, { useState } from 'react'
import styled from 'styled-components';
import { Lang } from '../../Controller/Tools/Interface/Lang';
import { useSearchParams } from 'react-router-dom';

/**
 * Pages
 * 
 * @returns 
 */

const Pages = ({ nbrPages = 1 }: PagesProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [current, setCurrent] = useState<number>(parseInt(searchParams.get("page") || "1"));

    const generatePageLinks = () => {
        const maxVisiblePages = 4; 

        if (nbrPages <= maxVisiblePages) {
            return Array.from({ length: nbrPages }, (_, i) => i + 1);
        }

        const pageLinks: (number | string)[] = [1];
        const middle = Math.floor(maxVisiblePages / 2);
        const start = current - middle;
        const end = current + middle;

        if (start > 1) {
            pageLinks.push('...'); 
        }

        for (let i = Math.max(2, start); i <= Math.min(nbrPages - 1, end); i++) {
            pageLinks.push(i);
        }

        if (end < nbrPages - 1) {
            pageLinks.push('...'); 
        }

        pageLinks.push(nbrPages);

        return pageLinks;
    };

    const handlePrevClick = () => {
        const prevPage = current - 1;
        if (prevPage >= 1) {
            setSearchParams({ page: prevPage.toString() });
            setCurrent(prevPage);
        }
    };

    const handleNextClick = () => {
        const nextPage = current + 1;
        if (nextPage <= nbrPages) {
            setSearchParams({ page: nextPage.toString() });
            setCurrent(nextPage);
        }
    };

    return (
        <Container>
            <div className='move' onClick={handlePrevClick}>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1667 6H0.833374M0.833374 6L5.83337 11M0.833374 6L5.83337 1" stroke="#667085" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p><Lang>Prev</Lang></p>
            </div>
            <div id="items">
                {generatePageLinks().map((link, index) => (
                    <div 
                        key={index} 
                        className={`item ${link === current ? 'active' : ''}`}
                        onClick={() => {
                            if (typeof link === 'number') {
                                setSearchParams({ page: link.toString() });
                                setCurrent(link);
                            }
                        }}
                    >
                        {link}
                    </div>
                ))}
            </div>
            <div className='move' onClick={handleNextClick}>
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
    height: 50px;
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


interface PagesProps {
    nbrPages?: number;
  }
  