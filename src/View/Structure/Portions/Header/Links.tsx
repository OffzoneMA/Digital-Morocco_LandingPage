import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'
import { language } from '../../../Language'


/**
 * Links
 * 
 * @returns 
 */
const Links = ({ onChange, withHome }: { onChange?: () => void, withHome?: boolean }) => {

    /**
     * User Data
     */
    const userDataString = sessionStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    /**
     * Location
     * 
     */
    const location = useLocation();

    /**
     * This route
     * 
     */
    const thisRoute = location.pathname.split('/')[1];

    /**
     * Language
     */
    const currentLanguage = language.split('-')[0] || 'en'; 

    const [activeLink, setActiveLink] = useState<string | null>('');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        if (onChange) {
            onChange();
        }
    };

    const handleLinkClickActive = () => {
        setActiveLink(null);
        if (onChange) {
            onChange();
        }
    };

    console.log(activeLink)
    return (
        <React.Fragment>
            {withHome && <Link onClick={onChange} className={thisRoute === '' ? 'active' : ''} to="/"><Lang>Home</Lang></Link>}
            <Link onClick={onChange} className={(thisRoute === 'about' || thisRoute === 'feature') ? 'active' : ''} to="/about"><span><Lang>About</Lang></span></Link>
            <Link onClick={onChange} className={(thisRoute === 'members') ? 'active' : ''} to="/members"><span><Lang>Members</Lang></span></Link>
            <Link onClick={onChange} className={(thisRoute === 'partners') ? 'active' : ''} to="/partners"><span><Lang>Partners</Lang></span></Link>
            <Link onClick={onChange} className={(thisRoute === 'events' || thisRoute === 'event' || thisRoute === 'billing' || thisRoute === 'checkout' || thisRoute === 'thanks')  ? 'active' : ''} to="/events"><span><Lang>Events</Lang></span></Link>
            <Link onClick={handleLinkClickActive} className={thisRoute === 'pricing' ? 'active' : ''} to="/pricing"><span><Lang>Pricing</Lang></span></Link>
            <Link onClick={onChange} className={thisRoute === 'contact' ? 'active' : ''} to="/contact"><span><Lang>Contact Us</Lang></span></Link>
            {withHome && 
            <div className='started'>
                <div className='dash' style={{width: '150px'}}/>
                <Link onClick={() => handleLinkClick('signin')}  className={activeLink === 'sign_in' ? 'active' : ''} to={`https://app.digitalmorocco.net/?lang=${currentLanguage}`} target='_blank'><span><Lang>Sign in</Lang></span></Link>
                <Link onClick={() => handleLinkClick('pricing')}  className={thisRoute === 'pricing' && activeLink === 'pricing' ? 'active' : ''} to="/pricing"><span><Lang>Get Started</Lang></span></Link>
            </div>}
        </React.Fragment>
    )
}

export default Links