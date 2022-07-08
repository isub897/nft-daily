import './App.css';
import Navbar from './components/Navbar/Navbar';
import Charts from './components/Charts/Charts';
import News from './components/News/News';
import About from './components/About/About';
import Signin from './components/Signin/Signin'
import Dashboard from './components/Dashboard/Dashboard';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      signedin: false,
      sessionLoaded: false,
      user: {
        username: "",
        email: "",
        joined: "",
        logins: ""
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/dashboard', {
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => { 
      if(data[0]) {
        this.loadUser(data[0]);
        this.setState({signedin: true})
      }
    })
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
  
  onDropdownChange = () => {
    document.getElementById("myDropdown-nav").classList.toggle("show");
  }

  onSignedin = (logic) => {
    this.setState({signedin: logic})
  }

  onClickChange = (event) => {
    if (!event.target.matches('button > img')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-nav");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  loadUser = (givenUser) => {
    this.setState({user: givenUser});
  }

  render() {
    return (
      <div 
        className="App"
        onClick={this.onClickChange}>
      <Navbar
        route={this.state.route} 
        onSignedin = {this.onSignedin}
        signedin = {this.state.signedin} 
        onDropdownChange={this.onDropdownChange} 
        onRouteChange={this.onRouteChange} />
      {this.state.route === "news"
        ?<News />
        :(this.state.route === "charts"
          ?<Charts />
          :(this.state.route === "about"
            ?<About />
            :(this.state.signedin
              ?<Dashboard user={this.state.user} />
              :<Signin loadUser={this.loadUser} onSignedin = {this.onSignedin} />
            ) 
          )
        )
      }
      </div>
    );
  }

}

export default App;

// color palette
// https://palettes.shecodes.io/palettes/102

// pass states into navbar
// upon each state, highlight the bottom of the navbar route at the top
