import React from 'react';

import {ReactComponent as Left} from '../../assets/img/SVG/chevron-left.svg'
import {ReactComponent as Right} from '../../assets/img/SVG/chevron-right.svg'

import Auxilliary from '../../hoc/Auxiliary/Auxilliary';

const ImageSlider = (props) => {
    let imageSlider = <div></div>;

    if(props.show){
        imageSlider = (
            <Auxilliary>
                <div className = "slider">
                    <span className="slider__close" onClick = {props.clicked}>&times;</span>
                    <button className = "slider__btn" onClick = {props.leftClick}><Left className = "slider__svg slider__svg--left"/></button>
                    <div className = "slider__img-container">
                        <img src = {props.sliderImage} className = "slider__img" alt = "Slider__images"/>    
                    </div>
                    <Right className = "slider__svg slider__svg--right" onClick = {props.rightClick}/>
                </div>
            </Auxilliary>
        );
    }

    return(
        <Auxilliary>
            {imageSlider}
        </Auxilliary>
    );


    
}

export default ImageSlider;