import styled from 'styled-components';
import React from 'react';
import { Lang } from '../../../../Controller/Tools/Interface/Lang';


const Notices = () => {

  

    return (
        <Container>
            <div className=''>
                <label><Lang>Publisher of the Website</Lang></label>
                <p><Lang>The Digital Morocco Platform is published and operated by OFFZONE, a limited liability company registered with the Trade Register of Taza-Maroc under number 6429.</Lang></p>
            </div>
            <div className=''>
                <label><Lang>Publication Director</Lang></label>
                <p><Lang>The Publication Director is Mr. Safouan CHALOUAH.</Lang></p>
            </div>
            <div className=''>
                <label><Lang>Website Host</Lang></label>
                <p><Lang>As a provider of a service operating, managing, and safeguarding personal data in accordance with Moroccan regulations, OFFZONE uses the services of Contabo for hosting personal data.</Lang></p>
                <p><Lang>Contabo's headquarters is located at: Aschauer Straße 32a, 81549 Munich, Germany.</Lang></p>
                <p><Lang>Location of the data centers where Digital Morocco sites are hosted: Frankfurt, Germany.</Lang></p>
            </div>
            <div className=''>
                <label><Lang>Intellectual Property</Lang></label>
                <p><Lang>The Digital Morocco sites are the property of OFFZONE. All elements of the Sites (texts, comments, works, illustrations, and images, whether visual or sound), are protected under copyright law, trademark law, patent law, and applicable laws worldwide. They are the exclusive property of OFFZONE. Accordingly, they may not be reproduced, exploited, or used in any way.</Lang></p>
            </div>
        </Container>
    )
}

export default Notices


/**
 * Container
 * 
 */
const Container = styled.div`
    padding-block: 40px;
    display: grid;
    margin: auto;
    max-width: var(--content-width);
    width: calc(100% - 50px);
    gap:18px;

    > div {
        line-height: 26px;

        > label {
            font-family: DMSans-Medium;
            color: #2575F0;
        }
        > p {
            font-size: 16px;
            color: #15143966;
            font-family: DMSans-Regular;

            > ul {
                margin: 0; 
                padding-left: 25px; 
                > li {
                    > a {
                        color: #2575F0;
                    }

                    > span {
                        font-family: DMSans-Medium;
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        padding-block: 30px;
        width: calc(100% - 40px);
        gap: 10px;

        > div {
            line-height: 22px;

            > label {
                font-size: 14px;
            }
            > .cndp {
                font-size: 14px;
            }
            > p {
                font-size: 14px;

                > ul {
                    padding-left: 20px;
                    > li {
                        > a {
                            font-size: 14px;
                        }
                        > span {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 601px) and (max-width: 900px) {
        padding-block: 30px;
        gap: 15px;

        > div {
            line-height: 24px;

            > label {
                font-size: 15px;
            }
            > .cndp {
                font-size: 15px;
            }
            > p {
                font-size: 15px;

                > ul {
                    padding-left: 22px;
                    > li {
                        > a {
                            font-size: 15px;
                        }
                        > span {
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
`;