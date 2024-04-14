
/**
 * Text method
 * 
 * @returns 
 */
const text = (value: string, max?: number) => {

    // With max
    if (max) {

        // Short text
        const shortText = value.substring(0, max);

        if (shortText.length < value.length)
            return `${shortText}...`;

        else return shortText;
    }

    // Without max
    else return value;
}

export default text