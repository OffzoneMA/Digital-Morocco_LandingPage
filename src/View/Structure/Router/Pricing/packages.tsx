import React, { useState } from 'react'
import styled from 'styled-components'
import Package from './package'
import { Lang, useLang } from '../../../../Controller/Tools/Interface/Lang'
import Button from '../../../Components/Button'


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

    /**
     * Button click
     */
    const [showStartupDiv, setShowStartupDiv] = useState<boolean>(true);
    const [showInvestorDiv, setShowInvestorDiv] = useState<boolean>(false);

    const handleStartupButtonClick = () => {
        setShowStartupDiv(true);
        setShowInvestorDiv(false);
    };

    const handleInvestorButtonClick = () => {
        setShowStartupDiv(false);
        setShowInvestorDiv(true);
    };

    return (
        <Container>
            <div id="btnOptions">
            <Button onClick={handleStartupButtonClick}
                $size={22}
                $color={showStartupDiv? '#25DAC5' :"#2E90FA"}
                $width={200}
                $applyHoverColor={!showStartupDiv}
                $hoverColor='#25DAC5'
                $fontWeight='medium'
                $fontFamily='DMSans-Medium'
            >
                <Lang>Start Up</Lang>
            </Button>
            <Button onClick={handleInvestorButtonClick}
                $size={22}
                $color={ showInvestorDiv? '#25DAC5' :"#2E90FA" }
                $width={200}
                $applyHoverColor={!showInvestorDiv}
                $hoverColor='#25DAC5'
                $fontWeight='medium'
                $fontFamily='DMSans-Medium'
            >
                <Lang>Investor</Lang>
            </Button>
            </div>
            {showStartupDiv && 
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
            </div>}
            {showInvestorDiv && 
            <div id="items">
            <Package
                className='animation'
                name={lang('Standard')}
                price={0}
                desc={lang('Unleash unlimited potential with premium events, reports, and priority connections.')}
                features={[
                    lang('Full access to the Digital Morocco networking platform'),
                    lang('Unlimited access to all online events, conferences, and webinars'),
                    lang('Exclusive access to premium industry resources and reports'),
                    lang('Priority connections with investors and partners'),
                    lang('Featured profile placement and visibility')
                ]}
                recommended
                btnText='Free Trial'
            />
            <Package
                className='animation'
                name={lang('premium')}
                price={99.99}
                desc={lang('Benefit from a VIP network, full access to events, and management tools.')}
                features={[
                    lang('VIP access to the Digital Morocco networking platform'),
                    lang('Access to all online and offline events, conferences, and webinars'),
                    lang('Full access to premium industry resources, reports, and workshops'),
                    lang('Full access to premium industry resources, reports, and workshops  and more other features'),
                    lang('Dedicated account manager for personalized connections and support'),
                    lang('Strategic promotion and branding opportunities')
                ]}
                btnText='Coming soon'
                mask
            />
            </div>}
            
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
    padding-block: 70px;
    margin: auto;

    > #btnOptions {
        display: flex;
        justify-content: center;
        gap: 32px;
        padding-bottom: 50px;
        aling-items: center;

        > button {
            transition: 300ms;

            // &:hover {
            //     border-color: #00CDAE;
            //     color: #00CDAE;
            //     filter: none;
            // }
        }
    }
    
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