import React from "react";
import './Navbar.css'
import dropdownImage from './Images/dropdown.webp';
import logo from './Images/logo.png';

const Navbar = ({onSignedin, signedin, onDropdownChange, onRouteChange}) => {

    const onSignOut = () => {
        onRouteChange("signin");
        onSignedin(false);
        fetch('http://localhost:3000/logout', {
            credentials: 'include'
        })
        .catch(err => console.log("error logging out"))
    }

    return(
        <nav className="topnav shadow-5">
            <div className="logo">
                <img 
                onClick={() => onRouteChange("dashboard")}
                alt="logo" 
                src={logo}/>
            </div>
            <div className="routes">
                {signedin
                    ?<a  onClick={onSignOut}
                     href="#news">Sign Out</a>
                    :<a  onClick={()=> onRouteChange("signin")}
                     href="#news">Sign In</a>  
                }
 
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
                        <a  onClick={()=> onRouteChange("signin")}
                                href="#news">Sign In</a> 
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