// Import needed packages
import React from "react";
import { Link } from "react-router-dom";
import '../style/components/Button.scss'

const supportedColors = ['orange', 'aqua', 'purple', 'dark', 'light']
const supportedButtonSizes = ['small', 'large']
/**
 * Button component
 *
 * @param {Text} text - The text displayed on the button
 * @param {Text} color - color of the button. Supported colors are: orange, aqua and purple
 * @param {Text} url - url the button should link to
 * @param {Text} buttonSize - Size of the button. Supported sizes are: small, large
 */
// Function that returns the HTML of the component
const Button = ( { text, color = 'orange', url = null, buttonSize = 'small' } ) => {
    if (! supportedColors.includes( color ) ) color = 'orange'
    if (! supportedButtonSizes.includes( buttonSize ) ) buttonSize = 'small'
    
    if (! url ) {
        return (
            <button className={`Button ${color} ${buttonSize}`}>{text}</button>
        )
    } else {
        return (
            <Link to={url} className={`Button ${color} ${buttonSize}`}>{text}</Link>
        )
    }
}

// Exporting the function to make it accesible from other files
export default Button