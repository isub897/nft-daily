import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import StoryList from "./StoryList/StoryList";

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            storyData: [],
            dataLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/news')
        .then(response => response.json())
        .then(data => {
            this.setState({storyData: data});
            this.setState({dataLoaded: true});
        })
    }

    urlRedirect = (route) => {
        window.location = route;
    }

    render() {

        return(
            <div className="news">
                {this.state.dataLoaded
                    ?<div>
                        <ImageSlider urlRedirect={this.urlRedirect} storyData={this.state.storyData}/>
                        <StoryList storyData={this.state.storyData}/>
                    </div>
                    :<div>Loading...</div>
                }
                
            </div>
        )
    }

}

export default News;