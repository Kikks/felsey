import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxiliary/Auxilliary';
import Hero from '../../components/Hero/Hero';
import BookingForm from '../../components/BookingForm/BookingForm';

class Bookings extends Component{
    render() {
        return(
            <Auxilliary>
                <main className = "bookings">
                   <Hero className = "bookings__hero">Book Your Event</Hero>
                   <BookingForm />
                </main>
            </Auxilliary>
        );
    }
}

export default Bookings;