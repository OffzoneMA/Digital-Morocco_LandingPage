import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Lang } from '../../../../Controller/Tools/Interface/Lang'


/**
 * Links
 * 
 * @returns 
 */
const Links = ({ onChange, withHome }: { onChange?: () => void, withHome?: boolean }) => {

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

    return (
        <React.Fragment>
            {withHome && <Link onClick={onChange} className={thisRoute === '' ? 'active' : ''} to="/"><Lang>Home</Lang></Link>}
            <Link onClick={onChange} className={thisRoute === 'about' || thisRoute === 'feature' ? 'active' : ''} to="/about"><span><Lang>About</Lang></span></Link>
            <Link onClick={onChange} className={thisRoute === 'members' ? 'active' : ''} to="/members"><span><Lang>Members</Lang></span></Link>
            <Link onClick={onChange} className={thisRoute === 'partners' ? 'active' : ''} to="/partners"><span><Lang>Partners</Lang></span></Link>
            <Link onClick={onChange} className={thisRoute === 'events' || thisRoute === 'event' || thisRoute === 'billing' || thisRoute === 'checkout' || thisRoute === 'thanks' ? 'active' : ''} to="/events"><span><Lang>Events</Lang></span></Link>
            <Link onClick={onChange} className={thisRoute === 'pricing' ? 'active' : ''} to="/pricing"><span><Lang>Pricing</Lang></span></Link>
            <Link onClick={onChange} className={thisRoute === 'contact' ? 'active' : ''} to="/contact"><span><Lang>Contact Us</Lang></span></Link>
        </React.Fragment>
    )
}

export default Links