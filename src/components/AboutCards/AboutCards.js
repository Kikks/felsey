import React, { Component } from 'react';
import AboutCard from './AboutCard/AboutCard';

class AboutCards extends Component {
    state = {
        one: {
            icon: "heart",
            heading: "commitment",
            paragraph: "We put our heart and soul into delivering the best services, experiences and products possible. We are not happy unless you are happy. Passion and passionate people drive everything we do."
        },
        
        two: {
            icon: "service",
            heading: "tenacity",
            paragraph: "We work tirelessly for our clients and will never compromise. Our 'can-do' attitude to work and an inherent drive to deliver a memorable experience and not just meals, is what propels us each and every day"
        }, 

        three: {
            icon: "star",
            heading: "ingenuity",
            paragraph: "We are driven by knowledge. Every opportunity we have to learn - anout your needs, innovative culinary trends and efficient ordering process - increases our understanding and inspires us.",
        }, 

        four: {
            icon: "chef",
            heading: "pride",
            paragraph: "We will take our chances and exceed your expectations so as to develop a long-lasting realtionship built on trust. There is no such thing as 'it is what it is' with us. We hold ourselves to a high standard, as do our clients.",
        } 
    };

    test = () =>{
        console.log("testing")
    }

    render(){
        const cardContentArray = [];
        for(let content in this.state){
            cardContentArray.push({
                id: content,
                config: this.state[content]
            });
        } 


        return(
            <section className = "section-about-cards">
                <h2 className = "heading--1 about-cards__heading">What We Stand For</h2>
                <div className = "about-cards__container">
                    {cardContentArray.map(cardContent => (
                        <AboutCard key = {cardContent.id} icon = {cardContent.config.icon} heading = {cardContent.config.heading} paragraph = {cardContent.config.paragraph} />
                    ))}
                </div>
            </section>
        );
    }
}

export default AboutCards;