import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/Destination.css'
import Navbar from './Navbar';
import Planet from './Planet';
import Transition from './Transition';
import moonTexture from '../assets/destination/moon_texture.jpg';
import marsTexture from '../assets/destination/mars_texture.jpg';
import europaTexture from '../assets/destination/europa_texture.jpg';
import titanTexture from '../assets/destination/titan_texture.png';
import data from '../assets/data.json';

const Destination = () => {
    const [planet, setPlanet] = useState('Moon');

    return (
        <section className='destination__page'>
            <Navbar />
            <h1 className='destination'><span className='destination__number'>01</span> Pick your destination</h1>
            <section className='destinations'>
                <Planet texture={planet === 'Moon' ? moonTexture : planet === 'Mars' ? marsTexture : planet === 'Europa' ? europaTexture: titanTexture} />
                <div>
                    <ul className="destinations__list">
                        <li><a href='#' onClick={() => setPlanet('Moon')}>Moon</a></li>
                        <li><a href='#' onClick={() => setPlanet('Mars')}>Mars</a></li>
                        <li><a href='#' onClick={() => setPlanet('Europa')}>Europa</a></li>
                        <li><a href='#' onClick={() => setPlanet('Titan')}>Titan</a></li>   
                    </ul>
                    <h2 className='destinations__planet_title'>{planet === 'Moon' ? data.destinations[0].name : planet === 'Mars' ? data.destinations[1].name : planet === 'Europa' ? data.destinations[2].name : data.destinations[3].name}</h2>
                    <p className='destinations__description'>
                        {planet === 'Moon' ? data.destinations[0].description : planet === 'Mars' ? data.destinations[1].description : planet === 'Europa' ? data.destinations[2].description : data.destinations[3].description}
                    </p>
                    <div className='stats'>
                        <h3 className='stats__titles'>avg. distance</h3>
                        <h3 className='stats__titles'>est. travel time</h3>
                        <p className='stats__values'>{planet === 'Moon' ? data.destinations[0].distance : planet === 'Mars' ? data.destinations[1].distance : planet === 'Europa' ? data.destinations[2].distance : data.destinations[3].distance}</p>
                        <p className="stats__values">{planet === 'Moon' ? data.destinations[0].travel    : planet === 'Mars' ? data.destinations[1].travel  : planet === 'Europa' ? data.destinations[2].travel  : data.destinations[3].travel   }</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Transition(Destination)