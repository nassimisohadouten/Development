// Import needed packages
import React from "react";
import BigButton from "../components/BigButton";
import TopNav from "../components/TopNav";
import { Heading1 } from "../components/Titles";
import Labels from "../components/Labels"

// Function that returns the HTML of the page
const Yoga = () => {
    return (
        <div>
            <TopNav/>
            <div className="pageTitleContainer">
            <Heading1 text="YOGA" />
            </div>    

            <a href="/YogaB">
            <BigButton>
                <Labels color='aqua' text='BASIC'/>
                <p>Heb je nog geen of weinig ervaring met sporten. Hier kun je een selectie met simpele oefeningen vinden voor beginners.</p>
            </BigButton>
            </a>

            <a href="/YogaI">
            <BigButton>
            <Labels color='orange' text='INTERMEDIATE'/>
            <p>Wil jij wat meer uitgedaagd worden. Hier kun je een selectie oefeningen vinden met meer uitdaging.</p>
            </BigButton>
            </a>

            <a href="/YogaA">
            <BigButton>
            <Labels color='purple' text='ADVANCED'/>
            <p>Voel jij je al helemaal thuis in de sportschool. Hier vind je een selectie oefeningen.</p>
            </BigButton>
            </a>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default Yoga;
