// Import needed packages
import React, { useState, useEffect } from "react";
import BigButton from "../components/BigButton";
import TopNav from "../components/TopNavP";
import CategorySelector from "../components/CategorySelector"
import Labels from "../components/Labels";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Heading7 } from "../components/Titles";

// Function that returns the HTML of the page
const Trainen = () => {
    
    const leftLink={active:false, url:'/Trainen', name:"WORKOUTS"}
    const rightLink={active:true, url:'/Planning', name:"PLANNING"}

    return (
        <div>
            <TopNav/>

            <div className="pageTitleContainer">
            <Heading1 text="PLANNING" />
            </div>

            <CategorySelector leftLink={leftLink} rightLink={rightLink}/>

       
            <a href="/Trainingsschema">
            <BigButton>
                <h2>TRAININGSSCHEMA</h2>
                <p>Bekijk je trainingsschema en zie welke workouts op de planning staan</p>
            </BigButton>
            </a>

            <a href="/SchemaGenerator">
            <BigButton>
            <h2>GENEREER JE SCHEMA</h2>
            <p>Vul je gegevens in en laat ons een planning voor je maken</p>
            <Labels color='aqua' text='BASIC'/>
            </BigButton>
            </a>

            <a href="/SchemaKiezer">
            <BigButton>
            <h2>MAAK JE EIGEN SCHEMA</h2>
            <p>Bepaal zelf wanneer je welke workouts doet </p>
            <Labels color='purple' text='ADVANCED'/>
            </BigButton>
            </a>
            </div>
     
    )
}

// Exporting the function to make it accesible from other files
export default Trainen;
