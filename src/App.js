import './App.css';
import Navbar from './components/Navbar/Navbar';
import Charts from './components/Charts/Charts';
import News from './components/News/News';
import About from './components/About/About';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "charts"
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
          :<About />
        )
      }
      </div>
    );
  }

}

export default App;

// color palette
// https://palettes.shecodes.io/palettes/102
