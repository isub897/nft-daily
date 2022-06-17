import React from "react";
import Title from "./components/Title/Title";
import Dropdown from "./components/Dropdown/Dropdown";
import Stats from "./components/Stats/Stats";

class Charts extends React.Component {
    constructor() {
        super();
        this.state = {
            stats: "24hr",
            list: [{
                collection_name: "",
                collection_url: "",
                floor: "",
                trades: "",
                volume: ""
            }]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => {
        this.setState({list: data})})
    }

    onRouteChange = () => {
        console.log("made it here")
    }


    render(){
        return(
            <div className="main">
                <Title />
                <Dropdown onRouteChange = {this.onRouteChange} />
                <Stats list = {this.state.list}/>
                <div />
            </div>
        )
    }
    
}

export default Charts;