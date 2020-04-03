import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import axios from 'axios';

class BookingForm extends Component {
    state = {
        events: {
            selectOptions: {
                options: [
                    {value: '', displayValue: 'Select Event'},
                    {value: 'birthday', displayValue: 'Birthday Party'},
                    {value: 'marriage', displayValue: 'Marriage'},
                    {value: 'naming ceremony', displayValue: 'Naming Ceremony'},
                    {value: 'burial', displayValue: 'Burial'}
                ]
            }
        },

        bookingForm: {
            name: "",
            email: "",
            phoneNumber: "",
            eventType: "",
            noOfGuests: "",
            date: "",
            location: "",
            details: ""
        },

        submitted: false
    }

    nameChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.name = event.target.value;
        this.setState({bookingForm: newState});
    }

    emailChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.email = event.target.value;
        this.setState({bookingForm: newState});
    }

    numberChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.phoneNumber = event.target.value;
        this.setState({bookingForm: newState});
    }

    eventChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.eventType = event.target.value;
        this.setState({bookingForm: newState});
    }

    guestsChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.noOfGuests = event.target.value;
        this.setState({bookingForm: newState});
    }

    locationChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.location = event.target.value;
        this.setState({bookingForm: newState});
    }

    dateChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.date = event.target.value;
        this.setState({bookingForm: newState});
    }

    detailsChangedHandler = (event) => {
        const newState = {
            ...this.state.bookingForm
        };

        newState.details = event.target.value;
        this.setState({bookingForm: newState});
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('https://felseyventures.firebaseio.com/bookings.json', this.state.bookingForm).then(response => {
            console.log(this.state.bookingForm);
        })
        .catch(error => {
            console.log('there was an error with posting this form!')
        });
        this.setState({submitted: true});
    }

    render(){
        let form = (
            <form className = "booking-form" onSubmit = {this.onSubmitHandler}>
                <h1 className = "heading--1 booking-form__heading">Booking Form</h1>
                <div className = "booking-form__inputs">
                    <Input inputType = "text" className = "booking-form__input" value = {this.state.bookingForm.name} placeholder = 'Full Name' required = {true} changed = {(event) => this.nameChangedHandler(event)}/>
                    <Input inputType = "email" className = "booking-form__input" value = {this.state.bookingForm.email} placeholder = 'E-mail' required = {true} changed = {(event) => this.emailChangedHandler(event)}/>
                    <Input inputType = "text" className = "booking-form__input" value = {this.state.bookingForm.phoneNumber} placeholder = 'Phone Number' required = {true} changed = {(event) => this.numberChangedHandler(event)}/>
                    <Input inputType = "select" className = "booking-form__input booking-form__input--select" optionsClassName = "booking-form__input--options" value = {this.state.bookingForm.details} required = {true} selectOptions = {this.state.events.selectOptions} changed = {(event) => this.eventChangedHandler(event)}/>
                    <Input inputType = "number" className = "booking-form__input" value = {this.state.bookingForm.noOfGuests} placeholder = 'Number of Guests' required = {true} changed = {(event) => this.guestsChangedHandler(event)}/>
                    <Input inputType = "text" className = "booking-form__input" value = {this.state.bookingForm.date} placeholder = 'Event Date' required = {true} changed = {(event) => this.dateChangedHandler(event)}/>
                    <Input inputType = "text" className = "booking-form__input" value = {this.state.bookingForm.location} placeholder = 'Event Location' required = {true} changed = {(event) => this.locationChangedHandler(event)}/>
                    <Input inputType = "textarea" rows = "6" className = "booking-form__input booking-form__input--textarea" value = {this.state.bookingForm.details} placeholder = 'Other details...' changed = {(event) => this.detailsChangedHandler(event)}/>
                </div>
                <button className = "btn btn--primary booking-form__btn" onClick = {this.onSubmitHandler}>Book Now!</button>
            </form>
        );

        if(this.state.submitted){
            form = (
                <div className="booking-form booking-form--submitted">
                    <p className="booking-form__heading booking-form__heading--submitted">
                        Thank you for reaching out to us. We will get back to you very soon!
                    </p>
                </div>
            )
        }

        return (
            <section className = "section-booking-form">
                {form}
            </section>
        );
    }
}

export default BookingForm;