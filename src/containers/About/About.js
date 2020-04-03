import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxiliary/Auxilliary';

import Hero from '../../components/Hero/Hero';
import AboutStory from '../../components/AboutStory/AboutStory';
import AboutCards from '../../components/AboutCards/AboutCards';

class About extends Component{
    render() {
        return(
            <Auxilliary>
                <main className = "about">
                    <Hero className = "about__hero">About Us</Hero>
                    <AboutStory />
                    <AboutCards />
                </main>
            </Auxilliary>
        );
    }
}

export default About;