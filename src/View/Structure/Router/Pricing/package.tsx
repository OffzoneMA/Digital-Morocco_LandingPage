import React from 'react'
import styled from 'styled-components'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import Button from '../../../Components/Button'

/**
 * Packages
 * 
 * @returns 
 */
const Package = ({ name, price, desc, features, recommended, btnText, mask, ...restProps }: {
    name: string
    price: number
    desc: string
    features: string[]
    recommended?: boolean
    btnText?: string
    mask?: boolean
    // isStartup?: boolean
} & React.HTMLAttributes<HTMLDivElement>) => {

    const handleButtonClick = () => {
        if (btnText === 'Start') {
            window.open('https://app.digitalmorocco.net/SignUp', '_blank');
        }
    }

    return (
        <Container {...restProps} $recommended={recommended} $mask={mask}>
            <div id="data">
                <p id="name">{name}</p>
                <div id="price">
                    <b id="currency">{price==0? '':'$'}</b>
                    {/* <b id="value">{price==0? <Lang>Free</Lang>:price}</b> */}
                    <b id="value"><Lang>{price==0? 'Free':'Upcoming'}</Lang></b>
                    {/* <p id="duration"><Lang>{price==0? '':'per month'}</Lang></p> */}
                </div>
                <p id="desc">{desc}</p>
            </div>
            <div id="featuresblur">
                <div id="features" >
                    {features.map((feature, key) => <p key={key}>
                        <span>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.5L4.97059 8L13 1" stroke="#25DAC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        {feature}
                    </p>)}
                </div>
                {mask && 
                <div id="mask">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1144 7.63848C16.724 7.54835 17.3529 7.5 18.0006 7.5C25.6581 7.5 30.6829 14.2573 32.371 16.9302C32.5754 17.2538 32.6775 17.4155 32.7347 17.665C32.7776 17.8524 32.7776 18.148 32.7346 18.3354C32.6774 18.5849 32.5745 18.7477 32.3688 19.0734C31.919 19.7852 31.2333 20.7857 30.3247 21.8707M10.0865 10.0726C6.84337 12.2726 4.64168 15.3291 3.63166 16.9279C3.42643 17.2528 3.32381 17.4152 3.26661 17.6647C3.22365 17.8521 3.22363 18.1477 3.26657 18.335C3.32374 18.5845 3.4259 18.7463 3.6302 19.0698C5.31831 21.7427 10.3431 28.5 18.0006 28.5C21.0882 28.5 23.7478 27.4014 25.9332 25.9149M4.50062 4.5L31.5006 31.5M14.8186 14.818C14.0043 15.6324 13.5006 16.7574 13.5006 18C13.5006 20.4853 15.5153 22.5 18.0006 22.5C19.2433 22.5 20.3683 21.9963 21.1826 21.182" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div id="maskContent">
                        <p id="disc"><Lang>Discover all the features for investors</Lang></p>
                        <p id="discUpgrade"><Lang>Upgrade to</Lang> <a href=''>Digital Morocco Premium</a> <Lang>to access all features, investment management tools, tracking, and much more.</Lang></p>
                    </div>
                </div>
                }
            </div>
            <Button
            onClick={handleButtonClick}
                $size={18}
                $background={recommended ? 'var(--color-green)' : '#EBEAED'}
                $color={recommended ? 'white' : undefined}
                $isFill={recommended}
                $padding={[9, 25]}
                $width={200}
                $fontFamily='DMSans-Medium'
                $fontWeight='medium'
            >
                <Lang>{btnText? btnText: "Start Free Trial"}</Lang>
            </Button>
        </Container>
    )
}

export default Package


/**
 * Container
 * 
 */
const Container = styled.div<{
    $recommended?: boolean
    $mask?: boolean
}>`
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    gap: 15px;
    // min-width: 370px;
    // max-width: 400px;



    > #data {
        display: grid;
        grid-template-rows: 100px auto auto;
        justify-items: center;
        text-align: center;
        padding-inline: 30px;
        border: 2px solid ${p => p.$recommended ? '#2575F0' : '#EBEAED'};
        background-color: ${p => p.$recommended ? '#2575F0' : 'initial'};
        color: ${p => p.$recommended ? 'white' : 'initial'};
        border-radius: 10px;
        min-height: 345px;

        > #name {
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2px;
            margin: 0;
            font-family: DMSans-Bold;
            align-self: center;
            color: ${p => p.$recommended ? 'white' : '#1E0E62'};
        }

        > #price {
            display: flex;
            gap: 5px;
            height: fit-content;
            color: ${p => p.$recommended ? 'white' : '#1E0E62'};

            > #currency {
                line-height: 1;
                font-size: 31px;
                align-self: start;
                margin-top: 5px;
                font-family: DMSans-Bold;
            }

            > #value {
                line-height: 1;
                font-size: 58px;
                align-self: end;
                font-family: DMSans-Bold;
            }

            > #duration {
                margin: 0;
                line-height: 1;
                align-self: end;
                font-size: 16px;
            }
        }

        > #desc {
            color: ${p => p.$recommended ? 'white' : 'rgb(21 20 57 / 40%)'};
            margin-block: 30px;
            line-height: 26px;
            max-width: 250px;
        }
    }

    #featuresblur {
        position: relative;
        min-height: ${p => p.$mask ? '281px' : ''};
        
        > #features {
            padding-inline: 15px;
    
            > p {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                color: rgb(21 20 57 / 40%);
    
                > svg {
                    position: relative;
                    top: 6px;
                }
            }

            > p:first-of-type {
                font-family: DMSans-Medium; 
            }
        }

        > #mask {
            position: absolute;
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            background: #FFFFFF99;
            backdrop-filter: blur(2px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 

            > #maskContent {
                padding-left: 30px; 
                padding-right: 30px;

                > #disc {
                    font-size: 22px;
                    line-height: 32px;
                    text-align: center;
                    color: #101828;
                    font-family: DMSans-Medium;
                    padding-left: 45px; 
                    padding-right: 45px;
                }

                > #discUpgrade {
                    font-size: 14px;
                    line-height: 26px;
                    text-align: center;
                    font-family: DMSans-Medium;
                    color: #1D2939;
                    
                    > a {
                        text-decoration: none;
                        color: #2575F0;
                    }
                }
            }
        }
    }


    > button {
        transition: 300ms;
        margin: auto;

        &:hover {
            filter: none;
            color: ${p => p.$recommended ? 'white' : '#25DAC5'};
            border-color: ${p => p.$recommended ? '#01A395' : '#25DAC5'};
            background-color: ${p => p.$recommended ? '#01A395' : 'transparent'};
        }

        ${p => p.$mask && `
            pointer-events: none;   
            border-color: #DCDCDB;
            color: #A7A6A8;          
        `}
    }
    @media (max-width: 1200px) {
        // max-width: 500px;
        // min-width: 400px;

        > #data {
            padding-inline: 20px;

            > #name {
                font-size: 14px;
            }

            > #price {
                align-items: center;

                > #currency {
                    font-size: 28px;
                }

                >#value {
                    font-size: 54px;
                }
            }

            > #desc {
                font-size: 16px;
                margin-block: 20px;
            }
        }

        #featuresblur {
            > #features {
                padding-inline: 10px;

                > p {
                    font-size: 16px;
                }
            }
        }
    }

    @media (max-width: 992px) {
        // min-width: 380px;

        > #data {
            padding-inline: 20px;

            > #name {
                font-size: 14px;
            }

            > #price {
                align-items: center;

                > #currency {
                    font-size: 24px;
                }

                >#value {
                    font-size: 50px;
                }
            }

            > #desc {
                font-size: 16px;
                margin-block: 20px;
            }
        }

        #featuresblur {
            > #features {
                padding-inline: 10px;

                > p {
                    font-size: 15px;
                }
            }
            > #mask {
                > #maskContent {
                    padding-left: 20px; 
                    padding-right: 20px;
    
                    > #disc {
                        font-size: 18px;
                        line-height: 26px;
                        padding-left: 35px; 
                        padding-right: 35px;
                    }
                }
            }
        }
    }

    @media (max-width: 785px) {
        max-width: 520px;

        > #data {
            padding-inline: 20px;

            > #name {
                font-size: 14px;
            }

            > #price {
                align-items: center;

                > #currency {
                    font-size: 22px;
                }

                >#value {
                    font-size: 46px;
                }
            }

            > #desc {
                font-size: 15px;
                margin-block: 20px;
            }
        }

        #featuresblur {
            > #features {
                padding-inline: 10px;

                > p {
                    font-size: 14px;
                }
            }
            > #mask {
                > #maskContent {
                    padding-left: 20px; 
                    padding-right: 20px;
    
                    > #disc {
                        font-size: 17px;
                        line-height: 22px;
                        padding-left: 30px; 
                        padding-right: 30px;
                    }
                }
            }
        }
    }

    @media (max-width: 468px) {

        > #data {
            padding-inline: 20px;
            min-height: auto;
            grid-template-rows: 80px auto auto;


            > #name {
                font-size: 13px;
            }

            > #price {
                align-items: center;

                > #currency {
                    font-size: 22px;
                }

                >#value {
                    font-size: 40px;
                }
            }

            > #desc {
                font-size: 14px;
                margin-block: 20px;
            }
        }

        #featuresblur {
            > #features {
                padding-inline: 10px;

                > p {
                    font-size: 14px;
                }
            }
            > #mask {
                > #maskContent {
                    padding-left: 16px; 
                    padding-right: 16px;
    
                    > #disc {
                        font-size: 16px;
                        line-height: 20px;
                        padding-left: 20px; 
                        padding-right: 20px;
                    }
                }
            }
        }
    }
    

`;