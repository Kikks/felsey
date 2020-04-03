import React from 'react';
import Process from './Process/Process';



const Processes = (props) => (
    <section className = "section-process">
        <h1 className="heading--1 process__heading">The Process</h1>
        <p className="process__paragraph">Having your special moments and events catered for hasn't been easier than this simple process:</p>
        <div className = "process__container">
            <Process number = "01" heading = "Contact Us">Get in touch with us and we would love to know how we can help you.</Process>
            <Process number = "02" heading = "Event Details">Given the details, we will help you make necessary preparations.</Process>
            <Process number = "03" heading = "Delivery">We will be there to impress you and your guests at your event.</Process>
            <Process number = "04" heading = "Enjoy">Finally! You get to enjoy our services and a first class experience.</Process>
        </div>
    </section>
);

export default Processes;