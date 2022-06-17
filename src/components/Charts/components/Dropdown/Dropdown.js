import React from "react";
import './Dropdown.css'

const Dropdown = ({onRouteChange}) => {
    return(
        <div className="dropdown">
            <button className="dropbtn pv2">Last 24 hours</button><i className="arrow down"></i>
            <div className="dropdown-content">
                <a 
                onClick={()=> onRouteChange("24hr")}
                href="#link0">Last 24 hours</a>
                <a 
                onClick={()=> onRouteChange("7d")}
                href="#link1">Last 7 days</a>
                <a 
                onClick={()=> onRouteChange("30d")}
                href="#link2">Last 30 days</a>
                <a
                onClick={()=> onRouteChange("AT")}
                 href="#link3">All time</a>
            </div>
        </div>
    )
}

export default Dropdown;    