import React, { useState } from 'react';
import styled from 'styled-components';
import { Lang, useLang } from '../../../../Controller/Tools/Interface/Lang';
import Form from '../../../../Controller/Tools/Interface/Form';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Textarea from '../../../Components/Textarea';
import axios from 'axios';


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
    const lang = useLang();

    const [isLongPressed, setIsLongPressed] = useState(false);

    let timer: NodeJS.Timeout | undefined;

    const handleMouseDown = () => {
      timer = setTimeout(() => {
        setIsLongPressed(true);
      }, 1000);
    };

  const handleMouseUp = () => {
    clearTimeout(timer);
    if (isLongPressed) {
      setIsLongPressed(false);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    if (isLongPressed) {
      setIsLongPressed(false);
    }
  };

    /**
     * Contact Send
     */
    const [isSend , setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Form Data
     */
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        language: localStorage.getItem('language')
    });
    
    /**
     * Form field errors
     */
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
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
    };

    const handleSubmit = async () => {
        const errors = {
            firstName: formData.firstName === '',
            lastName: formData.lastName === '',
            email: formData.email === '',
            message: formData.message === ''
        };
    
        if (formData.email !== '') {
            errors.email = !validateEmail(formData.email);
        }
    
        setFormErrors(errors);
    
        const hasErrors = Object.values(errors).some(error => error);
    
        if (!hasErrors) {
            try {
                setIsLoading(true);
                const response = await axios.post(`${process.env.REACT_APP_baseURL}users/send-email`, formData, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
    
                if (response.status === 200) {
                    setIsSend(true);
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: '',
                        language: localStorage.getItem('language')
                    });
                    setTimeout(() => {
                        setIsSend(false);
                    }, 5000); 
                } else {
                    setIsSend(false);
                    console.log("Error submitting form:", response);
                }
            } catch (error) {
                setIsSend(false);
                console.log("Error submitting form:", error);
            }finally {
                setIsLoading(false); 
            }
        }
    };
    return (
        <Container onSubmit={handleSubmit} issend={isSend || isLoading ? "true" : undefined} islongpressed={isLongPressed.toString()}        >
            <Input onChange={handleChange} value={formData.firstName} $hasError={formErrors.firstName} $size={18} $height={49} $fontFamily='DMSans-Medium' name='firstName' placeholder={lang('First name')} />
            <Input onChange={handleChange} value={formData.lastName} $hasError={formErrors.lastName} $size={18} $height={49} $fontFamily='DMSans-Medium' name='lastName' placeholder={lang('Last name')} />
            <Input onChange={handleChange} value={formData.phone} $size={18} $height={49} $fontFamily='DMSans-Medium' name='phone' placeholder={lang('Your phone')} />
            <Input onChange={handleChange} value={formData.email} $hasError={formErrors.email} $size={18} $height={49} $fontFamily='DMSans-Medium' name='email' placeholder={lang('Your email')} />
            <Textarea onChange={handleChange} value={formData.message} $hasError={formErrors.message} $size={18} $fontFamily='DMSans-Medium' name='message' $disableResize $height={150} placeholder={lang('Your message')} />
            <Button $size={18}  $background={isLongPressed ? '#224A94' : '#2575F0'} $isFill $color='white' $padding={[11,25]} $width={205} $height={60} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            disabled={isLoading}>
            {isSend ? (
          <>
            <Lang>Sent</Lang>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="icon-right"
            >
              <path
                d="M10.4995 13.5002L20.9995 3.00017M10.6271 13.8282L13.2552 20.5862C13.4867 21.1816 13.6025 21.4793 13.7693 21.5662C13.9139 21.6415 14.0862 21.6416 14.2308 21.5664C14.3977 21.4797 14.5139 21.1822 14.7461 20.5871L21.3364 3.69937C21.5461 3.16219 21.6509 2.8936 21.5935 2.72197C21.5437 2.57292 21.4268 2.45596 21.2777 2.40616C21.1061 2.34883 20.8375 2.45364 20.3003 2.66327L3.41258 9.25361C2.8175 9.48584 2.51997 9.60195 2.43326 9.76886C2.35809 9.91354 2.35819 10.0858 2.43353 10.2304C2.52043 10.3972 2.81811 10.513 3.41345 10.7445L10.1715 13.3726C10.2923 13.4196 10.3527 13.4431 10.4036 13.4794C10.4487 13.5115 10.4881 13.551 10.5203 13.5961C10.5566 13.647 10.5801 13.7074 10.6271 13.8282Z"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : isLoading ? (
          <><Lang>Sending...</Lang>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="icon-right"
            >
              <path
                d="M10.4995 13.5002L20.9995 3.00017M10.6271 13.8282L13.2552 20.5862C13.4867 21.1816 13.6025 21.4793 13.7693 21.5662C13.9139 21.6415 14.0862 21.6416 14.2308 21.5664C14.3977 21.4797 14.5139 21.1822 14.7461 20.5871L21.3364 3.69937C21.5461 3.16219 21.6509 2.8936 21.5935 2.72197C21.5437 2.57292 21.4268 2.45596 21.2777 2.40616C21.1061 2.34883 20.8375 2.45364 20.3003 2.66327L3.41258 9.25361C2.8175 9.48584 2.51997 9.60195 2.43326 9.76886C2.35809 9.91354 2.35819 10.0858 2.43353 10.2304C2.52043 10.3972 2.81811 10.513 3.41345 10.7445L10.1715 13.3726C10.2923 13.4196 10.3527 13.4431 10.4036 13.4794C10.4487 13.5115 10.4881 13.551 10.5203 13.5961C10.5566 13.647 10.5801 13.7074 10.6271 13.8282Z"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg></>
        ) : (
          <Lang>Send Message</Lang>
        )}
            </Button>
        </Container>
    )
}

export default ContactForm;


/**
 * Container
 * 
 */
const Container = styled(Form)<{ issend?: string  , islongpressed?: string}>`
  display: grid;
  gap: 20px;

  > button {
    justify-self: start;
    transition: 300ms;
    background-color: ${({ issend, islongpressed }) => {
        if (islongpressed === "true") return '#224A94'; // Long press color
        return issend === "true" ? '#01A395' : '#2575F0';
    }};
    border-color: ${({ issend, islongpressed }) => {
        if (islongpressed === "true") return '#224A94'; // Long press color
        return issend === "true" ? '#01A395' : '#2575F0';
    }};
    pointer-events: ${({ issend }) => (issend === "true" ? 'none' : 'auto')};

    &:hover {
        background-color: ${({ issend, islongpressed }) => {
        if (islongpressed === "true") return '#224A94'; // Long press color
        return issend === "true" ? '#01A395' : '#235DBD';
        }};
        border-color: ${({ issend, islongpressed }) => {
        if (islongpressed === "true") return '#224A94'; // Long press color
        return issend === "true" ? '#01A395' : '#235DBD';
        }};
        filter: none;
    }

    // &:focus {
    //     background-color: #224A94;
    //     outline: none;
    // }
  }
`;
