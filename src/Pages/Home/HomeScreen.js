import React from 'react';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import "./HomeScreen.css";
import Row from "../../components/Row.js";

function HomeScreen() {

  return <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row title="Movies" />

  </div>;
}

export default HomeScreen;
