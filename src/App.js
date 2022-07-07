import './App.css';
import Navbar from './components/Navbar/Navbar';
import Charts from './components/Charts/Charts';
import News from './components/News/News';
import About from './components/About/About';
import Signin from './components/Signin/Signin'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin"
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
  
  onDropdownChange = () => {
    document.getElementById("myDropdown-nav").classList.toggle("show");
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

  render() {
    return (
      <div 
        className="App"
        onClick={this.onClickChange}>
      <Navbar onDropdownChange={this.onDropdownChange} onRouteChange={this.onRouteChange} />
      {this.state.route === "news"
        ?<News />
        :(this.state.route === "charts"
          ?<Charts />
          :(this.state.route === "about"
            ?<About />
            :<Signin />
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


//sign in
// setup a 1min session from server-side

// setup a signedin state that shows the name and dashboard and info instead of signin on navbar and dashboard
// have this state backed by a cookie in the backend so taht when localhost:3000 is called, isAuth will be triggered and then signedin state will be presented on the front-end with all the user information from the previous session (something like that)
