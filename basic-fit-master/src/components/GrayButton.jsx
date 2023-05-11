/* This is importing the react library, the Link component from react-router-dom, and the
GrayButton.scss file. */
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/components/GrayButton.scss'
/**
 *
 * @param {Text} link 
 * @param {Text} title 
 * @param {Text} description 

 */
/**
 * This function takes in a link, image, title, description, progress, and progressTotal and returns a
 * div with a link to the link, a title, and a description
 * @returns A div with a link to the link prop, and a h2 and p tag with the title and description
 * props.
 */
const GrayButton = ({ link = "#", image, title, description, progress = "", progressTotal }) => {
  return (
    <div className='GrayButton'>
      <Link to={link}>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  )
}
/* Exporting the GrayButton function so that it can be imported into other files. */

export default GrayButton
