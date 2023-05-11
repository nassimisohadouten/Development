import React from "react";
import '../style/components/InputField.scss'

//functie die een inputfield weergeeft met een placeholder waarin de gebruiker kan zoeken naar een vriend

function InputField({name, type="text", id, placeholder, value}) {
    return (
        <div className="InputField">
          <label htmlFor={id}>{name}</label>
          <div className="Input">
          <img id="srcIcon" src="/assets/images/search.svg" alt="" />
          <input type={type} placeholder={placeholder} value={value} id={id} />
          <img id="shrIcon" src="/assets/images/share.svg" alt="" />
          </div>
        </div>
    )
}

export default InputField