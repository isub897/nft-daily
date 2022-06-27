import React from "react";
import image1 from '../Images/story1.jpg'
import image2 from '../Images/story2.jpg'
import image3 from '../Images/story3.jpg'
import image4 from '../Images/story4.jpg'
import './StoryList.css'

const description1 = "What is the model based on? How is it different from the prevailing system of operation?";

const description2 = "The cryptocurrency industry was built on swagger, enthusiasm and optimism. All three are in short supply these days, as losses and layoffs mount.";

const description3 = "A bitcoin exchange-traded fund allows investors to gain exposure to the biggest cryptocurrency by market cap without actually owning any.";

const images = [
    image1,
    image2, 
    image3, 
    image4
];

const descriptionArray = [
    description1, 
    description2,
    description3,
    description1,
    description1
]

const StoryList = ({storyData}) => {



    return(
        <div className="story-list">
            {
                storyData.slice(0,4).map((item, index) => {
                    return (
                    <a href={item.url}  key={index}>
                        <div className="story shadow-5 br3 grow">
                            <img alt="story" src={images[index]}/>
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