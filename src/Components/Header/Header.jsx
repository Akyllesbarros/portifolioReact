import React from 'react';
import './header.css';
import img from "../../Images/3d-cube.png"

export default function Header() {
    return (

        <header className='header'>
            <img src={img} alt="portifolio" />
        </header>
    );
}
