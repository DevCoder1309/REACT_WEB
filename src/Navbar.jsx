import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './All.css';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [navbarOffset, setNavbarOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const homeHeight = document.getElementById('home').offsetHeight;

            if (scrollPosition > homeHeight - navbarOffset) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        const handleResize = () => {
            setNavbarOffset(document.getElementById('navbar').offsetHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [navbarOffset]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

     const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="navbar" className={isSticky ? 'sticky' : ''}>
            <a className="active" href="#home" onClick={scrollToTop}>Home</a>
            <a href="#about" onClick={scrollToAbout} className='red'>About</a>
            <a href="#contact" className='green' onClick={scrollToContact}>Contact</a>
        </div>
    );
}

export default Navbar;
