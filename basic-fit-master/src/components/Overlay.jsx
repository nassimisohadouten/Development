import React from "react";
import '../style/components/Overlay.scss'


function Overlay(props) {
    return (
        <div className="Intro">
            {props.children}
            <div>
                <button onClick={() => {
                    props.nextOverlay()
                }}>Volgende</button>
                <ul></ul>
            </div>
        </div>
    )
}

export default Overlay