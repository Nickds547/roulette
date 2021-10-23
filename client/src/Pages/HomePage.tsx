import React from 'react';
import "../styles/HomePage.css";

import * as Componentes from '../Components/index';

const HomePage = () =>{

    return (
        <>
        <div className="hompage-container">
            <Componentes.RouletteWheel/>
            <Componentes.ButtonTable/>
        </div>
        </>
    )
}

export default HomePage;