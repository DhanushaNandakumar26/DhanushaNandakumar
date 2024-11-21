import React from 'react';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Overview from '../../components/Overview/Overview';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div>
            <Navbar />
            <div className='contentSectionContainer'>
                <Slider {...settings}>
                    <div>
                        <Banner />
                    </div>
                    <div>
                        <Overview />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Homepage;
