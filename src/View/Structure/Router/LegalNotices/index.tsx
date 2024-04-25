import styled from 'styled-components';
import { useLang } from '../../../../Controller/Tools/Interface/Lang';
import { usePage } from '../../../../Controller/Tools/Helper/Page';
import { config } from '../../../../config';
import React from 'react';
import PageTitle from '../../../Components/PageTitle';
import Brand from '../../Portions/Brand';
import Notices from './Notices';

const LegalNotices = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Legal Notices')}` })

    return (
        <Container>
            <div id='titleHeader'><PageTitle title={lang('Legal Notices')} /></div>
            <Notices/>
            <Brand />
        </Container>
    )
}

export default LegalNotices


/**
 * Container
 * 
 */
const Container = styled.div`
    #titleHeader {
        padding-top: 150px;
        padding-bottom: 50px;
        background-repeat: no-repeat;
        padding-inline: 20px;
    }
    
`;