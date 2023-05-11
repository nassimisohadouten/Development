// Import needed packages
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Challenge from "../components/Challenge";
import { Heading1 } from "../components/Titles";
import TopNav from "../components/TopNav";

import '../style/pages/ChallengeDetails.scss'

// Function that returns the HTML of the page
const ChallengeDetail = () => {
    // Id retrieved from the url (should later be used to find the data in the database for the corresponding challenge)
    const params = useParams()
    const challengeId = params.id

    const [challengeDetails, setChallenge] = useState([])
    useEffect(() => {
        challenge()
    }, [])

    // Fill a variable with data that later should be filled with data from the database
    const challenge = async () => {
        setChallenge([
            {
                id: '2',
                image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'Build muscle challenge',
                description: 'Train your muscles',
                descriptionLong: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, expedita culpa id fugiat optio debitis, modi consequatur inventore animi laudantium veniam amet suscipit facere omnis minus, nobis rem officiis error?',
                challenges: [
                    {
                        id: "1",
                        completed: true,
                        title: "Doe minimaal 5 workouts in een week",
                    },
                    {
                        id: "2",
                        completed: true,
                        title: "Doe 30 push-ups in een week",
                    },
                    {
                        id: "3",
                        completed: false,
                        title: "Daag een vriend uit voor een krachttraining oefening",
                    }
                ]
            }
        ])
    }

    // Return the html
    return (
        <div className="ChallengeDetailPage">
            <TopNav/>
            {challengeDetails.map((data) => {
                return (
                    <div key={data.id}>
                        <Heading1 text="Challenge"></Heading1>
                        <Challenge image={data.image} title={data.title} description={data.description}/>
                        <div className={`ChallengeDetails`}>
                            <p>{data.descriptionLong}</p>
                            <ul>
                                {data.challenges.map((challenge) => {
                                    return(
                                        <li key={challenge.id} className={challenge.completed ? 'completed' : 'open'}>
                                            <span className="icon">{challenge.completed ? <img src="/assets/images/check.svg" alt="Completed"/> : <img src="/assets/images/lock.svg" alt="Open"/>}</span>
                                            <span>{challenge.title}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default ChallengeDetail;