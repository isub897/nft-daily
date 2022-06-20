import './App.css';
import Navbar from './components/Navbar/Navbar';
import Charts from './components/Charts/Charts';
import News from './components/News/News';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "news"
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
  

  render() {
    return (
      <div className="App">
      <Navbar onRouteChange={this.onRouteChange} />
      {this.state.route === "news"
        ?<News />
        :<Charts />
      }
      </div>
    );
  }

}

export default App;

// color palette
// https://palettes.shecodes.io/palettes/102
