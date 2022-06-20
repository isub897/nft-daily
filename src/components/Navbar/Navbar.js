import React from "react";
import './Navbar.css'

const Navbar = ({onRouteChange}) => {
    return(
        <nav className="topnav shadow-5">
            <div className="logo">
                <img alt="logo" src="" />
            </div>
            <div className="routes">
                <a  onClick={()=> onRouteChange("news")}
                    href="#news">News</a> 
                <a  onClick={()=> onRouteChange("charts")}
                    href="#charts">Charts</a>
                <a href="#projects">Projects</a>
            </div>
        </nav>

    )
}

export default Navbar;