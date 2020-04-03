import React from 'react';
import Input from '../UI/Input/Input';

const ContactForm = (props) => (
    <section className = "section-contact-form">
        <form className = "contact__form" onSubmit = {props.submit}>
            <p className = "contact__paragraph">
                Can't find what you are looking for?
                <span className = "contact__span">If you are planning an event, please use our Bookings form on the "Bookings" page.</span>
                <span className = "contact__span">For all other matters inquire here, just fill out the form below and we will get back to you as soon as possible</span>
            </p>

            <div className = "contact__form-inputs">
                <Input inputType = "text" className = "contact__form-input--text" required = {true }placeholder = "Name"  changed = {props.nameChanged} value = {props.name} />
                <Input inputType = "email" className = "contact__form-input--text" required = {true }placeholder = "E-mail"  changed = {props.emailChanged} value = {props.email} />
                <Input inputType = "textarea" className = "contact__form-input--textarea" requried = {true} rows = "6" placeholder = "Your message"  changed = {props.messageChanged} value = {props.message} />
                <button className = "btn btn--primary contact__form-button">Submit</button>
            </div>
        </form>
    </section>
);

export default ContactForm;