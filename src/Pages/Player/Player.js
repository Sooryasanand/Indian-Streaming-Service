import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import Nav from "../../components/Nav.js";

import MovieInfos from '../../movie/MoviesList.json';

import "./Player.css";

function Player() {
  let { id } = useParams();

  console.log(MovieInfos[id].url)


  return (
    <div onContextMenu={e => e.preventDefault()} className="reactPlayer">
      <Nav />
      <ReactPlayer
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        playIcon={true}
        url={MovieInfos[id].url}
      />
    </div>
  );
}

export default Player;
