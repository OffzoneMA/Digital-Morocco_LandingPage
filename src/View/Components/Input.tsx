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
}>`
    background-color: red;
    border: 2px solid #EBEAED;
    border-radius: 50px;
    background-color: ${p => p.$background ? p.$background : 'white'};
    padding: ${p => p.$height ? '0px 20px' : '11px 20px'}; 
    outline: none;
    font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    font-family: ${p => p.$fontFamily ? p.$fontFamily : ''};
    height: ${p => p.$height ? `${p.$height}px` : 'auto'}; 

    &::placeholder {
        color: rgb(21 20 57 / 40%);
        font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    }

    &:focus {
        border-color: #53B1FD;
        box-shadow: 0px 0px 0px 4px #007FFF21;
    }
`;

export default Input;
