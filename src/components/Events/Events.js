import React from 'react';
import Event from './Event/Event';

import wedding from '../../assets/img/wedding.jpg';
import social from '../../assets/img/social.jpg';
import corporate from '../../assets/img/corporate.jpg';

const Events = (props) => (
    <section className = "section-events" id = "section-events">
        <div className="event">
            <h1 className = "heading--1 event__title">Events</h1>
            <p className="event__paragraph">We are flexible enough to cater for all types of events which can be briefly summarized under these headings:</p>
            <div className = "event__wrapper">
                <Event heading = "Weddings" source = {wedding}>Make your special day a perfect reflection of you.</Event>
                <Event heading = "Social" source = {social}>Turn life's special moments and occasions into celebrations.</Event>
                <Event heading = "Corporate" source = {corporate}>Amp up your business meetings, receptions and holiday parties.</Event>
            </div>
        </div>
       
    </section>
);

export default Events;