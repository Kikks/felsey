import React from 'react';
import Icon from '../../UI/Icons/Icons';

const AboutCard =(props) => (
    <div className = "about-card">
        <Icon icon = {props.icon} className = "about-card__icon" />
        <h3 className = "heading--3 about-card__heading">{props.heading}</h3>
        <p className = "about-card__paragraph">{props.paragraph}</p>
    </div>
);

export default AboutCard;