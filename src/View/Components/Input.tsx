import styled from 'styled-components'

/**
 * Default input
 * 
 */
const Input = styled.input<{
    $size?: number,
    $fontFamily?: string,
    $height?: number 
    $background?:string
    $hasError?: boolean,
    $placeholderColor?: string
}>`
    background-color: red;
    border:${props => props.$hasError ? '1px solid  #E85555CC' : ' 2px solid #EBEAED'}; 
    color:${props => props.$hasError ? '#EC7373' : 'inherit'}; 
    border-radius: 50px;
    background-color: ${p => p.$background ? p.$background : 'white'};
    padding: ${p => p.$height ? '0px 20px' : '11px 20px'}; 
    outline: none;
    font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    font-family: ${p => p.$fontFamily ? p.$fontFamily : ''};
    height: ${p => p.$height ? `${p.$height}px` : 'auto'}; 

    &::placeholder {
        color: ${p => p.$placeholderColor ? `${p.$placeholderColor}` : 'rgb(21 20 57 / 40%)'};
        font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    }

    &:focus {
        border-color: ${props => props.$hasError ? '#E85555CC' : '#53B1FD'}; 
        box-shadow: ${props => props.$hasError ? '0px 0px 0px 4px #E8555521' : '0px 0px 0px 4px #007FFF21' } ; 
    }

    ${props => props.$hasError && `
        border-color: #E85555CC;
        box-shadow: 0px 0px 0px 4px #E8555521; 
    `}
`;

export default Input;
