// Import needed packages
import React from "react";
import TopNav from "../components/TopNav";
import { Heading1, Heading2, Heading4 } from "../components/Titles";
import TopNavP from "../components/TopNav";
import "../style/pages/Trainingsschema.scss"

// Function that returns the HTML of the page
const Trainingsschema = () => {
    return (
        <div>
            <TopNav/>
            <div className="pageTitleContainer">
                <Heading1 text="Trainingsschema"/>
            </div>
            <div className="weekTxt">
            <Heading2 text="WEEK 43" />
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="MAANDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <Heading4 text="Vandaag mag je uitrusten" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="DINSDAG" />
                </div>
            </div>
            <div className="oefeningContainer">
                <div className="oefeningField">
                <img src="/assets/images/squat.png" id="oefeningIMG" alt="" />
                    <div className="oefeningTxt">
                        <Heading2 text="Squat - Oefening" />
                        <Heading2 text="10 minuten" />
                    </div>
                    <button className="oefeningBtn">Start</button>
                </div>
            </div>
            <div className="oefeningContainer">
                <div className="oefeningField">
                <img src="/assets/images/pushup.png" id="oefeningIMG2" alt="" />
                    <div className="oefeningTxt">
                        <Heading2 text="Push up - Oefening" />
                        <Heading2 text="5 minuten" />
                    </div>
                    <button className="oefeningBtn">Start</button>
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="WOENSDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <Heading4 text="Vandaag mag je uitrusten" />
                </div>
            </div>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default Trainingsschema;