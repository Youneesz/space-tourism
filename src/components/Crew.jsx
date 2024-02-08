import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import Transition from './Transition'
import '../styles/Crew.css'
import data from '../assets/data.json'

const Crew = () => {
    const [person, setPerson] = useState('Douglas');

    return (
        <>
            <Navbar />
            <h1 className='crew_title'><span className='crew_title--number'>02</span> Meet your crew</h1>
            <motion.main className='crew'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}>
                <article className='crew_profile'>
                    <h2 className="crew_profile__role">{data.crew.map((x) => x.name.includes(person) ? x.role : '')}</h2>
                    <h3 className="crew_profile__name">{data.crew.map((x) => x.name.includes(person) ? x.name : '')}</h3>
                    <p className="crew_profile__description">
                        {data.crew.map((x) => x.name.includes(person) ? x.bio : '')}
                    </p>
                    <ul className='indicators'>
                        <li className={person === 'Douglas' ? 'indicators__dot indicators__dot--active' : 'indicators__dot'} onClick={() => setPerson('Douglas')}></li>
                        <li className={person === 'Mark' ? 'indicators__dot indicators__dot--active' : 'indicators__dot'} onClick={() => setPerson('Mark')}></li>
                        <li className={person === 'Victor' ? 'indicators__dot indicators__dot--active' : 'indicators__dot'} onClick={() => setPerson('Victor')}></li>
                        <li className={person === 'Anousheh' ? 'indicators__dot indicators__dot--active' : 'indicators__dot'} onClick={() => setPerson('Anousheh')}></li>
                    </ul>
                </article>
                <img className='crew__image' src={person === 'Douglas' ? douglas : person === 'Mark' ? mark : person === 'Victor' ? victor : anousheh} alt="douglas hurley" />
            </motion.main>
        </>
    )
}

export default Transition(Crew)