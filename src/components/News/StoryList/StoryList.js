import React from "react";
import './StoryList.css'

const StoryList = ({storyData}) => {
    return(
        <div className="story-list ba b--red">
            {
                storyData.map((item, index) => {
                    if (index>4) {return}
                    return (
                    <a href={item.url}  key={index}>
                        <div className="story ba b--green">
                            <img alt="story" src="" />
                            <div className="story-description">
                                <h3>{item.title}</h3>
                                <p>this is a description of the storyt that your about to click on</p>
                                <div className="media-links">
                                    <p>{item.source}</p>
                                    {/* <p>author name</p> */}
                                </div>
                            </div>
                        </div>
                    </a>

                    )
                })
            }

        </div>
    )
}

export default StoryList;