import React from "react";
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="topnav shadow-5">
            <div className="logo">
                {/* <a class="active" href="#home">Home</a> */}
                <img className="ba" alt="logo" src="" />
            </div>
            <div className="routes">
                <a href="#news">News</a> 
                <a href="#charts">Charts</a>
                <a href="#projects">Projects</a>
            </div>
        </nav>

    )
}

export default Navbar;