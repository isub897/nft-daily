import about from './Images/about.jpg'
import './About.css';
import React from "react";

const About = () => {
    return(
        <div className="About">
            <div className="whole-about">
                <div className="image-about">  
                    <img alt='about' src={about} className="dim pointer"/>
                </div>
                <div className="description-about">
                    <h1>About This Project</h1>
                    <p>
                        Thank you for taking the time to checkout this project.   
                    </p>
                    <p>
                        This is a unique project that I've put together to practice some of the web-dev concepts that I've learnt so far.
                    </p>
                    <p>
                        This project makes use of some simple NFT API's that can be found on rapidapi.com.  These API's respond with real-time data that contains stats and stories related to NFT's, and I've simply used a mixture of JSX, JS, html and css concepts to style the data into the product you now see.
                    </p>
                    <p>
                        This project makes use of frameworks such as Create-React-app, NPM, node-js (for back-end) and some relational database languages to put together a fully functioning full-stack web API.
                    </p>
                    <p>
                    There is definately a lot more that could be added to this project but overall all in all, I'd like to thank you for taking the time to check it out.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;