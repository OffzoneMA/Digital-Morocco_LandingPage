import React, { useState } from 'react'
import styled from 'styled-components'

/**
 * Quantity
 * 
 * @returns 
 */

type SetQuantityValue = React.Dispatch<any>;

const Quantity = ({ setQuantityValue }: { setQuantityValue: SetQuantityValue }) => {

    /**
     * Quantity state
     * 
     */
    const [quantity, setQuantity] = useState(1)

    /**
     * Plus method
     * 
     */
    const plus = () => {
        setQuantity(old => old + 1)
        setQuantityValue((old: number) => old + 1)
    }

    /**
     * Minus method
     * 
     */
    const minus = () => {
        setQuantity(old => old <= 1 ? 1 : old - 1)
        setQuantityValue((old: number) => old <= 1 ? 1 : old - 1)
    }

    /**
     * Change method
     * 
     */
    const change = (quantity: number) => {
        setQuantity(old => old < 1 ? 1 : quantity)
        setQuantityValue((old: number) => old < 1 ? 1 : quantity)
    }

    return (
        <Container>
            <button onClick={minus}>-</button>
            <input type="text" value={quantity} onChange={event => change(Number(event.target.value).toString() !== event.target.value ? 0 : Number(event.target.value))} />
            <button onClick={plus}>+</button>
        </Container>
    )
}

export default Quantity

/**
 * Container
 * 
 */
const Container = styled.div`
    display: flex;
    border: 2px solid #EBEAED;
    border-radius: 50px;
    height: 40px;

    > input {
        margin: 0;
        color: black;
        outline: none;
        border: none;
        border-left: 2px solid;
        border-right: 2px solid;
        border-color: #EBEAED;
        width: 50px;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
    }

    > button {
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        padding-inline: 20px;
        color: #15143966;
        cursor: pointer;
        font-size: 20px;
    }
`;