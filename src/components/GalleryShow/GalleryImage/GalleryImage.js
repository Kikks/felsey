import React from 'react';

const GalleryImage = (props) => (
    <div className= {"gallery__image " + props.className}  style = {props.style} 
    onClick = {() => {
        props.imageClicked();
        props.indexSend();
    }}>
    </div>
);

export default GalleryImage;