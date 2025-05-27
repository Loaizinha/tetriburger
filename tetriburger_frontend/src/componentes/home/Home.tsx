import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";
import Navegador from '../Navegador';

export default function Home() {
    return (
        <>
            <Navegador  />
            <div className="home-container">
                <div className="home-content">
                    <h1>¡Bienvenido a <span className="brand">TetrisBurger</span>!</h1>
                    <p>Combina sabor y diversión. Hamburguesas que encajan con vos 🍔🧩</p>
                    <Link to="/menu" className="btn-ver-menu">Ver Menú</Link>
                </div>
            </div>
        </>
    );
}

