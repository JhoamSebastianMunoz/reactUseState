import React from 'react'
import { NavItem } from '../NavItem/NavItem';
import '../Navbar/Navbar.css'

export const Navbar = () => {
    return (
    <ul className='ulNavbar'>
        <NavItem to='/' content='Ejercicio 1'></NavItem>
        <NavItem to='/Ejercicio2' content='Ejercicio 2'></NavItem>
        <NavItem to='/Ejercicio3' content='Ejercicio 3'></NavItem>
        <NavItem to='/Ejercicio4' content='Ejercicio 4'></NavItem>
        <NavItem to='/Ejercicio5' content='Ejercicio 5'></NavItem>
    </ul>
    );
};


