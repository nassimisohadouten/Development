import React, {useState} from "react";
import '../style/components/Friend.scss'
import FriendOverlay from "../components/FriendOverlay";

//functie die de status van de vriend weergeeft
//de functie controleert of de status van de vriend "Pending" is
//als de status pending is, dan wordt er een accepteer knop weergegeven
//als de status Busy is, dan wordt er de activiteit weergegeven
//als de staus online is, dan wordt er online weergegeven

function Friend({name, status, id, username, activity=""}) {
  const [toggle, setToggle] = useState(false)
  if (status == "Pending") {
    return (
      <div className="FriendContainer">
        <div className="DisplayStatus">
          <span className={`Status ${status}`}>&#9899;</span>
        </div>
        <div className="Friend">
          <h1 className="FriendName">{name}</h1>
          <h5 className="StatusTxt">{username}</h5>
        </div>
        <div className="Options">
          <button className="AcceptButton">Accepteer</button>
          <img id="afwIcon" src="/assets/images/afwijzen.svg" alt="" />
        </div>
      </div>
    )
  }
  else {
    return (
        <div className="FriendContainer">
          <div className="DisplayStatus">
            <span className={`Status ${status}`}>&#9899;</span>
          </div>
          <div className="Friend">
            <h1 className="FriendName">{name}</h1>
            <h5 className="StatusTxt">{status=="Busy"?activity:status}</h5>
          </div>
          <div className="Options">
          <img id="optIcon" className={`friendoverlay-${id}`} src="/assets/images/opties.svg" alt="" onClick={() => setToggle(!toggle)} />
          {toggle && (
            <FriendOverlay id={id}/>
            // <p>huts</p>
      )}
          </div>
        </div>
    )
  }
}

export default Friend