import React, { Component } from 'react';
import FoodMenu from './Components/FoodMenu';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: [], 
      items: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('Menu');
    itemsRef.on('value', (snapshot) => {
      let categories = snapshot.val();
      let newCategories = [];
      let newItems = [];

      for (let category in categories) {
        newCategories.push(category);
        for (let menuItem in categories[category]) {
          newItems.push({
            name: menuItem,
            description: categories[category][menuItem]['Description'],
            price: categories[category][menuItem]['Price'],
            category: category
          });
        }
      }
      this.setState({
        categories: newCategories,
        items: newItems
      });
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Tumi Peruvian Cuisine</h1>
          <div className="app__info">
            <p className="app__address">
              961 W Ray Rd #3-4
              Chandler, AZ 85225
            </p>
            <p className="app__phone-number">
              (480) 821-1717
            </p>
          </div>          
        </header>
        <FoodMenu categories={this.state.categories} items={this.state.items} />
      </div>
    );
  }
}

export default App;
