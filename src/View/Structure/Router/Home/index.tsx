import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Interface from './Interface';
import Content from './Content';
import { useLang } from '../../../../Controller/Tools/Interface/Lang';
import { usePage } from '../../../../Controller/Tools/Helper/Page';
import { config } from '../../../../config';
import WelcomePopup from '../../../Components/WelcomePoppup';
/**
 * Home
 * 
 * @returns 
 */
const Home = () => {

    const [showPopup, setShowPopup] = useState(false);
  

    /**
     * Lang
     * 
     */
    const lang = useLang()

    /**
     * Page
     * 
     */
    usePage({ title: `${config.APP_NAME} | ${lang('Home')}` })

    /**
     * Popup
     */


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
  const hasVisited = sessionStorage.getItem('hasVisitedHomePage');
  const sessionVisit = sessionStorage.getItem('hasVisitedDuringSession');
  const userInitiatedReload = sessionStorage.getItem('userInitiatedReload') === 'true';

  const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  const isReload = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';

  if (!hasVisited) {
      // First visit ever
      sessionStorage.setItem('hasVisitedHomePage', 'true');
      setShowPopup(true);
  } else if (isReload && userInitiatedReload) {
      // Page reload initiated by the user
      setShowPopup(true);
  } else if (!sessionVisit) {
      // First visit in the current session
      setShowPopup(true);
  }

  // Mark that the home page has been visited during this session
  sessionStorage.setItem('hasVisitedDuringSession', 'true');
  // Clear the userInitiatedReload flag
  sessionStorage.removeItem('userInitiatedReload');
}, []);

    const handleClosePopup = () => {
      setShowPopup(false);
    };

    return (
        <Container>
            <Interface />
            <Content />
            <WelcomePopup
            isOpen={showPopup}
              onRequestClose={handleClosePopup}
            />
        </Container>
    )
}

export default Home


/**
 * Container
 * 
 */
const Container = styled.div`
`;