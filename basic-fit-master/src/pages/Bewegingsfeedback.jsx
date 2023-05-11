// Import needed packages
import React, { useState, useEffect } from "react";
import {Helmet} from "react-helmet";

import "../style/pages/BewegingsFeedback.scss"

// Function that returns the HTML of the page
const BewegingsFeedback = () => {
    // Requires proper fix. Instead of reloading the page on load the entire page should be unloaded when going to another page
    useEffect(() => {
        const storage = sessionStorage
        if ( storage.getItem( 'motionfeedback' ) ) {
            storage.removeItem( 'motionfeedback' )
            window.location.reload()
        } else {
            storage.setItem( 'motionfeedback', true)
        }
    })

    return (
        <div className="MotionFeedback">
            <div className="intro">
                <div className="step-1">
                    <h1>Squats</h1>
                    <p>Doe 20 squats</p>
                    <button className="btn btn-orange next-step">Volgende</button>
                </div>
                <div className="step-2">
                    <h1>Voorbeeld</h1>
                    <p>Bekijk hieronder hoe een squat uitgevoerd moet worden:</p>
                    <video src="/assets/videos/squat-tutorial.mp4" loop autoPlay muted></video>
                    <button className="btn btn-orange start">Start</button>
                </div>
            </div>
            <div className="container">

                <h2 id="bodyNotFullyVisible">Zorg er voor dat je hele lichaam zichtbaar is</h2>
                <h2 id="countdown"></h2>
                <canvas id="canvas" width="100" height="100">
                    
                </canvas>
                <video id="video" width="100" height="100">
                    <source src=""/>
                </video>

                <div className="feedback-container">
                    <div id="hip-line"></div>
                    <div id="target-line"></div>
                </div>
            </div>

            <Helmet>
                {/* Load three.js */}
                <script src="/assets/javascript/libraries/three.min.js" type="text/javascript"></script>
                {/* Load scatter-gl.js */}
                <script src="/assets/javascript/libraries/scatter-gl.min.js" type="text/javascript"></script>
                {/* Load tracker.js */}
                <script src="/assets/javascript/libraries/tracker.js" type="text/javascript"></script>
                <script src="/assets/javascript/motion-feedback-intro.js" type="text/javascript"></script>
                <script src="/assets/javascript/motion-feedback.js" type="text/javascript"></script>
            </Helmet>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default BewegingsFeedback;