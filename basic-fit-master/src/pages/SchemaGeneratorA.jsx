// Import needed packages
import React from "react";
import TopNav from "../components/TopNav";
import { Heading1, Heading2, Heading4 } from "../components/Titles";
import InputFieldDate from "../components/InputFieldDate";
import InputFieldPersonal from "../components/InputFieldPersonal";
import "../style/pages/SchemaGeneratorA.scss"

// Function that returns the HTML of the page  
const SchemaGenerator = () => {
    return (
        <div>
            <TopNav/>
            <div className="pageTitleContainer">
                <Heading1 text="GENEREER JE SCHEMA"/>
            </div>
            <div className="white"></div>
            <div className="vraagContainer">
                <div className="vraagTxt">
                <Heading2 text="WAT IS JE GEBOORTEDATUM?" />
                </div>
            </div>
            <div className="inputContainer">
                <div className="input">
                <InputFieldDate />
                </div>
            </div>
            <div className="vraagContainer">
                <div className="vraagTxt">
                <Heading2 text="HOE LANG BEN JE?" />
                </div>
            </div>
            <div className="inputContainer">
                <div className="input">
                <InputFieldPersonal placeholder="Lengte" />
                </div>
                <div className="inputTxt">
                <Heading2 text="cm" />
                </div>
            </div>
            <div className="vraagContainer">
                <div className="vraagTxt">
                <Heading2 text="HOEVEEL WEEG JE?" />
                </div>
            </div>
            <div className="inputContainer">
                <div className="input">
                <InputFieldPersonal placeholder="Gewicht" />
                </div>
                <div className="inputTxt">
                <Heading2 text="kg" />
                </div>
            </div>
            <div className="white"></div>
            <div className="vraagContainer">
                <div className="vraagTxt">
                <Heading2 text="HOE ERVAREN BEN JE IN FITNESS?" />
                </div>
            </div>
            <div className="white2"></div>
            <div className="optbuttonContainer">
                <button className="optBtn">Ik heb nooit gesport of ben net begonnen</button>
            </div>
            <div className="optbuttonContainer">
                <button className="optBtn">Ik heb wel eens gesport en probeer het weer op te pakken</button>
            </div>
            <div className="optbuttonContainer">
                <button className="optBtn">Ik ben een ervaren sporter</button>
            </div>
            <div className="nxtbuttonContainer">
                <button className="nxtBtn">Volgende</button>
            </div>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default SchemaGenerator;