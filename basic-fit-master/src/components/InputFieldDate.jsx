import React from "react";
import '../style/components/InputFieldDate.scss'

//functie die een inputfield weergeeft voor het invullen van een datum

function InputFieldDate({name, type="date", id, placeholder, value}) {
    return (
        <div className="InputField">
          <label htmlFor={id}>{name}</label>
          <div className="Input">
          <input type={type} placeholder={placeholder} value={value} id={id} />
          </div>
        </div>
    )
}

export default InputFieldDate