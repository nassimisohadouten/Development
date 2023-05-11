// Import needed packages
import React from "react";
import TopNav from "../components/TopNav";
import { Heading1, Heading2, Heading4 } from "../components/Titles";
import TopNavP from "../components/TopNav";
import "../style/pages/SchemaKiezer.scss"

// Function that returns the HTML of the page
const SchemaKiezer = () => {
    return (
<div>
            <TopNav/>
            <div className="pageTitleContainer">
                <Heading1 text="Maak je schema"/>
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
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="DINSDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="WOENSDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="DONDERDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="VRIJDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="ZATERDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="dagContainer">
                <div className="dagTxt">
                <Heading2 text="ZONDAG" />
                </div>
            </div>
            <div className="infoContainer">
                <div className="infoTxt">
                <img id="schemaIcon" src="/assets/images/schema.svg" alt="" />
                </div>
            </div>
            <div className="buttonContainer">
                <button className="schemaBtn">Maak je schema</button>
            </div>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default SchemaKiezer;