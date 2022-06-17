import React from "react";
import Title from "./components/Title/Title";
import Dropdown from "./components/Dropdown/Dropdown";
import Stats from "./components/Stats/Stats";

class Charts extends React.Component {
    constructor() {
        super();
        this.state = {
            route: "24hr",
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
        fetch('http://localhost:3000/24hr')
        .then(response => response.json())
        .then(data => {
        this.setState({list: data})})
    }

    onRouteChange = (route) => {
        const url = "http://localhost:3000/" + route;
        fetch(url)
        .then(response => response.json())
        .then(data => {
        this.setState({list: data})})
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