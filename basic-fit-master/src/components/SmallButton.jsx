/* The above code is importing the React library and the SmallButton.scss file. */
import React from 'react'
import '../style/components/SmallButton.scss'

/* Exporting the SmallButton component. */
export const SmallButton =({
  children,
  type,
  onClick
  
/* A function that is returning a button. */
}) =>{
  return(
    <button className="SmallBtn" onClick={onClick} type={type}>
      {children}
    </button>
  )
}

/* Exporting the SmallButton component. */
export default SmallButton

