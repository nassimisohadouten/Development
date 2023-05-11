// Import needed packages
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategorySelector from "../components/CategorySelector";
import { Heading1, Heading2 } from "../components/Titles";
import TopNavP from "../components/TopNavP";
import Challenge from "../components/Challenge";

import "../style/pages/VoortgangRecent.scss"

// Function that returns the HTML of the page
const VoortgangRecent = () => {
    const [challenge, setChallenges] = useState([])
    useEffect(() => {
        challenges()
    }, [])

    // Fill a variable with data that later should be filled with data from the database
    const challenges = async () => {
        setChallenges([
            {
                id: 4,
                image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'Build muscle challenge',
                description: 'Doe 5 oefeningen om kracht te trainen',
                progress: "2",
                progressTotal: "5",
                completed: true
            },
            {
                id: 2,
                image: 'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'Build cardio challenge',
                description: 'Doe 10 oefeningen om conditie te trainen',
                progress: "4",
                progressTotal: "5",
                completed: true
            }
        ])
    }

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
        <div className="ProgressPageRecent">
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
            <CategorySelector leftLink={{active: true, url: "/voortgang/recent", name: "Recent"}} rightLink={{active: false, url: "/voortgang", name: "Overzicht"}}></CategorySelector>
            <div className="">
                {challenge.map((data) => {
                    return (
                        <div key={data.id} className={`challenge-container ${data.completed ? 'completed' : 'not-completed'}`}>
                            <p>{data.completed ? 'Behaald' : 'Nog niet behaald'}</p>
                            <Challenge link={`/challenges/${data.id}`}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            progress={data.progress}
                            progressTotal={data.progressTotal}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default VoortgangRecent;