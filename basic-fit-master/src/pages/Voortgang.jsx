// Import needed packages
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategorySelector from "../components/CategorySelector";
import { Heading1, Heading2 } from "../components/Titles";
import TopNavP from "../components/TopNavP";
import { ProgressCircle } from "../components/ProgressBar";

import "../style/pages/Voortgang.scss"

// Function that returns the HTML of the page
const Voortgang = () => {
    const [Progress, setProgress] = useState([])
    useEffect(() => {
        progress()
    }, [])

    // Fill a variable with data that later should be filled with data from the database
    const progress = async () => {
        setProgress(
            {
                name: "Marko",
                nickname: "Marko1998"
            }
        )
    }

    const navigate = useNavigate();

    return (
        <div className="ProgressPage">
            <TopNavP/>
            <div className="profile-header">
                <button className="button" onClick={() => navigate (-1) }> <span className="icon"><img src="/assets/images/return.svg" alt="" /></span></button>
                <div className="profile-name">
                    <Heading1 text={Progress.name}></Heading1>
                    <p>{Progress.nickname}</p>
                </div>
            </div>
            <div className="container">
                <Heading2 text="Statistieken"></Heading2>
            </div>
            <CategorySelector leftLink={{active: false, url: "/voortgang/recent", name: "Recent"}} rightLink={{active: true, url: "/voortgang", name: "Overzicht"}}></CategorySelector>
            <div className="container">
                <div className="statistic-container">
                    <div className="left">
                        <p className="statistic-title">Gewicht</p>
                        <strong>81</strong>
                        <p>kg</p>
                    </div>
                    <div className="right">
                        <img src="/assets/images/chart-gradient.svg" alt="Graph" />
                    </div>
                </div>
                <div className="statistic-container">
                    <div className="left">
                        <p className="statistic-title">Verbrande calorieën</p>
                        <strong>927</strong>
                        <p>Kcal</p>
                    </div>
                    <div className="right">
                        <img src="/assets/images/bars.svg" alt="Calorie bars" />
                    </div>
                </div>
                <div className="level-container">
                    <h2>Level 21</h2>
                    <p>Nog 46 punten te behalen voor level 22</p>
                    <ProgressCircle progress={54} progressTotal={100} text=""></ProgressCircle>
                </div>
                <div className="statistic-container">
                    <div className="left">
                        <p className="statistic-title">Voortgang</p>
                        <strong>11K</strong>
                        <p>Xp</p>
                    </div>
                    <div className="right">
                        <img src="/assets/images/bars-multicolor.svg" alt="Progress bars" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default Voortgang;