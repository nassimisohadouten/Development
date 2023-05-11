// Import needed packages
import React from "react";
import { Link } from "react-router-dom";
import '../style/components/CategorySelector.scss'

/**
 * Category selector for pages with 2 sub pages.
 *
 * @param {Object} leftLink - Object of the link on the left side. Should include active (bool), url and name
 * @param {Object} rightLink - Object of the link on the left side. Should include active (bool), url and name
 */
// Function that returns the HTML of the component
const CategorySelector = ( { leftLink, rightLink } ) => {
    return (
        <nav className="categorySelector">
            <ul>
                <li className={`${leftLink.active ? "active" : ""}`}>
                    <Link to={leftLink.url} className={`${leftLink.active ? "active" : ""}`}>{leftLink.name}</Link>
                </li>
                <li className={`${rightLink.active ? "active" : ""}`}>
                    <Link to={rightLink.url} className={`${rightLink.active ? "active" : ""}`}>{rightLink.name}</Link>
                </li>
            </ul>
        </nav>
    )
}

// Exporting the function to make it accesible from other files
export default CategorySelector