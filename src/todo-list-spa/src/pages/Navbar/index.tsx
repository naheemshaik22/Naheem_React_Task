import React from 'react';

import './styles.css';

export const Navbar: React.FC = () => {
    return (
        <div className="container blue circleBehind">
            <a href='/'>HOME</a>
          
            <a href="https://swio.in/case-studies/" target="_blank">ABOUT</a>
            <a href="https://swio.in/contact-us/" target="_blank" rel="noopener noreferrer">CONTACT</a>
        </div>
    );
};
