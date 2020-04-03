import React from 'react';
import {Link} from 'react-router-dom';

const Event = (props) => (
    <div className = "event__box">
        <img className = "event__img" src = {props.source} alt = "event" />
        <div className = "event__content">
            <h3 className = "heading--3 event__heading">{props.heading}</h3>
            <p className = "event__description">{props.children}</p>
            <Link to = "/bookings" className = "btn btn--white event__btn">Book Now!</Link>
        </div>
    </div>
);

export default Event;