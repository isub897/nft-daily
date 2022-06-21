import React from "react";
import './ImageSlider.css'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

const ImageSlider = () => {
    return(
        <div className="image-slider">
            <div className="whole-container">
                <div className="description-container">
                    <h1 className="ma0">Title</h1>
                    <div className="author">
                        <img alt="author" src={image2} />
                        <p className="author-name">Johnny Allen</p>
                    </div>
                    <p className="about-article">This is meant to be the description of the article and it will give you a little taste of what is inside the article so we hope that you enjoy it and get back to us soon about your read.
                    </p>
                    <button type="button" className="pa3 mt5">Read More</button>
                </div>
                <div className="image-container">
                    <img alt="article-image" src={image3} />
                    <p className="ref-photo">Reference to the photographer</p>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;