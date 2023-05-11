import React from 'react'
import { Link } from 'react-router-dom'
import { Heading3 } from './Titles'

import '../style/components/HomepageItem.scss'

export const HomepageItem = ({ image, title, url }) => {
    return (
        <Link to={url} className='HomepageItem'>
            <div style={{backgroundImage: `url(${image})`}}>
                <Heading3 text={title}/>
            </div>
        </Link>
    )
}