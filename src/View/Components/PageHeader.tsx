import React from 'react'
import styled from 'styled-components'

// @ts-ignore
import Ornament from '../Media/Images/ornament.svg'

/**
 * Page header
 * 
 * @returns 
 */
const PageHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return <Container {...props} />
}

export default PageHeader


/**
 * Container
 * 
 */
const Container = styled.div`
    padding-top: 150px;
    padding-bottom: 50px;
    background-image: url(${Ornament});
    background-repeat: no-repeat;
    padding-inline: 20px;
`;