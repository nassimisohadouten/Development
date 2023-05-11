/* Importing the React library and the Labels.scss file. */
import React from "react";
import '../style/components/Labels.scss';

/* Defining an array of supported colors. */
const supportedColors = ["orange", "aqua", "purple","black", "light-gray", "white" ]

// Basic, Intermediate en Advanced labels
/**
 * The function Labels takes in an object with two properties, text and color. If the color property is
 * not a supported color, then the color property is set to orange. The function returns a paragraph
 * element with the class name Labels and the color property. The paragraph element contains the text
 * property
 * @returns A paragraph with the class name of Labels and the color of the text.
 */
function Labels( {text,color} ) {

    if (! supportedColors.includes( color ) ) color = 'orange'
    return (
        <p className={`Labels ${color}`}>{text}</p>
    )
}

// Exporting the function to make it accesible from other files
export default Labels