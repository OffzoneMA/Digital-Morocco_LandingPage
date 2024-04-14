import React from 'react'
import { useCopy } from 'creeks'
import { direction, language } from './Language'
import Language from '../Controller/Tools/Interface/Lang'
import states from '../Store/states'
import Appearance from './Appearance'
import Structure from './Structure'


/**
 * View
 * 
 * @returns 
 */
const View = () => {

    /**
     * Theme state 🎨
     * 
     */
    const [theme] = useCopy(states.theme)

    /**
     * Dictionary 📖
     * 
     */
    const dictionary = import(`./Language/Dictionaries/${language}.json`)

    return (
        /* Appearance provider 🎨 */
        <Appearance theme={theme} direction={direction}>
            {/* Language provider 🌐 */}
            <Language dictionary={dictionary}>
                {/* App structure 🏗️ */}
                <Structure />
            </Language>
        </Appearance>
    )
}

export default View