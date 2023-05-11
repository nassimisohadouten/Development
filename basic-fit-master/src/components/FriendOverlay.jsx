import React, {useState, useEffect} from "react";
import { Heading1 } from "../components/Titles";
import { Heading1White } from "../components/Titles";
import '../style/components/FriendOverlay.scss';
import { Outlet, useNavigate, Link } from "react-router-dom";

function FriendOverlay({id}) {
    const [style, setStyle] = useState("Overlay");
    const changeStyle = () => {
        document.querySelector(`.friendoverlay-${id}`).click()
    };

    return (
    <div className={style}>
        <div className="TopWhite"></div>
        <div className="HeaderContainer2">
            <div className="IconContainer">
            <button className="button" onClick={changeStyle}> <span className="HeadIcon"><img src="/assets/images/return-2.svg" alt="" /></span></button>
            </div>
            <div className="OverlayTxt">
            <Heading1White text="Wouter"/>
            </div>
            <div className="white"></div>
        </div>
        <div className="overlayWhite"></div>
        <div className="btnContainer">
            <button className="overlayBtn">Daag Uit</button>
        </div>
        <div className="btnContainer">
            <button className="overlayBtn">Bekijk Profiel</button>
        </div>
        <div className="btnContainer">
            <button className="overlayBtn2">Verwijder</button>
        </div>
    </div>
)}

export default FriendOverlay