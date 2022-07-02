import about from './Images/about.jpg'
import './About.css';
import React from "react";

const About = () => {
    return(
        <div className="About ">
            <div className="whole-about shadow-5">
                <div className="image-about ">  
                    <img alt='about' src={about} className="dim pointer"/>
                </div>
                <h1>Thank You</h1>
                <div className="description-about">
                    <p>
                        Thank you for taking the time to checkout this project.   
                    </p>
                    <p>
                        I look forward meeting new people in the development space and look forward to the journey ahead.
                    </p>
                    <p>
                        Below are my details if you want to get in touch, checkout projects and see what I'm up to or just have a bit of a laugh at the content.
                    </p>
                    <p>
                        Regards,
                    </p>
                    <p>
                        Ivan.
                    </p>
                </div>
                <div className='social-media links'>
                    {"(insert media links below)"}
                </div>
            </div>
        </div>
    )
}

export default About;