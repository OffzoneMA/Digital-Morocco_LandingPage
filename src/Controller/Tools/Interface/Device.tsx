import React, { useState, useEffect } from 'react';

/**
 * useScreen Hook
 * 
 * @returns 
 */
export const useScreen = (min?: number, max?: number): boolean => {

    /**
     * In range state
     * 
     */
    const [inRange, setInRange] = useState((!min && !max) ? false : (min ? window.innerWidth >= min : true) && (max ? window.innerWidth <= max : true));

    /**
     * On range change
     * 
     */
    useEffect(() => {

        /**
         * Resize method
         * 
         * @returns 
         */
        const resize = () => setInRange((!min && !max) ? false : (min ? window.innerWidth >= min : true) && (max ? window.innerWidth <= max : true))

        // Add resize listener
        window.addEventListener('resize', resize);

        /**
         * On end remove resize listener
         * 
         */
        return () => window.removeEventListener('resize', resize);

    }, [min, max]);

    return inRange;
}

/**
 * Screen
 * 
 * @returns 
 */
const Screen = ({
    min,
    max,
    available,
    unavailable
}: {
    min?: number,
    max?: number,
    available?: React.ReactNode,
    unavailable?: React.ReactNode
}) => {

    /**
     * Screen
     * 
     */
    const screen = useScreen(min, max)

    return <React.Fragment>{screen ? available : unavailable}</React.Fragment>
}

/**
 * useOrientation Hook
 * 
 * @returns 
 */
export const useOrientation = (): OrientationType => {

    /**
     * Initial orientation
     * 
     */
    const initialOrientation: OrientationType = window.innerWidth > window.innerHeight ? 'landscape' :
        window.innerWidth < window.innerHeight ? 'portrait' : 'square';

    /**
     * In range state
     * 
     */
    const [orientation, setOrientation] = useState<OrientationType>(initialOrientation);

    /**
     * On orientation change
     * 
     */
    useEffect(() => {

        /**
         * Resize method
         * 
         * @returns 
         */
        const resize = () => {

            if (window.innerWidth > window.innerHeight) setOrientation('landscape');
            else if (window.innerWidth < window.innerHeight) setOrientation('portrait');
            else setOrientation('square');
        }

        // Add resize listener
        window.addEventListener('resize', resize);

        /**
         * On end remove resize listener
         * 
         */
        return () => window.removeEventListener('resize', resize);

    }, []);

    return orientation;
}

/**
 * Orientation
 * 
 * @returns 
 */
export const Orientation = (cases: Partial<Record<OrientationType, React.ReactNode>>) => {

    /**
     * Orientation
     * 
     */
    const orientation = useOrientation()

    return <React.Fragment>{cases[orientation]}</React.Fragment>
}


/**
 * SMALL_SCREEN
 * 
 */
export const SMALL_SCREEN: number = 768

/**
 * Is mobile
 * 
 * @returns 
 */
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


/**
 * Orientation type
 * 
 */
type OrientationType = 'landscape' | 'portrait' | 'square';

export default Screen