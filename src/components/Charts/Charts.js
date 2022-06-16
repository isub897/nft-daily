import React from "react";
import Title from "./components/Title/Title";
import Dropdown from "./components/Dropdown/Dropdown";
import Stats from "./components/Stats/Stats";

class Charts extends React.Component {
    constructor() {
        super();
        this.state = {
            stats: "24hr"
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        return(
            <div className="main">
                <Title />
                <Dropdown />
                <Stats />
                <div />
            </div>
        )
    }
    
}

export default Charts;