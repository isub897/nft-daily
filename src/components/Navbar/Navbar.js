import React from "react";
import './Navbar.css'
import dropdownImage from './Images/dropdown.webp';

const Navbar = ({onDropdownChange, onRouteChange}) => {
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
                <a  onClick={()=> onRouteChange("about")} 
                href="#projects">About</a>
                <div className="dropdown-nav">
                    <button 
                        className="dropbtn-nav"
                        onClick={onDropdownChange} >
                        <img alt="dropdown" src={dropdownImage} />
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div id="myDropdown-nav" className="dropdown-content-nav">
                        <a  onClick={()=> onRouteChange("news")}
                            href="#news">News</a> 
                        <a  onClick={()=> onRouteChange("charts")}
                            href="#charts">Charts</a>
                        <a  onClick={()=> onRouteChange("about")} 
                        href="#projects">About</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;