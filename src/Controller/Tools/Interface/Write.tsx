import React, { Fragment, useEffect, useState } from 'react'
import { useLang } from './Lang'

/**
 * Write
 * 
 * @returns 
 */
const Write = ({ children, delay, interval, translate }: {
    children: string,
    delay?: number,
    interval?: number,
    translate?: boolean
}) => {

    /**
     * Text state
     * 
     */
    const [text, setText] = useState<string>('')

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * On children change
     * 
     */
    useEffect(() => {
        
        /**
         * Value
         * 
         */
        const value: string = translate ? lang(children) : children;

        /**
         * Timer
         * 
         */
        var timer: NodeJS.Timeout;

        /**
         * Index
         * 
         */
        var index: number = -1;

        /**
         * Character method
         * 
         */
        const character = () => {
            if (index < value.length) {
                index++;
                setText(old => old + value.charAt(index))
                timer = setTimeout(character, interval ?? 40);
            }
        }

        /**
         * Waiting
         * 
         */
        const waiting = setTimeout(character, delay ?? 100)

        // On children end
        return () => {
            clearTimeout(waiting)
            clearTimeout(timer)
            setText('');
        }

    }, [children])

    return <Fragment>{text}</Fragment>
}

export default Write