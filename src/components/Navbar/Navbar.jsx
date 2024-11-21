import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Dhanusha-Nandakumar.pdf'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand"></div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/experience" className="navbar-link">Profile</Link>
                </li>
                <li className="navbar-item">

                    <a href={Resume} className="navbar-link" download="Dhanusha_Nandakumar.pdf">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
