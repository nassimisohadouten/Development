// Import needed packages
import React from "react";
import { Link } from "react-router-dom";
import { ProgressCircle } from "../components/ProgressBar";
import { Heading1, Heading2 } from "../components/Titles";
import TopNavP from "../components/TopNavP";
import Labels from "../components/Labels"

import "../style/pages/Home.scss"
import { HomepageItem } from "../components/homepageItem";
import Intro from "../components/Intro";

// Function that returns the HTML of the page
const OverlayPage = () => {
    return (
        
        <Intro />
    )
}

// Exporting the function to make it accesible from other files
export default OverlayPage;