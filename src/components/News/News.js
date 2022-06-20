import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";

class News extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div className="news">
                <ImageSlider />
                {/* <ImageSlider />
                <Strories /> */}
            </div>
        )
    }

}

export default News;