// Import needed packages
import React from "react";
import SmallButton from "../components/SmallButton";
import TopNav from "../components/TopNav";
import { Heading1 } from "../components/Titles";
import Labels from "../components/Labels"
import '../style/pages/WorkoutsDetails.scss'

// Function that returns the HTML of the page
const YogaA = () => {
    return (
        <div>
        <TopNav/>
        <div className='title'>
        <Heading1 text="YOGA"/>
        </div>
        <div className='Label'>
        <Labels className="label" color='orange' text='Intermediate'/>
        </div>
        <div className="SmallButtonsPage">
            <a href="/Bewegings-feedback">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

<a href="">
<SmallButton>
<p>Squats</p>
</SmallButton>
</a>

    </div>
    </div>
    )
}

// Exporting the function to make it accesible from other files
export default YogaA;
