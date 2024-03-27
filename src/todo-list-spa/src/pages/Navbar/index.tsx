import React from 'react';

import './styles.css';

export const Navbar: React.FC = () => {
    return (
        <div className="container blue circleBehind">
            <a>HOME</a>
            <a>ARTICLES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
        </div>
    );
};
