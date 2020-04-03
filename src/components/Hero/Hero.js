import React from 'react';

const Hero = (props) => {
    let classes = ["hero", props.className];

    return(
        <header id = "hero" className = {classes.join(" ")}>
            <div className = "hero__container">
                <h1 className = "heading--1">{props.children}</h1>
            </div>
        </header>
    );
}
   

export default Hero;