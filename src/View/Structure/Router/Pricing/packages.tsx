import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Package from './package'
import { Lang, useLang } from '../../../../Controller/Tools/Interface/Lang'
import Button from '../../../Components/Button'
import WelcomePopup from '../../../Components/WelcomePoppup'
import { useLocation } from 'react-router-dom'


/**
 * Packages
 * 
 * @returns 
 */
const Packages = () => {

    /**
     * Popup
     */
    const [showPopup, setShowPopup] = useState(false);

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Location
     */
    const location = useLocation();

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

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem('userInitiatedReload', 'true');
        };
      
        window.addEventListener('beforeunload', handleBeforeUnload);
      
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);
      
      useEffect(() => {
        const { state } = location;
        const popupShown = state?.popupShown ?? false;

        const hasVisited = sessionStorage.getItem('hasVisitedPricingPage');
        const sessionVisit = sessionStorage.getItem('hasVisitedPricingDuringSession');
        const userInitiatedReload = sessionStorage.getItem('userInitiatedReload') === 'true';
      
        const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        const isReload = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';
        console.log(!hasVisited && location.state?.popupShown)

        if (!hasVisited && !popupShown) {
            // First visit ever
            sessionStorage.setItem('hasVisitedPricingPage', 'true');
            setShowPopup(true);
        } else if (isReload && userInitiatedReload) {
            // Page reload initiated by the user
            setShowPopup(true);
        } else if (!sessionVisit && !popupShown) {
            // First visit in the current session
            setShowPopup(true);
        }
      
        sessionStorage.setItem('hasVisitedPricingDuringSession', 'true');
        sessionStorage.removeItem('userInitiatedReload');
      }, [location]);
      
    const handleClosePopup = () => {
    setShowPopup(false);
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
            <>
            <div id="items">
            <Package
                className='animation'
                name={lang('Basic')}
                price={29.90}
                nbMonth={12}
                desc={lang('Connect, join exclusive events, and access essential resources for your project.')}
                features={[
                    lang('3200 Credits'),
                    lang('Full access to the investor list'),
                    lang('AI-powered investor matching'),
                    lang('Real-time tracking of investment requests'),
                    lang('Generate a comprehensive technical report'),
                    lang('Secure and simple Pitch Deck sharing'),
                    lang('360° panoramic view'),
                    lang('Priority access to events'),
                    lang('Event pricing (standard rate)'),
                    lang('1 project creation (included)*'),
                    lang('Standard transaction fees, payable in credits')
                ]}
                btnText='Start'
            />
            <Package
                className='animation'
                name={lang('Standard')}
                price={49.90}
                nbMonth={12}
                desc={lang('Unleash unlimited potential with premium events, reports, and priority connections.')}
                features={[
                    lang('6400 Credits'),
                    lang('Full access to the investor list'),
                    lang('AI-powered investor matching'),
                    lang('Real-time tracking of investment requests'),
                    lang('Generate a comprehensive technical report'),
                    lang('Secure and simple Pitch Deck sharing'),
                    lang('360° panoramic view'),
                    lang('Project visibility on our official website'),
                    lang('Priority access to events'),
                    lang('Event pricing (-15%)'),
                    lang('Creation of 2 projects (included)*'),
                    lang('Transaction fees discount (-10%), payable in credits')
                ]}
                recommended
                btnText='Start'
            />
            <Package
                className='animation'
                name={lang('premium')}
                price={69.90}
                nbMonth={12}
                desc={lang('Experience VIP networking, comprehensive event access, and personalized support.')}
                features={[
                    lang('9600 Credits'),
                    lang('Full access to the investor list'),
                    lang('AI-powered investor matching'),
                    lang('Real-time tracking of investment requests'),
                    lang('Generate a comprehensive technical report'),
                    lang('Secure and simple Pitch Deck sharing'),
                    lang('360° panoramic view'),
                    lang('Project visibility on our official website'),
                    lang('VIP Club (Early access to our activities)'),
                    lang('VIP Newsletter'),
                    lang('Priority access to events'),
                    lang('Event pricing (-30%) + 1 free ticket after 6 months of continuous subscription'),
                    lang('Creation of 5 projects (included)*'),
                    lang('Transaction fees discount (-20%), payable in credits')
                ]}
                btnText='Start'
            />
            </div>
            <p id='startUpText'><Lang>*Possibility to add additional projects: up to 2 for the Standard Plan and 5 for the Premium Plan. See pricing conditions in our Terms of Use.</Lang></p>

            <WelcomePopup
            isOpen={showPopup}
              onRequestClose={handleClosePopup}
            />
            </>
            }
            {showInvestorDiv && 
            <div id="items">
            <Package
                className='animation'
                name={lang('Standard')}
                price={0}
                desc={lang('Unleash unlimited potential with our elite events, exclusive reports, and priority connections.')}
                features={[
                    lang('Full access to our networking platform'),
                    lang('Discover an exclusive selection of promising startups'),
                    lang('In-depth analysis of projects for informed decisions'),
                    lang('Explore targeted investment opportunities according to your interests'),
                    lang('Highlight your profile for increased visibility'),
                    lang('Join our VIP Club to access exclusive benefits'),
                    lang('Stay informed with our VIP Newsletter')
                ]}
                recommended
                btnText='Start'
                isForInvestor
            />
            <Package
                className='animation'
                name={lang('premium')}
                price={99.99}
                desc={lang('Explore an exceptional VIP network, exclusive events, and advanced management tools.')}
                features={[
                    lang('Full access to our networking platform'),
                    lang('Discover an exclusive selection of promising startups'),
                    lang('In-depth analysis of projects for informed decisions'),
                    lang('Explore targeted investment opportunities according to your interests'),
                    lang('Highlight your profile for increased visibility'),
                    lang('Join our VIP Club to access exclusive benefits'),
                    lang('Stay informed with our VIP Newsletter'),
                    lang('Full access to premium industry resources, reports, and workshops  and more other features'),
                    lang('Dedicated account manager for personalized connections and support'),
                ]}
                btnText='Coming soon'
                mask
                isForInvestor
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
    padding-top: 70px;
    padding-bottom: 30px;
    margin: auto;
    display: flex;
    flex-direction: column;

    > #btnOptions {
        display: flex;
        justify-content: center;
        gap: 32px;
        padding-bottom: 50px;
        aling-items: center;

        // Media
        @media (max-width: 468px) {
            flex-direction: column;
            gap: 30px;
            width: 100%;
        }

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
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 35px;

        
    }

    > #startUpText {
        margin: 0;
        margin-top: 30px;
        color:  #151439B2;
        font-family: "DMSans-Regular";
        font-size: 10px;
        line-height: 26px; 
    }

    // // Media
    // @media (max-width: 900px) {
    //     padding-block: 30px;
    // }

    // Media
    @media (max-width: 780px) {
        
    }
`;