import React, { useEffect, useState } from 'react';
import './About.css';
import './All.css';

const About = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const image = document.querySelector('.about-image');
    const cards = document.querySelectorAll('.card');

    const fadeInUp = () => {
      const imageRect = image.getBoundingClientRect();
      if (scrollDirection === 'down') {
        if (imageRect.top < window.innerHeight && imageRect.bottom >= 0) {
          image.classList.add('fade-in-up');
          image.classList.remove('fade-in-bottom');
        } else {
          image.classList.remove('fade-in-up');
          image.classList.add('fade-in-bottom');
        }

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            card.classList.add('fade-in-up');
            card.classList.remove('fade-in-bottom');
          } else {
            card.classList.remove('fade-in-up');
            card.classList.add('fade-in-bottom');
          }
        });
      } else {
        if (imageRect.top < window.innerHeight && imageRect.bottom >= 0) {
          image.classList.add('fade-in-bottom');
          image.classList.remove('fade-in-up');
        } else {
          image.classList.remove('fade-in-bottom');
          image.classList.add('fade-in-up');
        }

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            card.classList.add('fade-in-bottom');
            card.classList.remove('fade-in-up');
          } else {
            card.classList.remove('fade-in-bottom');
            card.classList.add('fade-in-up');
          }
        });
      }
    };

    const scrollHandler = () => {
      const scrollY = window.scrollY;
      if (scrollY > (window.lastScroll || 0)) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      window.lastScroll = scrollY;
      fadeInUp();
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []); 

  return (
    <div className="about-container" id="about">
      <img src='gdsc_abt_2.png' alt='' width={700} height={500} className='about-image m-5 p-5' id="img"></img>
      <div className="cards-container">
        <div className="card left-div">
          <h2>Our Events(On Going)</h2>
          <ol>
            <li><a href="#" style={{color: 'white'}}>Workshop on Flutter (Date: 25/03/2024)</a></li>
            <li><a href="#" style={{color: 'white'}}>Hands on session (Date: 26/03/2024)</a></li>
          </ol>
        </div>
        <div className="card left-div">
          <h2>Our Achievements</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam expedita amet dignissimos dolores aspernatur autem. Quasi magni sint eos nisi molestiae unde quis pariatur eaque ad facilis. Fugit, totam.
        </div>
        <div className="card left-div">
          <h2>Our Vision And Motive</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam expedita amet dignissimos dolores aspernatur autem. Quasi magni sint eos nisi molestiae unde quis pariatur eaque ad facilis. Fugit, totam.
        </div>
      </div>
    </div>
  );
}

export default About;
