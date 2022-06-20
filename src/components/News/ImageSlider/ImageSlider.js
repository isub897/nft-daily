import React from "react";
import './ImageSlider.css'

const ImageSlider = () => {
    return(
        <div className="slideshow">
            <div className="text-container">
                <h1 >Title of the story</h1>
                <div className="author ba b--orange">
                    <img alt="w-30" src="" />
                    <p className="author-name w-70">Author's name</p>
                </div>
                <div className="article-description">
                    <p>heres a little something about the article that youi are abvout to read about.  good luck and i hope u enjoy the read ladies and gentlemen.  again best of luck to you all.</p>
                </div>
                <div className="tl">
                    <button type="button" className="pa3 ma4" >Read More >></button>
                </div>
                
            </div>
            <div className="image-container"></div>
            
        </div>
    )
}

export default ImageSlider;