import React from 'react';

const Process = (props) => (
    <div className = "process__card">
        <h1 className = "process__card__number heading--1">{props.number}</h1>
        <div className = "process__card__content">
            <h2 className = "process__card__heading heading--2">{props.heading}</h2>
            <p className = "process__card__paragraph">{props.children}</p>
        </div>
    </div>
);

export default Process;