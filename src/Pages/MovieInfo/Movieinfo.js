import React from "react";
import Nav from "../../components/Nav.js";
import { Link, useParams } from "react-router-dom";
import "./Movieinfo.css";

import MovieInfos from '../../movie/MoviesList.json';

function Movieinfo() {
  let { id } = useParams();

  return (
    <header className="movieInfo" key={MovieInfos[id]} 
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${MovieInfos[id].bannerImage})`,
      }}
    >
      <Nav />
      <div style={{display: "flex", flexDirection: "row"}}>
        <div className="movieInfo_info">
          <div className="movieInfo_infotitle">
            <h1>{MovieInfos[id].name}</h1>
          </div>
          <div className="movieInfo_infodiv">
            <h3>{MovieInfos[id].rating}</h3>
            <h3>{MovieInfos[id].year}</h3>
            <h3>{MovieInfos[id].time}</h3>
            <h3>{MovieInfos[id].categories}</h3>
          </div>
          <div className="movieInfo_description">
            <p>{MovieInfos[id].description}</p>
          </div>
          <div className="movieInfo_cast">
            <h9>Cast:</h9>
            <h9 className="movieInfo_casts">{MovieInfos[id].Actor}</h9>
          </div>
          <div className="playButton">
            <Link to={"/player/" + MovieInfos[id].id}>
              <img className="playButton_icon" src="https://streamflexmisc.s3.ap-south-1.amazonaws.com/PlayIcon.png" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Movieinfo;
