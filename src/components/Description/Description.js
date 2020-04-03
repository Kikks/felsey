import React from 'react';
import { Link } from 'react-router-dom';

const Description = (props) => (
    <section className="section-description">
        <div className="description">
            <h1 className="heading--1  description__heading">Who We Are</h1>
            <p className="description__paragraph">Felsey Ventures is a full service special event catering, management and planning company in Lagos, Nigeria - commited to providing uncompromised quality, impressive presentation and attention to the smallest details.</p>
            <Link to = "/about" className = "description__link btn--link">Read Our Story</Link>
        </div>    
    </section>
);

export default Description;