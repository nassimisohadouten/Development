import React from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar } from './ProgressBar'

import '../style/components/Challenge.scss'

/**
 * Challenge component that display the progress with an image
 *
 * @param {Text} link - Link to the challenge
 * @param {Text} image - Link to the image for the challenge
 * @param {Text} title - Title of the challenge
 * @param {Text} description - Description of the challenge
 * @param {Number} progress - How many steps have been completed
 * @param {Number} progressTotal - How many steps there are in total
 */
const Challenge = ({ link = "#", image, title, description, progress = "", progressTotal }) => {
  return (
    <div className='Challenge' style={{backgroundImage: `url(${image})`}}>
      <Link to={link}>
        <h2>{title}</h2>
        <p>{description}</p>
        {progress !== "" ? <ProgressBar progress={progress} progressTotal={progressTotal}/> : ''}
      </Link>
    </div>
  )
}

export default Challenge