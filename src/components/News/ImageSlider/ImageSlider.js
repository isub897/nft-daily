import React from "react";
import './ImageSlider.css'

const ImageSlider = () => {
    return(
        <div className="main">
            <div className="slideshow">
                <div className="text-container">





                    <h1 >Title of the story</h1>
                    <div className="author b--orange">
                        <img alt="w-30" src="" />
                        <p className="author-name w-70">Author's name</p>
                    </div>
                    <div className="article-description">
                        <p>heres a little something about the article that youi are abvout to read about.  good luck and i hope u enjoy the read ladies and gentlemen.  again best of luck to you all.</p>
                    </div>
                    <div className="tc">
                        <button type="button" className="pa3 ma4" >Read More >></button>
                    </div>







                </div>
                <div className="image-container"></div>
                {/* <p className="reference ba">Photos by Photographer's name</p> */}
                
            </div>
            <div className="reference">
                <p>image by photographer</p>
            </div>  
        </div>
    )
}

export default ImageSlider;