import React, { useState } from 'react';
import styled from 'styled-components';
import { Lang } from '../../Controller/Tools/Interface/Lang';
import { useLang } from '../../Controller/Tools/Interface/Lang';

const SimpleSelect = ({
    placeholder,
    size,
    fontFamily,
    searchPlaceholder,
    searchable,
    options,
    onChange
}: {
    placeholder?: string
    size?: number
    fontFamily?: string
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
        <Container>
            <CustomSelect size={size} active={active} onClick={() => setActive(!active)}>
                <span id="text">
                    {selectedValue 
                        ? (options.find(option => option.value === selectedValue)?.label || <Placeholder>{placeholder ? <Lang>{placeholder}</Lang> : <Lang>Select</Lang>}</Placeholder>)
                        : (<Placeholder>{placeholder ? <Lang>{placeholder}</Lang> : <Lang>Select</Lang>}</Placeholder>)
                    }
                </span>
                <svg width="10" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={active ? 'M1 7L7 1L13 7' : 'M1 1L7 7L13 1'} stroke="#151439" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </CustomSelect>
            {active && (
                <Options>
                    {searchable && 
                    <SearchInputContainer>
                        <SearchInput
                            type="text"
                            placeholder={searchPlaceholder ? lang(searchPlaceholder) : lang('Search ...')}
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#475467" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </SearchInputContainer>
                    }
                    {filteredOptions.map(option => (
                        <Option key={option.value} onClick={() => handleOptionClick(option.value)}>
                            {option.label}
                        </Option>
                    ))}
                </Options>
            )}
        </Container>
    );
};

export default SimpleSelect;

const Container = styled.div`
    position: relative;
    display: flex;
`;

const Placeholder = styled.span`
    color: rgb(21 20 57 / 40%);
`;

const CustomSelect = styled.div<{ active: boolean , size?: number , fontFamily?: string}>`
    width: 100%;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    font-family: ${props=> props.fontFamily ? props.fontFamily : 'inherit'};
    border: 2px solid ${props => (props.active ? '#53B1FD' : '#EBEAED')}; 
    border-radius: 50px;
    background-color: white;
    padding: 0px 20px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;

    > #text {
        width: calc(100% - 30px);
    }

    ${props => props.active && `
        box-shadow: 0px 0px 0px 4px #007FFF21; 
    `}
`;

const Options = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 2px solid #EBEAED;
    border-radius: 8px 8px 8px 8px;
    background-color: white;
    max-height: 290px;
    overflow-y: auto;
    z-index: 1;
`;

const SearchInputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: between;
    align-items: center;
    margin: 10px;
    padding-right: 6px;
    padding-left: 3px;
    border-radius: 6px;
    border: 1px solid #EBEAED; 

`;

const SearchInput = styled.input`
    width: calc(100% - 30px);
    padding: 8px;
    border: none;
    font-size: 14px;
    outline: none;
`;


const Option = styled.div`
    padding: 10px;
    cursor: pointer;
    font-family: DMSans-Medium;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export interface OptionInterface {
    label: string;
    value: string | number;
}

export interface SelectedInterface extends OptionInterface {}

