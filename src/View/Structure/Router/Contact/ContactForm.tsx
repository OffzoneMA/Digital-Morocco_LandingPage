import React from 'react'
import styled from 'styled-components'
import { Lang, useLang } from '../../../../Controller/Tools/Interface/Lang'
import Form from '../../../../Controller/Tools/Interface/Form'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import Textarea from '../../../Components/Textarea'

/**
 * Contact form
 * 
 * @returns 
 */
const ContactForm = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return (
        <Container onSubmit={console.log}>
            <Input name='firstName' placeholder={lang('First name')} />
            <Input name='lastName' placeholder={lang('Last name')} />
            <Input name='phone' placeholder={lang('Your phone')} />
            <Input name='email' placeholder={lang('Your email')} />
            <Textarea name='message' $disableResize $height={150} placeholder={lang('Your message')} />
            <Button $background='#2575F0' $isFill $color='white' $padding={[11, 20]}><Lang>Send a Message</Lang></Button>
        </Container>
    )
}

export default ContactForm


/**
 * Container
 * 
 */
const Container = styled(Form)`
    display: grid;
    gap: 20px;

    > button {
        justify-self: start;
        transition: 300ms;

        &:hover {
            background-color: #00CDAE;
            border-color: #00CDAE;
            filter: none;
        }
    }
`;