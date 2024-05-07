import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'
import { useAction } from '../../../Controller/Tools/Helper/Action'
import actions from '../../../Store/actions'

/**
 * Dialog
 * 
 * @returns 
 */
const Dialog = () => {

    /**
     * Dialogs state
     * 
     */
    const [dialogs, setDialogs] = useState<Record<string, { body: ReactNode, title: string }>>({})

    /**
     * Create method
     * 
     * @returns 
     */
    const create: DialogMethod = (content, title) => setDialogs(items => {

        // Define index
        const index = Math.max(...(Object.keys(items).map(Number).length ? Object.keys(items).map(Number) : [0])) + 1;

        // Define data
        const data = typeof content === 'function' ? content(() => remove(index)) : content;

        return {
            ...items, ...{
                [index]: {
                    body: data,
                    title: title
                }
            }
        }
    })

    /**
     * Remove method
     * 
     * @returns 
     */
    const remove = (index: any) => setDialogs(items => {

        // Delete index
        const { [index]: _, ...output } = items

        return output;
    })

    /**
     * Create action
     * 
     */
    useAction(actions.dialog, create)


    return Object.values(dialogs)[0] && (
        <Container>
            {
                /**
                 * Items
                 * 
                 */
                Object.keys(dialogs).map((index, key) => (
                    <div key={key} className='item animation'>
                        <div id="backdrop" onClick={() => remove(index)}></div>
                        <div id="content">
                            <p id='close' className='animation' onClick={() => remove(index)}>X</p>
                            <div id="header">
                                <p id='title'>{dialogs[index].title}</p>
                            </div>
                            <div id="body">
                                {dialogs[index].body}
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}

export default Dialog


/**
 * Container
 * 
 */
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;

    > .item {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        > #backdrop {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgb(0 0 0);
            opacity: 0.7;
        }

        > #content {
            position: absolute;
            background-color: white;
            margin: auto;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: fit-content;
            height: fit-content;
            max-width: calc(100% - 100px);
            max-height: calc(100% - 100px);

            > #close {
                position: absolute;
                z-index: 2;
                right: -21px;
                top: -45px;
                font-size: 23px;
                color: #dbb3b3;
                // cursor: pointer;
                padding: 0;
                background-color: transparent;
                border: none;
                line-height: 0;
            }

            > #header {
                display: none !important;
                text-align: center;
                font-size: 20px;
                display: grid;
                grid-template-columns: auto 50px;
                align-items: center;

                > #close {
                    padding-block: 10px;
                    border-inline-start: 1.5px solid;
                    color: #00ff12;
                    // cursor: pointer;
                }
            }

            > #body {
                overflow-y: auto;
                overflow-x: hidden;
                position: relative;
            }

            // Media
            @media (max-width: 900px) {
                max-width: calc(100% - 30px);
                max-height: calc(100% - 30px);
            }
        }
    }
`;


/**
 * Dialog method type
 * 
 */
export type DialogMethod = (content: ((remove: () => void) => ReactNode) | ReactNode, title?: string) => void