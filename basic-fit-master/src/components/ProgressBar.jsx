import React from 'react'

import '../style/components/ProgressBar.scss'

/**
 * Progress bar
 *
 * @param {Number} progress - The amount of items in the challenge that have been completed
 * @param {Number} progresstotal - The total amount of items in the challenge
 */
export const ProgressBar = ({ progress, progressTotal}) => {
    return (
        <div className="ProgressBar">
            <p>{progress} / {progressTotal}</p>
            <div className="bar">
                <div className="progress" style={{width:`${100 / progressTotal * progress}%`}}></div>
            </div>
        </div>
    )
}

/**
 * Progress circle
 *
 * @param {Number} progress - The amount of items in the challenge that have been completed
 * @param {Number} progresstotal - The total amount of items in the challenge
 * @param {Text} text - Text to display in the circle
 */
export const ProgressCircle = ({ progress, progressTotal, text}) => {
    const progressPercentage = 100 / progressTotal * progress
    return (
        <div className='ProgressCircle'>
            <div className="circle" style={{"--cirlce-radius":progressPercentage}}>
                <div className="innerCircle">
                    <p className='percentage'>{progressPercentage}%</p>
                    <p className='text'>{text}</p>
                </div>
            </div>
        </div>
    )
}