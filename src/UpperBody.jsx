import React, { useRef, useEffect } from 'react';
import './UpperBody.css';
import Navbar from './Navbar';
import './All.css';

const Home = () => {
  const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="home-container mt-2" id="home">
      <div className="logo-container">
        <span className="multicolortext">
          <button id="btn" onClick={scrollToAbout}>View Details</button>
        </span>
      </div>
      <div className="navbar-gap"></div>
      <Navbar />
    </div>
  );
};

export default Home;
