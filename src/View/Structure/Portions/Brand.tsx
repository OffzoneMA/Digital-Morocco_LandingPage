import React from 'react'
import styled from 'styled-components'
import Input from '../../Components/Input';
import { useLang , Lang } from '../../../Controller/Tools/Interface/Lang';
// @ts-ignore
import Background from '../../Media/Images/background.png';
import Button from '../../Components/Button';

/**
 * Brand
 * 
 * @returns 
 */
const Brand = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return (
        <Container>
            <div id="content">
                <div id="text">
                    <h3><Lang>Ready to unlock a world of endless possibilities?</Lang></h3>
                    <p><Lang>Join us at Digital Morocco and embark on a transformative journey. Dive into our vibrant community, where innovation thrives, connections flourish, and growth knows no bounds.</Lang></p>
                    <div id='textBox'>
                    <Input $size={14} $height={42}  $fontFamily='DMSans-Regular' placeholder={lang('Enter your email to subscribe to our newsletter')} />
                    <Button  $size={18} $background='#00CDAE' $hoverBackground='#01A395' $isFill $color='white' $padding={[9,26]}><Lang>Subscribe</Lang></Button>
                    </div>
                </div>
                <div id="box">
                    <Lang>Explore further and discover how Digital Morocco can amplify your success. Unlock advanced tools and strategies to elevate your digital journey.</Lang>
                </div>
            </div>
        </Container>
    )
}

export default Brand


/**
 * Container
 * 
 */
const Container = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: auto;
    color: white;
    display: flex;

    > #content {
        max-width: var(--content-width);
        width: calc(100% - 50px);
        margin: auto;
        display: flex;
        gap: 50px;
        padding-block: 70px;

        > #text {
            min-width: 592px;

            > h3 {
                font-size: 32px;
                font-weight: 700;
                line-height: 46px;
                margin: 0;
                font-family: DMSans-Bold;

                // Media
                @media (max-width: 900px) {
                    font-size: 20px;
                }
            }

            > p {
                font-size: 21px;
                font-weight: 500;
                line-height: 34px;
                margin: 0;
                margin-top: 15px;
                font-family: DMSans-Medium;

                // Media
                @media (max-width: 900px) {
                    font-size: 16px;
                }
            }

            > #textBox {
                display: flex;
                flex-direction: row;
                gap: 30px;
                margin-top: 25px;

                >input {
                    min-width :304px;
                    field-sizing: content;
                    color: #1E0E62;
                }
            }
        }

        > #box {
            border-radius: 20px;
            background-color: white;
            color: #482BE7;
            font-size: 22px;
            font-weight: 500;
            line-height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: DMSans-Medium;
            text-align: center;
            width :auto;
            max-heigth : 240px;
            padding: 35px 40px;

            // Media
            @media (max-width: 1050px) {
                flex-direction: column;
                padding: 20px 30px;
                width: auto;
            }

            // Media
            @media (max-width: 900px) {
                font-size: 16px;
            }
        }

        // Media
        @media (max-width: 1050px) {
            flex-direction: column;
            padding-block: 35px;
            gap: 20px;
        }
    }

    // Media
    @media (max-width: 1050px) {
        background-size: auto 100%;
    }
`;