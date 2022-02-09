import React from 'react';
import { Link } from 'react-router-dom';
import './Row.css';

import MoviesList from '../movie/MoviesList.json';

function Row({title}) {

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row_posters'>
        {MoviesList.map((data) => (
          <Link to={"/movieinfo/" + data.id}>
            <img className='row_poster' key={data.id} src={data.posterImage} alt={data.name}/>
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Row;
