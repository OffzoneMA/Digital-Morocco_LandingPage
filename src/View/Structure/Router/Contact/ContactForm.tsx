import React, { useState } from 'react'
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

    /**
     * Form Data
     */
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });
    
    /**
     * Form field errors
     */
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        message: false
    });

    /**
     * Email Validation
     * @param email 
     * @returns 
     */
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (phoneNumber: string) => {
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
        return phoneRegex.test(phoneNumber);
      };

    /**
     * Field Changing value
     * @param e 
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setFormErrors({
            ...formErrors,
            [name]: value === '' 
        });

        // if (name === 'email') {
        //     setFormErrors ( {
        //         ...formErrors,
        //         [name]: !validateEmail(value)
        //     });
        // }

        // if (name === 'message') {
        //     setFormErrors ( {
        //         ...formErrors,
        //         [name]: value.length < 10 
        //     });
        // }
    };

    const handleSubmit = () => {

        const errors = {
            firstName: formData.firstName === '',
            lastName: formData.lastName === '',
            phone: formData.phone === '',
            email: formData.email === '' ,
            message: formData.message === ''
        };

        if (formData.email !== '') {
            errors.email = !validateEmail(formData.email);
        }

        if (formData.phone !== '') {
            errors.phone = !validatePhoneNumber(formData.phone);
          }

        // if (formData.message !== '') {
        //     errors.message = formData.message.length < 10;
        // }

        

        setFormErrors(errors);

        const hasErrors = Object.values(errors).some(error => error);

        if (!hasErrors) {
            console.log('Formulaire soumis avec succès !', formData);
        }
    };

    return (
        <Container onSubmit={handleSubmit}>
            <Input onChange={handleChange} $hasError={formErrors.firstName} $size={18} $height={49} $fontFamily='DMSans-Medium' name='firstName' placeholder={lang('First name')} />
            <Input onChange={handleChange} $hasError={formErrors.lastName} $size={18} $height={49} $fontFamily='DMSans-Medium' name='lastName' placeholder={lang('Last name')} />
            <Input onChange={handleChange} $hasError={formErrors.phone} $size={18} $height={49} $fontFamily='DMSans-Medium' name='phone' placeholder={lang('Your phone')} />
            <Input onChange={handleChange} $hasError={formErrors.email} $size={18} $height={49} $fontFamily='DMSans-Medium' name='email' placeholder={lang('Your email')} />
            <Textarea onChange={handleChange} $hasError={formErrors.message} $size={18} $fontFamily='DMSans-Medium' name='message' $disableResize $height={150} placeholder={lang('Your message')} />
            <Button  $size={18} $background='#2575F0' $isFill $color='white' $padding={[11,25]} $width={205} $height={60}><Lang>Send a Message</Lang></Button>
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
            background-color: #235DBD;
            border-color: #235DBD;
            filter: none;
        }
    }
`;