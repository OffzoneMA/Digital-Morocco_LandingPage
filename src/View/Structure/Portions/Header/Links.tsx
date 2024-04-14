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
            <Link onClick={onChange} className={thisRoute === 'about' ? 'active' : ''} to="/about"><Lang>About</Lang></Link>
            <Link onClick={onChange} className={thisRoute === 'members' ? 'active' : ''} to="/members"><Lang>Members</Lang></Link>
            <Link onClick={onChange} className={thisRoute === 'partners' ? 'active' : ''} to="/partners"><Lang>Partners</Lang></Link>
            <Link onClick={onChange} className={thisRoute === 'events' ? 'active' : ''} to="/events"><Lang>Events</Lang></Link>
            <Link onClick={onChange} className={thisRoute === 'pricing' ? 'active' : ''} to="/pricing"><Lang>Pricing</Lang></Link>
            <Link onClick={onChange} className={thisRoute === 'contact' ? 'active' : ''} to="/contact"><Lang>Contact Us</Lang></Link>
        </React.Fragment>
    )
}

export default Links