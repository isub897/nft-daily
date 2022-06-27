import React from "react";
import './ImageSlider.css'
import main from '../Images/story1.jpg'
import author from '../Images/author.jpg'


const ImageSlider = ({urlRedirect, storyData}) => {
    return(
        <div className="image-slider">
            <div 
            onClick={()=> urlRedirect(storyData[0].url)}
            className="whole-container grow">
                <div className="description-container">
                    <h1 className="ma0">{storyData[0].title}</h1>
                    <div className="author">
                        <img alt="author" src={author} />
                        <p className="author-name">{storyData[0].source}</p>
                    </div>
                    <p className="about-article">This is meant to be the description of the article and it will give you a little taste of what is inside the article so we hope that you enjoy it and get back to us soon about your read.
                    </p>
                    <button type="button" className="pa3 mt5 shadow-5">Read More</button>
                </div>
                <div className="image-container">
                    <img alt="article" src={main} className="dim" />
                    <p className="ref-photo">Reference to the photographer</p>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;