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
            <Input $size={18} $height={49} $fontFamily='DMSans-Medium' name='firstName' placeholder={lang('First name')} />
            <Input $size={18} $height={49} $fontFamily='DMSans-Medium' name='lastName' placeholder={lang('Last name')} />
            <Input $size={18} $height={49} $fontFamily='DMSans-Medium' name='phone' placeholder={lang('Your phone')} />
            <Input $size={18} $height={49} $fontFamily='DMSans-Medium' name='email' placeholder={lang('Your email')} />
            <Textarea $size={18} $fontFamily='DMSans-Medium' name='message' $disableResize $height={150} placeholder={lang('Your message')} />
            <Button $size={18} $background='#2575F0' $isFill $color='white' $padding={[11,25]} $width={205} $height={60}><Lang>Send a Message</Lang></Button>
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