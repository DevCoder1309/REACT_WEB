import React from 'react';
import Home from './UpperBody';
import About from './About';
import Contact from './Contacts';
import Footer from './Footer';

const App = () => {
    return (
        <div className="app-container">
            <Home />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
