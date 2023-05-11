// Import needed packages
import React from "react";
import { Link } from "react-router-dom";
import { ProgressCircle } from "../components/ProgressBar";
import { Heading1, Heading2 } from "../components/Titles";
import TopNavP from "../components/TopNavP";
import Labels from "../components/Labels"

import "../style/pages/Home.scss"
import { HomepageItem } from "../components/homepageItem";

// Function that returns the HTML of the page
const Home = () => {
    return (
        
        <div className="HomePage">
            <TopNavP/>
            <div className="pageTitleContainer">
                <Heading1 text="Dagelijks Doel"/>
            </div>
            <div className="container">
                <ProgressCircle progress={8} progressTotal={10} text={'Voltooid'}/>
                <div className="dayLabels">
                    <Labels text="Maandag" color={"black"}/>
                    <Labels text="Donderdag"/>
                    <Labels text="Zaterdag" color={"black"}/>
                </div>

                <div className="planning">
                    <Heading2 text="Planning"/>
                    <div className="home-category-nav">
                        <p>Donderdag</p>
                        <Link to={'/'}>Zie meer</Link>
                    </div>
                    <div className="home-category-list">
                        <HomepageItem image='https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Upper body'
                        url='/trainen'/>
                        <HomepageItem image='https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Cardio'
                        url='/trainen'/>
                        <HomepageItem image='https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Core strength'
                        url='/trainen'/>
                    </div>
                </div>
                <div className="challenges">
                    <Heading2 text="Challenges"/>
                    <div className="home-category-nav">
                        <p>Donderdag</p>
                        <Link to={'/'}>Zie meer</Link>
                    </div>
                    <div className="home-category-list">
                    <HomepageItem image='https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Build muscle'
                        url='/challenges/3'/>
                        <HomepageItem image='https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Build cardio'
                        url='/challenges/2'/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

// Exporting the function to make it accesible from other files
export default Home;