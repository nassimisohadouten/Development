import React from "react";
import '../style/components/Intro.scss'
import Overlay from "./Overlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading8, Heading9 } from "./Titles";

function Intro() {
    //useState worden aangeroepen met de variabelen counter en setCounter 
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()

    const nextOverlay = () => {
        if(counter + 1 >= 3) {
            navigate("/home")
        } else {
            setCounter(counter + 1)
        }
    }

    if(counter === 0) {
        return(
            <div>
            <Overlay nextOverlay={nextOverlay}>
                <img src="/assets/images/foto1.png" alt="Progress bars" style={{width: "60%"}} />
                {/* <h1>Wat is Basic Home</h1> */}
                <Heading8 text="Wat is Basic Home" />
                <Heading9 text="Toevoeging aan de Basic-Fit app waarmee sporters gemotiveerd worden om op een interactieve manier buiten de sportschool onder begeleiding te sporten" />
                {/* <h2>Toevoeging aan de Basic-Fit app waarmee sporters gemotiveerd worden om op een interactieve manier buiten de sportschool onder begeleiding te sporten</h2> */}
            </Overlay>
            <div className="radiobutton">
                <input type="radio" checked></input>
                <input type="radio"></input>
                <input type="radio"></input>
            </div>
            </div>
        )
    }
    
    if(counter === 1) {
        return(
            <div>
            <Overlay nextOverlay={nextOverlay}>
                <img src="/assets/images/foto2.png" alt="Progress bars" style={{width: "80%"}} />
                {/* <h1>Bewegingsfeedback</h1> */}
                <Heading8 text="Bewegingsfeedback" />
                {/* <h2>Je kunt tijdens een workout op je scherm zien of je de oefening goed uitvoert. Zo haal je het uiterste uit je workout en voorkom je blessures.</h2> */}
                <Heading9 text="Je kunt tijdens een workout op je scherm zien of je de oefening goed uitvoert. Zo haal je het uiterste uit je workout en voorkom je blessures." />
            </Overlay>
            <div className="radiobutton">
                <input type="radio" checked></input>
                <input type="radio" checked></input>
                <input type="radio"></input>
            </div>
            </div>
        )
    }
    
    if(counter === 2) {
        return (
            <div>
                <Overlay nextOverlay={nextOverlay}>
                    <img src="/assets/images/foto3.png" alt="Progress bars" style={{height: "40%"}}/>
                    {/* <h1>Ben jij ready voor een Challenge?</h1> */}
                    <Heading8 text="Ben jij ready voor een Challenge?" />
                    {/* <h2>Elke week krijg je naast de workouts nieuwe challenges die jij alleen of met je vrienden kunt voltooien om prijzen te verdienen.</h2> */}
                    <Heading9 text="Elke week krijg je naast de workouts nieuwe challenges die jij alleen of met je vrienden kunt voltooien om prijzen te verdienen." />
                </Overlay>
                <div className="radiobutton">
                <input type="radio" checked></input>
                <input type="radio" checked></input>
                <input type="radio" checked></input>
                </div>
            </div>
        )
    }
}

export default Intro