import React, { useState } from 'react';
import styled from 'styled-components';
import { Lang } from '../../Controller/Tools/Interface/Lang';
import { useLang } from '../../Controller/Tools/Interface/Lang';

// @ts-ignore
import curs2 from '../../View/Media/Icons/curs2.svg';

const SimpleSelect = ({
    placeholder,
    placeholdercolor,
    size,
    fontFamily,
    height,
    searchPlaceholder,
    searchable,
    options,
    onChange
}: {
    placeholder?: string
    placeholdercolor?: string
    size?: number
    fontFamily?: string
    height?: number
    searchPlaceholder?: string
    searchable?: boolean
    options: OptionInterface[],
    onChange?: (selected: SelectedInterface | null) => void // Modifier ici
}) => {
    const [active, setActive] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const [searchValue, setSearchValue] = useState('');

    const handleOptionClick = (value: string | number) => {
        setSelectedValue(value);
        setActive(false);
        if (onChange) {
            const selectedOption = options.find(option => option.value === value);
            onChange(selectedOption || null); // Utiliser null comme valeur par défaut
        }
    };

     /**
     * Lang
     * 
     */
     const lang = useLang()

     /**
      * Filter options
      */

     const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
    );


    return (
        <Container onMouseEnter={() => setTimeout(() => setActive(true))} onMouseLeave={() => setActive(false)}>
            <CustomSelect size={size} height={height} active={active}  onClick={() => setActive(old => !old)}>
                <span id="text">
                    {selectedValue 
                        ? (options.find(option => option.value === selectedValue)?.label || <Placeholder placeholdercolor={placeholdercolor}>{placeholder ? <Lang>{placeholder}</Lang> : <Lang>Select</Lang>}</Placeholder>)
                        : (<Placeholder placeholdercolor={placeholdercolor}>{placeholder ? <Lang>{placeholder}</Lang> : <Lang>Select</Lang>}</Placeholder>)
                    }
                </span>
                <svg width="10" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={active ? 'M1 7L7 1L13 7' : 'M1 1L7 7L13 1'} stroke="#151439" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </CustomSelect>
            {active && (
                <div id='options'>
                    <Options className='animation'>
                        {searchable && 
                        <SearchInputContainer>
                            <SearchInput
                                type="text"
                                placeholder={searchPlaceholder ? lang(searchPlaceholder) : lang('Search ...')}
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                            />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.66668 6.3335C1.66668 3.75617 3.75601 1.66683 6.33334 1.66683C8.91067 1.66683 11 3.75617 11 6.3335C11 7.59079 10.5028 8.73196 9.69427 9.57109C9.67145 9.58863 9.64951 9.60786 9.62861 9.62876C9.60771 9.64966 9.58848 9.6716 9.57094 9.69442C8.73181 10.5029 7.59064 11.0002 6.33334 11.0002C3.75601 11.0002 1.66668 8.91083 1.66668 6.3335ZM10.0785 11.0214L9.62861 10.5716C9.38916 10.3321 9.36993 9.95584 9.57094 9.69442C9.61281 9.65408 9.65392 9.61296 9.69427 9.57109C9.95569 9.37009 10.332 9.38931 10.5714 9.62876L11.0213 10.0786C10.7429 10.4267 10.4265 10.743 10.0785 11.0214ZM10.0785 11.0214L12.5286 13.4716C12.789 13.7319 13.2111 13.7319 13.4714 13.4716C13.7318 13.2112 13.7318 12.7891 13.4714 12.5288L11.0213 10.0786C11.8424 9.05217 12.3333 7.75017 12.3333 6.3335C12.3333 3.01979 9.64705 0.333496 6.33334 0.333496C3.01963 0.333496 0.333344 3.01979 0.333344 6.3335C0.333344 9.64721 3.01963 12.3335 6.33334 12.3335C7.75002 12.3335 9.05202 11.8425 10.0785 11.0214Z" fill="#98A2B3"/>
                                <path d="M9.62861 10.5716L10.0785 11.0214C10.4265 10.743 10.7429 10.4267 11.0213 10.0786L10.5714 9.62876C10.332 9.38931 9.95569 9.37009 9.69427 9.57109C9.65392 9.61296 9.61281 9.65408 9.57094 9.69442C9.36993 9.95584 9.38916 10.3321 9.62861 10.5716Z" fill="#98A2B3"/>
                            </svg>
                        </SearchInputContainer>
                        }
                        <div id='optionsListe'>
                        {filteredOptions.map(option => (
                            <Option key={option.value} onClick={() => handleOptionClick(option.value)} className={option.value === selectedValue ? 'selected' : ''}>
                                {option.label}
                            </Option>
                        ))}
                        </div>
                    </Options>
                </div>
            )}
        </Container>
    );
};

export default SimpleSelect;

const Container = styled.div`
    position: relative;
    display: flex;

    > #options{
        position: absolute;
        min-width: 100%;
        width: fit-content;
        z-index: 1;
        top: 100%;
    }
`;

const Placeholder = styled.span<{placeholdercolor?: string}>`
color: ${props => props.placeholdercolor ? `${props.placeholdercolor}` : 'rgb(21 20 57 / 40%)'};
font-size: inherit;

`;

const CustomSelect = styled.div<{ active: boolean , size?: number , fontFamily?: string , height?: number}>`
    width: 100%;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    font-family: ${props=> props.fontFamily ? props.fontFamily : 'inherit'};
    border: 2px solid ${props => (props.active ? '#53B1FD' : '#EBEAED')}; 
    border-radius: 50px;
    background-color: white;
    padding: 0px 20px;
    height: ${props => props.height ? `${props.height}px` : '42px'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    > #text {
        width: calc(100% - 30px);
    }

    ${props => props.active && `
        box-shadow: 0px 0px 0px 4px #007FFF21; 
    `}
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #2E90FA;
    gap: 5px;
    margin-top: 7px;
    width: calc(100% - 15px);
    padding: 12px 8px 12px 8px;
    border-radius: 20px;
    box-shadow: 0px 12px 16px -4px #1018281A;
    background-color: white;

    > #optionsListe {
        overflow-y: auto;
        max-height: 240px;

    }

    > #optionsListe::-webkit-scrollbar {
        width: 6px;
    }
    
    > #optionsListe::-webkit-scrollbar-track {
        color: #E4E7EC;
        border-radius: 20px;
    }

    > #optionsListe::-webkit-scrollbar-thumb {
        border: 3px solid #E4E7EC;
        border-radius: 20px;
        background-color: #E4E7EC;
        height: 100px;
    }

    > #optionsListe::-webkit-scrollbar-thumb:hover {
        color: #555;
    }
    
`;

const SearchInputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: between;
    align-items: center;
    margin: 10px;
    padding-right: 10px;
    padding-left: 4px;
    border-radius: 6px;
    border: 1px solid #D0D5DD; 

`;

const SearchInput = styled.input`
    width: calc(100% - 30px);
    padding: 8px;
    border: none;
    font-size: 14px;
    outline: none;

    &::placeholder {
        color: #98A2B3;
    }
`;


const Option = styled.div`
    padding: 10px;
    color: #1D2939;
    font-size: 16px;
    line-height: 20.83px;

    &:hover {
        color: #35D8BF;
        cursor: url(${curs2}), auto;
    }
    &.selected {
        // color: #35D8BF; 
    }
`;

export interface OptionInterface {
    label: string;
    value: string | number;
}

export interface SelectedInterface extends OptionInterface {}

