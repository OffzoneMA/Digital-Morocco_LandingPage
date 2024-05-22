import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../../Components/PageHeader'
import { Lang, useLang } from '../../../../Controller/Tools/Interface/Lang'
import { usePage } from '../../../../Controller/Tools/Helper/Page'
import { config } from '../../../../config'
import Brand from '../../Portions/Brand'
import ContactForm from './ContactForm'
import ContactData from './ContactData'


/**
 * Contact
 * 
 * @returns 
 */
const Contact = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Contact Us')}` })

    return (
        <Container>
            <PageHeader id="title">
                <div id="content">
                    <h1 className='animation'><Lang>We’d Love to Hear from You</Lang></h1>
                    <p className='animation'><Lang>Got questions, ideas, or just want to connect? We're here for you. Feel free to reach out using any of the methods below, and our dedicated team will get back to you as soon as possible.</Lang></p>
                </div>
            </PageHeader>
            <div id="content">
                <ContactForm />
                <ContactData />
            </div>
            <Brand />
        </Container>
    )
}

export default Contact


/**
 * Container
 * 
 */
const Container = styled.div`
    > #title > #content {
        max-width: var(--content-width);
        width: calc(100% - 50px);
        margin: auto;

        h1 {
            font-family: DMSans-Bold;
            max-width: 500px;

            // Media
            @media (max-width: 900px) {
                font-size: 25px;
            }
        }

        > p {
            font-family: DMSans-Medium;
            max-width: 520px;
            font-size: 15px;
        }
    }

    > #content {
        max-width: var(--content-width);
        width: calc(100% - 50px);
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: 70px;
        padding-block: 70px;

        // Media
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-block: 25px;
        }
    }
`;