import React from 'react';
import { Tabs } from 'carbon-components-react';
import { Tab } from 'carbon-components-react';
import FoodMenu from './Components/FoodMenu';
import Events from './Components/Events';
import Contact from './Components/Contact';
import './App.css';

const App = props => (
  <Tabs>
    <Tab label="Menu">
      <FoodMenu />
    </Tab>
    <Tab label="Events">
      <Events />
    </Tab>
    <Tab label="Contact">
      <Contact />
    </Tab>
  </Tabs>
);

export default App;