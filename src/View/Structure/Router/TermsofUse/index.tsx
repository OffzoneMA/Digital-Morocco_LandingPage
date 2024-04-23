import styled from 'styled-components';
import { useLang } from '../../../../Controller/Tools/Interface/Lang';
import { usePage } from '../../../../Controller/Tools/Helper/Page';
import { config } from '../../../../config';
import React from 'react';
import PageHeader from '../../../Components/PageHeader';
import PageTitle from '../../../Components/PageTitle';
import Brand from '../../Portions/Brand';
import Terms from './Terms';


const TermOfUse = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('TermOfUse')}` })

    return (
        <Container>
            <PageHeader><PageTitle title={lang('Term Of Use')} /></PageHeader>
            <Terms/>
            <Brand />
        </Container>
    )
}

export default TermOfUse


/**
 * Container
 * 
 */
const Container = styled.div`
    
`;