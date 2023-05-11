import React from "react";
import '../style/components/InputFieldPersonal.scss'

//functie die een inputfield weergeeft met een placeholder waarin de gebruiker kan zoeken naar een vriend

function InputFieldPersonal({type="number", placeholder}) {
    return (
        <div className="InputField">
          <div className="Input">
          <input type={type} placeholder={placeholder} required />
          </div>
        </div>
    )
}

export default InputFieldPersonal