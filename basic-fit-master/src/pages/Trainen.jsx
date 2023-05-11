// Import needed packages
import React, { useState, useEffect } from "react";
import BigButton from "../components/BigButton";
import TopNav from "../components/TopNavP";
import CategorySelector from "../components/CategorySelector"
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Heading7 } from "../components/Titles";

// Function that returns the HTML of the page
const Trainen = () => {
    
    const leftLink={active:true, url:'/Trainen', name:"WORKOUTS"}
    const rightLink={active:false, url:'/Planning', name:"PLANNING"}

    /* Returning the HTML of the page. */
    return (
        <div>
            <TopNav/>

            <div className="pageTitleContainer">
            <Heading1 text="TRAINEN" />
            </div>

            <CategorySelector leftLink={leftLink} rightLink={rightLink}/>

       
            <a href="/Krachttraining">
            <BigButton>
                <h2>KRACHTTRAINING</h2>
                <p>Bouw meer spiermassa met de krachttraining workouts</p>
                {/* <img className='img' src="/assets/images/cardio.svg" alt="" /> */}
            </BigButton>
            </a>

            <a href="/Cardio">
            <BigButton>
            <h2>CARDIO</h2>
            <p>Verbeter je conditie met onze cardio-workouts</p>
            </BigButton>
            </a>

            <a href="/Yoga">
            <BigButton>
            <h2>YOGA</h2>
            <p>Yoga helpt je om bewuster te worden van je lichaam en je lichaamshouding hiermee te verbeteren</p>
            </BigButton>
            </a>
            </div>
     
    )
}

// Exporting the function to make it accesible from other files
export default Trainen;
