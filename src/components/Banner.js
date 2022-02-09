import React from "react";
import "./Banner.css";
import { useNavigate } from 'react-router-dom';

import bannerMoviesList from "../movie/bannerMoviesList.json";

function Banner() {
  const navigate = useNavigate();

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div>
      {bannerMoviesList.map((data) => {
        return (
          <header key={data}
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${data.bannerImage})`,
            }}
          >
            <div key={data} className="banner_contents">
              <h1 className="banner_title">{data.name}</h1>
              <h1 className="banner_description">
                {truncate(data.description, 105)}
              </h1>
              <div className="banner_buttons">
                <button className="banner_button" onClick={() => navigate('./movieinfo')}>Play</button>
              </div>
            </div>

            <div className="banner-fadeBottom" />
          </header>
        );
      })}
    </div>
  );
}

export default Banner;
