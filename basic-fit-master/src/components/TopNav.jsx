// Import needed packages
import React from "react";

import { Outlet, useNavigate, Link } from "react-router-dom";
import '../style/components/TopNav.scss'

/**
 * Top navigation with return icon
 */
const TopNav = () => {
    const navigate = useNavigate();
    return (
        <div className="TopNav">
            <nav>
                <ul>
                    <li>
                    <button className="button" onClick={() => navigate (-1) }> <span className="icon"><img src="/assets/images/return.svg" alt="" /></span></button>
                    </li>
                    <li>
                        <Link to={'/Shop'}><span className="icon"><img src="/assets/images/shopping.svg" alt="" /></span></Link>
                    </li>
                    <ul>
                    <li>
                        <Link to={'/'}><span className="icon"><img src="/assets/images/search.svg" alt="" /></span></Link>
                    </li>
                    <li>
                        <Link to={'/'}><span className="icon"><img src="/assets/images/notification.svg" alt="" /></span></Link>
                    </li>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default TopNav