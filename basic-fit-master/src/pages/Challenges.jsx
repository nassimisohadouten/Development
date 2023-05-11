// Import needed packages
import React, { useState, useEffect } from "react";
import Challenge from "../components/Challenge";
import { Heading1 } from "../components/Titles";
import TopNav from "../components/TopNavP";
import "../style/pages/ChallengePage.scss"

// Function that returns the HTML of the page
const Challenges = () => {
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
                progressTotal: "5"
            },
            {
                id: 2,
                image: 'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'Build cardio challenge',
                description: 'Doe 10 oefeningen om conditie te trainen',
                progress: "4",
                progressTotal: "5"
            }
        ])
    }

    // Return html
    return (
        <div>
            <TopNav/>
            <div className="pageTitleContainer">
                <Heading1 text="Challenges"/>
            </div>
            {challenge.map((data) => {
                return (
                    <Challenge key={data.id}
                    link={`/challenges/${data.id}`}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    progress={data.progress}
                    progressTotal={data.progressTotal}/>
                )
            })}
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default Challenges;