import React from "react";
import './StoryList.css'

const StoryList = ({storyData}) => {

    const description1 = "What is the model based on? How is it different from the prevailing system of operation?";

    const description2 = "The cryptocurrency industry was built on swagger, enthusiasm and optimism. All three are in short supply these days, as losses and layoffs mount.";

    const description3 = "A bitcoin exchange-traded fund allows investors to gain exposure to the biggest cryptocurrency by market cap without actually owning any.";

    




    const descriptionArray = [
        description1, 
        description2,
        description3,
        description1,
        description1
    ]

    return(
        <div className="story-list">
            {
                storyData.map((item, index) => {
                    if (index>4) {return <div key={index}></div>}
                    return (
                    <a href={item.url}  key={index}>
                        <div className="story shadow-5 br3 grow">
                            <img alt="story" src="" className="ba"/>
                            <div className="story-description">
                                <h3>{item.title}</h3>
                                <p>{descriptionArray[index]}</p>
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