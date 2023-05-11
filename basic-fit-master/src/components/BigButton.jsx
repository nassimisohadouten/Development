/* The above code is importing the React library and the BigButton.scss file. */
import React from 'react'
import '../style/components/BigButton.scss'

/* Exporting the BigButton component. */
export const BigButton =({
  children,
  type,
  onClick
  
/* A function that is returning a button. */
}) =>{
  return(
    <button className="BigBtn" onClick={onClick} type={type}>
      {children}
    </button>
  )
}

/* Exporting the BigButton component. */
export default BigButton