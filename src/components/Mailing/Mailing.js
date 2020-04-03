import React, { Component } from 'react';
import axios from 'axios';
import {ReactComponent as Telegram} from '../../assets/img/SVG/telegram.svg';
import {ReactComponent as Reading} from '../../assets/img/SVG/reading.svg';
import Auxilliary from '../../hoc/Auxiliary/Auxilliary';


class Mailing extends Component{
    state = {
       email: "",
       submitted: false
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('https://felseyventures.firebaseio.com/mailing_list.json', this.state.email).then(response => {
            console.log(this.state.email);
            this.setState({submitted: true});
        }).catch(error => {
            alert('There was an error while attempting to join the mailing list. Please try again');
        }) 
    }

    inputChangedHanler = (event) => {
        const newstate = { ...this.state};
        newstate.email = event.target.value;
        this.setState({email: newstate});
    }

    render(){

        let form = null;

        if(this.state.submitted){
            form = (
                   <p className="mailing__paragraph mailing__paragraph--submitted"> Awesome! Now, make sure you check your e-mail regularly to get the loads of info about our exclusive deals and offers.</p>
            );
        }else{
            form = (
                <Auxilliary>
                    <p className="mailing__paragraph">Do you want to get the latest info on exclusive deals and offers? If you do, kindly subscribe to our mailing list by filling in your e-mail address below!</p>
                    <form className = "mailing__form" onSubmit = {this.onSubmitHandler}>
                        <input className = "mailing__form-input" placeholder = "Your email address" type = "email"  onChange = {(event) => {this.inputChangedHanler(event)}} />
                        <button className = "mailing__form-button" ><Telegram className ="mailing__form-svg" /></button>
                    </form>
                </Auxilliary>
            );
        };

        return(
            <section className = "section-mailing">
                <div className="m-container">
                    <div className = "mailing">
                        <h1 className = "heading--1 mailing__heading">Mailing</h1>
                        {form}
                    </div>

                    <div className="svg-box">
                        <Reading className = "svg-icon" />
                    </div>
                </div>
            </section>
        );
    }

};

export default Mailing;