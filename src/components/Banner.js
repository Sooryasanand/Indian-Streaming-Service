import React from 'react';
import './Banner.css';

function Banner() {

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return(
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: 'center center',
    }}>
      <div className='banner_contents'>
        <h1 className='banner_title'>Movie Name</h1>
        <h1 className='banner_description'>{truncate(`This is the description, This is the description, This is the description, This is the description, This is the description, This is the description, This is the description, This is the description, This is the description,`, 100)}</h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
        </div>
      </div>

      <div className='banner-fadeBottom' />
    </header>
  )
}

export default Banner;
