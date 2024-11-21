import React from 'react';
import './Overview.css';
import ladyPic from '../../assets/dhanusha.jpg';
import ProfessionalBackground from '../ProfessionalBackground/ProfessionalBackground';

const Overview = () => {
    return (
        <div className='overviewMain'>
            <div className='overviewLeftContainer'>
                <ProfessionalBackground />
            </div>
            <section id="overviewRightContainer" className="overviewRightContainer">
                <div className='overViewImageContainer'>
                    <img src={ladyPic} alt='' />
                </div>
            </section>

        </div>
    )
}

export default Overview