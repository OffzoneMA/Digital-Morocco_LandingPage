import styled from 'styled-components'

/**
 * Default textarea
 * 
 */
const Textarea = styled.textarea<{
    $disableResize?: boolean
    $height?: number
    $size?: number,
    $fontFamily?: string
    $hasError?: boolean
}>`
    background-color: red;
    border:${props => props.$hasError ? '1px solid  #E85555CC' : ' 2px solid #EBEAED'}; 
    color:${props => props.$hasError ? '#EC7373' : 'inherit'}; 
    border-radius: 20px;
    background-color: white;
    padding: 10px 20px;
    outline: none;
    resize: ${p => p.$disableResize ? 'none' : 'auto'};
    height: ${p => p.$height ? `${p.$height}px` : 'auto'};
    font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    font-family: ${p=> p.$fontFamily ? p.$fontFamily : ''};

    &::placeholder {
        color: rgb(21 20 57 / 40%);
        font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    }

    &:focus {
        border-color: ${props => props.$hasError ? '#E85555CC' : '#53B1FD'}; 
        box-shadow: ${props => props.$hasError ? '0px 0px 0px 4px #E8555521' : '0px 0px 0px 4px #007FFF21' } ; 
    }

    ${props => props.$hasError && `
        border-color: ##E85555CC;
        box-shadow: 0px 0px 0px 4px #E8555521; 
    `}
`;

export default Textarea