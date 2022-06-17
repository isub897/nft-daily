import React from "react";
import './Dropdown.css'

const Dropdown = ({onRouteChange}) => {
    return(
        <div className="dropdown">
            <button className="dropbtn pv2">Last 24 hours</button><i className="arrow down"></i>
            <div className="dropdown-content">
                <a 
                onClick={onRouteChange}
                href="#link0">Last 24 hours</a>
                <a href="#link1">Last 7 days</a>
                <a href="#link2">Last 30 days</a>
                <a href="#link3">All time</a>
            </div>
        </div>
    )
}

export default Dropdown;    