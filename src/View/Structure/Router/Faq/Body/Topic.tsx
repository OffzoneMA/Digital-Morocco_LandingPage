import styled from 'styled-components';
import React, { useEffect, useState , useRef } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';

// @ts-ignore
import curs2 from '../../../../Media/Icons/curs.svg';


/**
 * Topic
 * 
 * @returns 
 */
const Topic = ({topicId, id, question, answer }: {topicId: number, id: number, question: string, answer: any }) => {

    /**
     * search params
     */
    const [searchParams, setSearchParams] = useSearchParams();

    /**
     * Active state
     * 
     */
    const [active, setActive] = useState(id.toString() === searchParams.get('question'));
    /**
     * Update link and setactive
     * 
     */
    const [topId, setTopId] = useState(searchParams.get('topic') ?? '');
    const [questId, setQuestId] = useState(searchParams.get('question') ?? '');

    
    /**
     * Answer Ref
     */
    const containerRef = useRef<HTMLDivElement>(null) ;

    const answerRef = useRef<HTMLParagraphElement>(null); 

    useEffect(() => {
        setTopId(searchParams.get('topic') ?? '');
    }, [searchParams]);

    useEffect(() => {
        setActive(id.toString() === searchParams.get('question'));
    }, [searchParams]);

    const handleLinkClick = (topicId: string , questionId: string) => {
        setActive(old => !old);
        if (active) {
            setSearchParams({});
        } else {
            setSearchParams({ topic: topicId , question: questionId});
            setTimeout(() => {
                if (containerRef.current) {
                    const yOffset = containerRef.current.getBoundingClientRect().top - 100; 
                    containerRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                    window.scrollBy(0, yOffset); 
                }
            }, 100); 
        }
    };

    useEffect(() => {
        if (active && containerRef.current) {
            const yOffset = containerRef.current.getBoundingClientRect().top - 100; 
            containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            window.scrollBy(0, yOffset); 
        }
    }, [active]);

    

    return (
        <Container onClick={()=>handleLinkClick(topicId.toString(), id.toString())} ref={containerRef}>
            <div id="title">
                <h5><Lang>{question}</Lang></h5>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={active ? 'M1.5 1.25L7 6.75L12.5 1.25' : 'M1.25 12.5L6.75 7L1.25 1.5'} stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {active && <p ref={answerRef} className='animation'>{answer}</p>}
        </Container>
    )
}

export default Topic

/**
 * Container
 * 
 */
const Container = styled.div`
    border-bottom: 1.4px solid #EBEAED;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 15px;
    cursor: url(${curs2}), auto;

    > #title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h5 {
            text-transform: uppercase;
            margin: 0;
            font-family: DMSans-Bold;
            font-size: 14px;
            color: #1E0E62;
            letter-spacing: 0.07em;
        }

        > svg {
            cursor: pointer;
        }
    }

    > p {
        color: #15143966;
        font-size: 16px;
        line-height: 26px;

        > p {
            > span {
                font-family: DMSans-Medium;
            }
        }

        > ul {
           > li {
            > a {
                color: #2575F0;
            }
           }
        }
    }
`;
