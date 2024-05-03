import { Lang, useLang } from '../../../../../Controller/Tools/Interface/Lang';
import styled from 'styled-components';
import React, { useState } from 'react'
import Input from '../../../../Components/Input';
import Checkbox from '../../../../Components/Checkbox';
import SimpleSelect, { OptionInterface } from '../../../../Components/SimpleSelect';
import { Country , City} from 'country-state-city';

// @ts-ignore
import pay from '../../../../Media/Images/pay.png'

/**
 * Content
 * 
 * @returns 
 */
const Content = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Country , City value
     */

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    /**
     * Get countries data
     */
    const countries = Country.getAllCountries();


    /**
     * Selection Options
     */
    const countryOptions = countries.map(country => ({
        label: country.name,
        value: country.isoCode
    }));

    
    const cities = City.getCitiesOfCountry(selectedCountry) || [];
    
    const cityOptions = cities.map(city => ({
        label: city.name,
        value: city.name
    }));
    

    const handleCountrySelectChange = (selectedOption: any) => {
        setSelectedCountry(selectedOption.value);
    };

    const handleCitySelectChange = (selected: any ) => {
        setSelectedCity(selected.value);
    };

    console.log(selectedCity)

    return (
        <Container>
            <h1><Lang>Billing information</Lang></h1>
            <div id="form">
                <label>
                    <p><Lang>First Name</Lang></p>
                    <Input $size={16} $height={49} type='text' placeholder={lang('First Name')} />
                </label>
                <label>
                    <p><Lang>Last Name</Lang></p>
                    <Input $size={16} $height={49}  type='text' placeholder={lang('Last Name')} />
                </label>
                <label>
                    <p><Lang>Phone</Lang></p>
                    <Input $size={16} $height={49}  type='text' placeholder={lang('Phone Number')} />
                </label>
                <label>
                    <p><Lang>e-mail</Lang></p>
                    <Input $size={16} $height={49}  type='text' placeholder={lang('Email Address')} />
                </label>
                <label>
                    <p><Lang>Job Title</Lang></p>
                    <Input $size={16} $height={49}  type='text' placeholder={lang('Job Title')} />
                </label>
                <label>
                    <p><Lang>Company</Lang></p>
                    <Input $size={16} $height={49}  type='text' placeholder={lang('Company Name')} />
                </label>
                <label>
                    <p><Lang>Country</Lang></p>
                    <SimpleSelect
                        height={49}
                        placeholder='Select Country'
                        searchPlaceholder='Search Country'
                        searchable
                        options={countryOptions}
                        onChange={handleCountrySelectChange}
                    />
                </label>
                <label>
                    <p><Lang>City</Lang></p>
                    <SimpleSelect
                        height={49}
                        placeholder='Select City'
                        searchPlaceholder='Search City'
                        searchable
                        options={cityOptions}
                        onChange={handleCitySelectChange}
                    />
                </label>
            </div>
            <Checkbox><Lang>Keep me updated on more events and news from this event organizer</Lang></Checkbox>
            <Checkbox><Lang>Send me emails about the best events happening nearby or online.</Lang></Checkbox>
            <div id="pay-methods">
                <h1><Lang>Select Payment Method</Lang></h1>
                <img width={249} src={pay} alt="" />
            </div>
        </Container>
    )
}

export default Content

/**
 * Container
 * 
 */
const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;

    > h1 {
        margin-top: 0;
    }

    > #form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 20px;

        > label {

            > p {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 14px;
                font-family: DMSans-Medium;
                color: #1E0E62;
                letter-spacing: 2px;
            }

            > input, select {
                width: -webkit-fill-available;
                // min-width: 278px;
            }
        }

        // Media
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }

    > #pay-methods {
        border-top: 2px solid #EBEAED;
        font-family: DMSans-Bold;
    }
`;