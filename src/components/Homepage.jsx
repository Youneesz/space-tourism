import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Navbar from './Navbar'
import Transition from './Transition';
import '../styles/Homepage.css';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <h1 className="main__title">Space</h1>
                <h2 className="main__subtitle">So, you want to travel to</h2>
                <p className="main__description">
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
                <div className="main__explore">
                    <Link to="/destination">Explore</Link>
                </div>
            </main>
        </>
    )
}

export default Transition(Homepage)