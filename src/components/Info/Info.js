import React from 'react';
import Icons from '../UI/Icons/Icons';

const Info = (props) => (
    <section className = "section-info">
        <div className = "info__container">
            <h3 className = "heading--2 info__heading">Contact</h3>
            <p className = "info__paragraph">
                <span className = "info__paragraph__span">(+234)-802-303-8210</span>
                <span className = "info__paragraph__span">(+234)-809-808-2468</span>
            </p>
            <p className = "info__paragraph">felseyven@gmail.com</p>
        </div>

        <div className = "info__container">
            <h3 className = "heading--2 info__heading">Address</h3>
            <p className = "info__paragraph">
                <span className = "info__paragraph__span">8, C.A.C Avenue, Irepo Estate,</span>
                <span className = "info__paragraph__span">Ikotun, Lagos, Nigeria.</span>
            </p>
        </div>

        <div className = "info__container">
            <h3 className = "heading--2 info__heading">Office Hours</h3>
            <p className = "info__paragraph">
                <span className = "info__paragraph__span">Monday - Friday</span>
                <span className = "info__paragraph__span">8:30am - 5:30pm</span>
            </p>
            <p className = "info__paragraph">
                <span className = "info__paragraph__span">Saturday</span>
                <span className = "info__paragraph__span">9am - 1pm</span>
            </p>
        </div>
        
        <div className = "info__container">
            <h3 className = "heading--2 info__heading">Catering Hours</h3>
            <p className = "info__paragraph">
                <span className = "info__paragraph__span">24 hours a day, 7 days a week</span>
            </p>
        </div>
        <div className = "info__container">
            <h3 className = "heading--2 info__heading">Follow Us</h3>
            <div className = "info__icons-box">
                <Icons icon = "facebook" className = "info__icon info__icon--facebook" svgClass = "info__icon-svg" />
                <Icons icon = "instagram" className = "info__icon info__icon--instagram" svgClass = "info__icon-svg" />
                <Icons icon = "twitter" className = "info__icon info__icon--twitter" svgClass = "info__icon-svg" />
            </div>
        </div>
    </section>
);

export default Info;