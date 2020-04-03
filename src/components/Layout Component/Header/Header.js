import React from 'react';
import {Link} from 'react-router-dom';



const Header = (props) => (
    <header className = "header">
        <div className = "header__wrapper">
            <div className = "header__content">
                <h1 className = "heading--1 header__h1"> Welcome to <span className = "header__span">Felsey Ventures</span> </h1>
                <p className = "paragraph header__paragraph"> ...your Catering Team for all occasions!</p>
                <div className = "header__buttons-container">
                    <Link to = "/contact" className = "btn btn--primary header__btn">Contact Us</Link>
                    <a href = "#section-events" className = "btn btn--transluscent header__btn">Our Services</a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;