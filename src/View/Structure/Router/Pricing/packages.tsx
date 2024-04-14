import React from 'react'
import styled from 'styled-components'
import Package from './package'
import { useLang } from '../../../../Controller/Tools/Interface/Lang'


/**
 * Packages
 * 
 * @returns 
 */
const Packages = () => {

    /**
     * Lang
     * 
     */
    const lang = useLang()

    return (
        <Container>
            <div id="items">
                <Package
                    className='animation'
                    name={lang('Basic')}
                    price={19.9}
                    desc={lang('Connect and collaborate at the entry level with curated events and resource access.')}
                    features={[
                        lang('Access to the Digital Morocco networking platform'),
                        lang('Attend select online events and webinars'),
                        lang('Limited access to curated digital resources'),
                        lang('Connect with potential partners and investors')
                    ]}
                />
                <Package
                    className='animation'
                    name={lang('Standard')}
                    price={49.9}
                    desc={lang('Unleash unlimited potential with premium events, reports, and priority connections.')}
                    features={[
                        lang('Full access to the Digital Morocco networking platform'),
                        lang('Unlimited access to all online events, conferences, and webinars'),
                        lang('Exclusive access to premium industry resources and reports'),
                        lang('Priority connections with investors and partners'),
                        lang('Featured profile placement and visibility')
                    ]}
                    recommended
                />
                <Package
                    className='animation'
                    name={lang('premium')}
                    price={99.99}
                    desc={lang('Experience VIP networking, comprehensive event access, and personalized support.')}
                    features={[
                        lang('VIP access to the Digital Morocco networking platform'),
                        lang('Access to all online and offline events, conferences, and webinars'),
                        lang('Full access to premium industry resources, reports, and workshops'),
                        lang('Dedicated account manager for personalized connections and support'),
                        lang('Strategic promotion and branding opportunities')
                    ]}
                />
            </div>
        </Container>
    )
}

export default Packages


/**
 * Container
 * 
 */
const Container = styled.div`
    max-width: 1200px;
    width: calc(100% - 50px);
    padding-block: 100px;
    margin: auto;
    
    > #items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        gap: 35px;
    }

    // Media
    @media (max-width: 900px) {
        padding-block: 30px;
    }
`;