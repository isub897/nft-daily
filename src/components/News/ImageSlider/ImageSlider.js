import React from "react";
import './ImageSlider.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import main from '../Images/story1.jpg'
import author from '../Images/author.jpg'


const ImageSlider = ({urlRedirect, storyData}) => {
    return(

        <div className="image-slider">
            <div className="row justify-content-center">
                <div className="description-container
                            col-8 order-2
                            col-sm-4 order-sm-1
                            col-md-4 order-md-1
                            col-lg-4 order-lg-1
                            col-xl-4 order-xl-1
                            col-xxl-4 order-xxl-1">
                    <h1>{storyData[0].title}</h1>
                    <div className="author">
                        <img alt="author" src={author} />
                        <p>{storyData[0].source}</p>
                    </div>
                    <p>This is meant to be the description of the article and it will give you a little taste of what is inside the article so we hope that you enjoy it and get back to us soon about your read.
                    </p>
                    <button type="button" className="pa3 mb5 shadow-5">Read More</button>
                </div>
                <div className="image-container
                                col-8 order-1
                                col-sm-8 order-sm-2
                                col-md-8 order-md-2
                                col-lg-8 order-lg-2
                                col-xl-8 order-xl-2
                                col-xxl-8 order-xxl-2">
                    <img alt="main" src={main} className="dim pointer" />
                    <div className="photo-ref">
                        <p>Reference the photographer</p>
                    </div>
                </div>
            </div>    
        </div>

    )
}

export default ImageSlider;