import styled from 'styled-components'

/**
 * Default button
 * 
 */
const Button = styled.button<{
    $size?: number,
    $isFill?: boolean,
    $background?: string,
    $color?: string,
    $padding?: [number, number]
    $width?:number
    $height?:number
    $fontWeight?: number
}>`
    border-radius: 50px;
    font-size: ${p => p.$size ? `${p.$size}px` : 'inherit'};
    border: 2.3px solid ${p => p.$background};
    background-color: ${p => p.$isFill ? p.$background : 'transparent'};
    color: ${p => p.$color ?? 'inherit'};
    padding: ${p => p.$padding ? `${p.$padding[0]}px ${p.$padding[1]}px` : '8px 19px'};
    transition: filter 0.3s;
    cursor: pointer;
    min-width: ${p => p.$width ? `${p.$width}px`:''};
    height: ${p => p.$height ? `${p.$height}px`:''};
    font-weight: ${p => p.$fontWeight ? p.$fontWeight : ''};

    &:hover {
        filter: brightness(0.8);
    }
`;

export default Button