import React from 'react';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import "./HomeScreen.css";



function HomeScreen() {
  return <div className='homeScreen'>
      <Nav />
      
      <Banner />

      {/* Movie Row */}
  </div>;
}

export default HomeScreen;
