import styled from 'styled-components'

/**
 * Default select
 * 
 */
const Select = styled.select`
    background-color: red;
    border: 2px solid #EBEAED;
    border-radius: 50px;
    background-color: white;
    padding: 11px 20px;
    outline: none;
    font-size: 15px;

    &::placeholder {
        color: rgb(21 20 57 / 40%);
    }

    &:focus {
        border-color: #53B1FD;
        box-shadow: 0px 0px 0px 4px #007FFF21;
    }
`;

export default Select