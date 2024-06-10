import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Lang } from '../../../../../Controller/Tools/Interface/Lang';
import { Link, useNavigate ,useLocation, useSearchParams } from 'react-router-dom';
import Button from '../../../../Components/Button';
import faqsData from '../list.json'
// @ts-ignore
import curs2 from '../../../../Media/Icons/curs2.svg';

/**
 * Sidebar
 * 
 * @returns 
 */
const Sidebar = () => {
    /**
     * Get Ids from link
     */

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [topicId, setTopicId] = useState(searchParams.get('topic') ?? '');

    useEffect(() => {
        setTopicId(searchParams.get('topic') ?? '');
    }, [searchParams]);

    const handleLinkClick = (topicId: string , questionId: string) => {
        setSearchParams({ topic: topicId });
        setSearchParams({question: questionId})
    };

    /**
     * Navigate
     * 
     */
    const navigate = useNavigate()

    return (
        <Container>
            <p><Lang>Select Topic</Lang></p>
            <div id="links">
            {faqsData.map((topic , index) => (
                    <Link onClick={() => handleLinkClick(topic.id.toString() , topic.questions[0].id.toString())} key={topic.id} to={`/faq?topic=${topic.id}&question=${topic.questions[0].id}`} className={parseInt(topicId) ===topic.id ? 'selected' : ''}>
                        <span className={parseInt(topicId) ===topic.id ? 'selected' : ''}><Lang>{topic.name}</Lang></span>
                    </Link>
                ))}
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
            font-family: DMSans-Medium;

            &:hover {
                color: #00CDAE;
                > span {
                    cursor: url(${curs2}), auto;
                }
            }
            
        }
        .selected {
            color: #00CDAE;

            ::selection {
                background: #2575F0;
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
                background-color: #3016C0;
                border-color: #3016C0;
                filter: none;
            }
        }
    }
    @media (min-width: 601px) and (max-width: 900px) {
        max-width: 100%;

        > p {
            font-size: 13px;
        }

        > #links {
            gap: 18px;

            > a {
                font-size: 17px;
            }
        }

        > #help {
            margin-top: 80px;

            > h3 {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 600px) {
        max-width: 100%;

        > p {
            font-size: 12px;
        }

        > #links {
            gap: 15px;

            > a {
                font-size: 16px;
            }
        }

        > #help {
            margin-top: 60px;

            > h3 {
                font-size: 16px;
            }
        }
    }
`;