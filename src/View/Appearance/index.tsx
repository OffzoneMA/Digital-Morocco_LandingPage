import React, { ReactNode } from "react"

/**
 * Load sass 🪄
 * 
 */
import './index.sass'


/**
 * Appearance 🎨
 * 
 * @returns 
 */
const Appearance = ({ children, theme, direction = 'ltr' }: {
    children: ReactNode,
    theme: string,
    direction?: string
}) => {

    return (
        <div id="APP" dir={direction} data-theme={theme}>
            {children}
        </div>
    )
}

export default Appearance;