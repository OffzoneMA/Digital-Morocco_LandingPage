import styled from 'styled-components'

/**
 * Default input
 * 
 */
const Input = styled.input<{
    $size?: number,
}>`
    background-color: red;
    border: 2px solid #EBEAED;
    border-radius: 50px;
    background-color: white;
    padding: 11px 20px;
    outline: none;
    font-size: ${p => p.$size ? `${p.$size}px` : '15px'};

    &::placeholder {
        color: rgb(21 20 57 / 40%);
        font-size: ${p => p.$size ? `${p.$size}px` : '15px'};
    }

    &:focus {
        border-color: #53B1FD;
        box-shadow: 0px 0px 0px 4px #007FFF21;
    }
`;

export default Input