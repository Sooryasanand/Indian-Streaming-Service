import React from "react";
import Nav from "../../components/Nav";
import "./Movieinfo.css";

import { useNavigate } from 'react-router-dom';

function Movieinfo({name}) {
  const navigate = useNavigate();

  return (
    <header className="movieInfo">
      <Nav />
      <div style={{display: "flex", flexDirection: "row"}}>
        <div className="movieInfo_info">
          <div className="movieInfo_infotitle">
            <h1>Akkare Akkare Akkare</h1>
          </div>
          <div className="movieInfo_infodiv">
            <h3>7.6/10</h3>
            <h3>1990</h3>
            <h3>2h 9m</h3>
            <h3>Comedy/World cinema</h3>
          </div>
          <div className="movieInfo_description">
            <p>CID officers Ramdas and Vijayan set out to the USA to retrieve a priceless gold crown stolen from India. Once there, they manage to crack the case with a pseudonym and a torn piece of cloth as clues.</p>
          </div>
          <div className="movieInfo_cast">
            <h9>Cast:</h9>
            <h9 className="movieInfo_casts">Mohanlal, Sreenivasan, Nedumudi Venu, Mukesh</h9>
          </div>
          <div className="playButton">
            <img className="playButton_icon" onClick={() => navigate('/player')} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4f7.png" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Movieinfo;
