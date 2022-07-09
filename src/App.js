import './App.css';
import Navbar from './components/Navbar/Navbar';
import Charts from './components/Charts/Charts';
import News from './components/News/News';
import About from './components/About/About';
import Signin from './components/Signin/Signin'
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "dashboard",
      signedin: true,
      sessionLoaded: false,
      user: {
        username: "tom",
        email: "tom@gmail.com",
        joined: "",
        logins: "0"
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
              :(this.state.route === "register"
                ?<Register 
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser} 
                  onSignedin = {this.onSignedin}
                />
                :<Signin 
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser} 
                  onSignedin = {this.onSignedin} />
              )
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

// at some stage need to setup the mailchimp for keeping their email details and when forgotten passwords

// api's need to be hooked up to the api calls instead of filesystem readings
// images need to be hooked up to all the stats (10 a day or something)
// set the system up so it can do daily updates of the news and associated pictures, references to photos and articles


// the user dashboard needs to be decked out a little more with functionality to update their imformation, add and delete, mayb add some photos or something
