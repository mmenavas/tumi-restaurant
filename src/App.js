import React from 'react';
import FoodMenu from './Components/FoodMenu';
import Slideshow from './Components/Slideshow';
import './App.css';

const App = props => (
  <div>
    <Slideshow />
    <FoodMenu />
  </div>
);

export default App;