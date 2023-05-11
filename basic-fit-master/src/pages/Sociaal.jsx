// Import needed packages
import React, {useState, useEffect} from "react";
import TopNav from "../components/TopNavP";
import { Heading1 } from "../components/Titles";
import '../style/pages/Sociaal.scss';
import { Outlet, useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import Friend from "../components/Friend";
import FriendOverlay from "../components/FriendOverlay";


// Function that returns the HTML of the page
const Sociaal = () => {
    const [friend, setFriends] = useState([])
    useEffect(() => {
        friendList()
    }, [])

    const friendList = async () => {
        setFriends([
            {
                id: 1,
                name: 'Wouter',
                username: 'wouter123',
                status: 'Online',
                activity: ''
            },
            {
                id: 2,
                name: 'Julian',
                username: 'bigBicep',
                status: 'Online',
                activity: ''
            },
            {
                id: 3,
                name: 'Kelly',
                username: 'kel.ly',
                status: 'Busy',
                activity: 'Bezig met Bicep Curls'
            },
            {
                id: 4,
                name: 'Ertan',
                username: 'BicepErtan',
                status: 'Busy',
                activity: 'Bezig met Push-Ups'
            },
            {
                id: 5,
                name: 'Daan',
                username: 'DaanDaan',
                status: 'Busy',
                activity: 'Bezig met Bicep Curls'
            },
            {
                id: 6,
                name: 'Jorian',
                username: 'Jorioe',
                status: 'Busy',
                activity: 'Bezig met Push-Ups'
            },
            {
                id: 7,
                name: 'Tygo',
                username: 'tygo.T',
                status: 'Offline',
                activity: ''
            },
            {
                id: 8,
                name: 'Youssef',
                username: 'Yusuuf',
                status: 'Offline',
                activity: ''
            },
            {
                id: 9,
                name: 'Frans',
                username: 'Fransjee_Gym',
                status: 'Offline',
                activity: ''
            },
            {
                id: 10,
                name: 'Marko',
                username: 'Primarko',
                status: 'Offline',
                activity: ''
            }
        ])
    }
    const navigate = useNavigate();
    return (
        <div>
            <TopNav/>
            {/* <FriendOverlay/> */}
            <div className="HeaderContainer">
                <div className="IconContainer">
                <button className="button" onClick={() => navigate (-1) }> <span className="HeadIcon"><img src="/assets/images/return-2.svg" alt="" /></span></button>
                </div>
                <div className="HeaderTxt">
                    <Heading1 text="Vrienden"/>
                </div>
                <div className="white"></div>
            </div>
            <div className="SearchContainer">
                <div className="white2"></div>
                <InputField placeholder="ZOEK OF VOEG VRIENDEN"/>
            </div>
            <div className="FriendsContainer1">
                <Friend name="Pieter" username="p.vdg98" status="Pending" activity=""/>
                <Friend name="Olivia" username="olivia_x" status="Pending" activity=""/>
                <Friend name="Thomas" username="tdl.01" status="Pending" activity=""/>
            </div>
            <div className="FriendsContainer2">
            {friend.map((data) => {
                return (
                    <Friend key={data.id} name={data.name} username={data.username} status={data.status} activity={data.activity} id={data.id}/>
                )
            })}
            </div>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default Sociaal;