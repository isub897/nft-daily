import React from "react";
import Title from "./components/Title/Title";
import Dropdown from "./components/Dropdown/Dropdown";
import Stats from "./components/Stats/Stats";

class Charts extends React.Component {
    constructor() {
        super();
        this.state = {
            route: "24hr",
            isLoaded: false,
            list: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/24hr')
        .then(response => response.json())
        .then(data => {
        this.setState({isLoaded: true});
        this.setState({list: data})});
    }

    onRouteChange = (route) => {
        const url = "http://localhost:3000/" + route;
        fetch(url)
        .then(response => response.json())
        .then(data => {
        this.setState({list: data})})
    }

    urlRedirect = (route) => {
        window.location = route;
    }

    onDropdown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    onClickChange = (event) => {

        if (!(event.target.matches('.dropdown') || event.target.matches('.dropbtn'))) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }



    render(){
        return(
            <div
                onClick={this.onClickChange} 
                className="main">
                <Title />
                <Dropdown onDropdown = {this.onDropdown} onRouteChange = {this.onRouteChange} />
                {this.state.isLoaded
                    ?<Stats urlRedirect = {this.urlRedirect} list = {this.state.list}/>
                    :<div></div>
                } 
                <div />
            </div>
        )
    }
    
}

export default Charts;