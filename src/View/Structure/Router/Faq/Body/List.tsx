import styled from 'styled-components';
import React from 'react'
import Search from './Search';
import Topic from './Topic';
import { useLang } from '../../../../../Controller/Tools/Interface/Lang';


/**
 * List
 * 
 * @returns 
 */
const List = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return (
        <Container>
            <Search />
            <div id="topics">
                <Topic
                    question={lang('What is Digital Morocco?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('How do I create an account?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('What profiles are available?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('How can I connect with other members?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('Can I attend events without an account?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('Are there fees for using Digital Morocco?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('How do I upgrade my profile or subscription?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('How can I become a partner or sponsor?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
                <Topic
                    question={lang('What if I have technical issues?')}
                    answer={lang('Digital Morocco is a vibrant business networking platform connecting startups, companies, project holders, and investors. We organize events and provide a space to collaborate and grow.')}
                />
            </div>
        </Container>
    )
}

export default List

/**
 * Container
 * 
 */
const Container = styled.div`

    > #topics {
        margin-top: 10px;
    }
`;