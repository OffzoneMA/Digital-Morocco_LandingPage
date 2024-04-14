import styled from 'styled-components'

/**
 * Default textarea
 * 
 */
const Textarea = styled.textarea<{
    $disableResize?: boolean
    $height?: number
}>`
    background-color: red;
    border: 2px solid #EBEAED;
    border-radius: 20px;
    background-color: white;
    padding: 10px 20px;
    outline: none;
    resize: ${p => p.$disableResize ? 'none' : 'auto'};
    height: ${p => p.$height ? `${p.$height}px` : 'auto'};
    font-size: 15px;

    &::placeholder {
        color: rgb(21 20 57 / 40%);
    }

    &:focus {
        border-color: #53B1FD;
        box-shadow: 0px 0px 0px 4px #007FFF21;
    }
`;

export default Textarea