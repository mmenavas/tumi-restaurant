import React, { Component } from 'react';
import FoodMenu from './Components/FoodMenu';
import './App.css';
import logo from './logo.png';
import firebase from './firebase.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      category: '',
      keyword: '',
      showDescription: false,
      categories: [], 
      items: []
    }
  }

  componentDidMount() {
    let _this = this;
    
    // Fetch and sort categories.
    firebase.database().ref('categories').once('value').then((snapshot) => {
      const categories = snapshot.val();
      let newCategories = _this.sortItemsByWeight(categories);
      _this.setState({
        categories: newCategories
      });
    });

    // Fetch and sort menu items.    
    firebase.database().ref('menu-items').once('value').then((snapshot) => {
      const menuItems = snapshot.val();
      let newMenuItems = _this.sortItemsByWeight(menuItems);

      _this.setState({
        items: newMenuItems
      });
    });

  }

  sortItemsByWeight(items) {
    let newItems = [];
    for (let item in items) {
      let newItem = items[item];
      newItem['Id'] = item;
      newItems.push(newItem);
    }
    newItems.sort((a,b) => {
        return a['Weight'] - b['Weight'];
    });
    return newItems;
  }

  toggleShowDescription = () =>
    this.setState({showDescription: !this.state.showDescription});

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div><img className="app__logo" src={logo} title="Tumi logo." alt="Tumi"/></div>
          <h1 className="app__title">Tumi Peruvian Cuisine</h1>
          <div className="app__info">
            <div>
              <a className="app__address" href="https://goo.gl/maps/tfQVasTG55J2" title="View map.">961 W Ray Rd #3-4 Chandler, AZ 85225</a>
            </div>
            <div>
              <a className="app__phone-number" href="tel:+14808211717">(480) 821-1717</a>
            </div>
          </div>          
        </header>
        <FoodMenu
          categories={this.state.categories}
          items={this.state.items}
          showDescription={this.state.showDescription}
          toggleShowDescription={this.toggleShowDescription}
        />
      </div>
    );
  }
}

export default App;
