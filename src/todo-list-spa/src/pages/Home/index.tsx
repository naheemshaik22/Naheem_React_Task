import React from 'react';

import './styles.css';

import { HomeComponent } from './HomeComponent';
import { Navbar } from '../Navbar';

export const Home: React.FC = () => {
    return (
        <>
            <Navbar></Navbar>
            <HomeComponent></HomeComponent>
        </>
    );
};
