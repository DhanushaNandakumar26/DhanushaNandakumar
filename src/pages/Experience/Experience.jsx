import React from 'react';
import './Experience.css';
import lady from '../../assets/dhanusha2.jpg'
import ExperienceSidebar from '../../components/ExperienceSidebar/ExperienceSidebar';
import Navbar from '../../components/Navbar/Navbar';

const Experience = () => {
    return (
        <div className='experienceMain'>
            <Navbar />
            <div className='experienceLeftContainer'>
                <img src={lady} alt='' className='' />
            </div>
            <div className='experienceRightContainer'>
                <ExperienceSidebar />
            </div>
        </div>
    )
}

export default Experience