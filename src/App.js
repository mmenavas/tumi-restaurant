import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Button } from 'carbon-components-react';
import FoodMenu from './Components/FoodMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Tumi Peruvian Cuisine</h1>
        </header>
        <FoodMenu />
      </div>
    );
  }
}

export default App;
