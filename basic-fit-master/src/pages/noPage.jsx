// Import needed packages
import React from "react";
import TopNav from "../components/TopNav";


// Function that returns the HTML of the page
const NoPage = () => {
    return (
        <div><TopNav/>
        <h1>Are you lost?</h1>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default NoPage;