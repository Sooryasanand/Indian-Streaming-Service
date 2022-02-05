import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Row.css';

import MoviesList from '../movie/MoviesList.json';

function Row({title}) {
  const navigate = useNavigate();

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row_posters'>
        {MoviesList.map((data) => (
          <img className='row_poster' key={data.id} src={data.posterImage} alt={data.name} onClick={() => navigate('./movieinfo')}/>
        ))}
      </div>
    </div>

  )
}

export default Row;
