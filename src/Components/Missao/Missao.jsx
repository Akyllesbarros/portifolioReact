import React from 'react';
import './missao.css';
import img from '../../Images/seta.png'
export default function Missao() {
    return (
        <>
            <div className='missao'>
                <hr/>
                <h3>Eu faço isso e isso, e isso além daquilo, e as vezes isso.</h3>
                <img src={img} alt="" />
                <h4>PORTIFÓLIO</h4>
            </div>
        </>
    );
}