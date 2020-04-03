import React from 'react';
import GalleryImage from './GalleryImage/GalleryImage';

const GalleryShow = (props) => {

    return (
        <section className="section-gallery">
            <div className="gallery__container">
                {props.array.map(galleryImages => {
                    const transferIndex = () => {
                        props.index(galleryImages.config.index);
                    };

                    return (
                        <GalleryImage indexSend = {transferIndex}
                            key = {galleryImages.id}
                            className = {galleryImages.config.class}
                            style = {galleryImages.config.style} 
                            imageClicked = {props.imageClicked} />
                    );
                })};
            </div>
        </section>
    );   
};

export default GalleryShow;