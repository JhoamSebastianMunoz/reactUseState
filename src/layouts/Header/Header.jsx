import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import '../Header/Header.css'
import logo from '../../assets/GATO1-1.gif'

export const Header = () => {
    return (
    <header className='header'>
        <Navbar/>
        <img className='img-logo' src={logo} alt="logo" />
    </header>
    );
};


