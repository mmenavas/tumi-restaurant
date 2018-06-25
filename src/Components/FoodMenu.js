import React, { Component } from 'react';
import firebase from '../firebase.js';
import Category from './Category';
import { Form } from 'carbon-components-react';
import { Search } from 'carbon-components-react';
import { Checkbox } from 'carbon-components-react';
import './FoodMenu.css';

class FoodMenu extends Component {

  constructor() {
    super();
    this.state = {
      category: '',
      keywords: '',
      showDescription: true,
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

  handleToggleDescription = () =>
    this.setState({showDescription: !this.state.showDescription});

  handleKeywordSearch = (keywords) =>
    this.setState({keywords: keywords});

  handleFormSubmit = (e) => {
    this.searchBox.input.blur()
    e.preventDefault();
  }

  render = () =>
    <div className="food-menu">
      <h2 className="food-menu__title page-title">
        Menu
      </h2>
      <div className="food-menu__filters">
        <div className="menu__keyword-filter">
          <Form onSubmit={e => this.handleFormSubmit(e)} >
            <Search
              light
              id="keyword-filter"
              labelText="Search"
              onChange={e => this.handleKeywordSearch(e.target.value)}
              placeholder="Enter a keyword (e.g. chicken)"
              ref={searchBox => {
                this.searchBox = searchBox;
              }}
            />
          </Form>
        </div>
        <div className="menu__description-control">
          <Checkbox
            id="toggle-description"
            type="checkbox"
            onChange={() => this.handleToggleDescription()}
            defaultChecked={this.state.showDescription}
            labelText="Show description"
          />
        </div> 
      </div>
      <ul className="food-menu__list">
        {
          this.state.categories.map((category, index) => {
            let keywords = this.state.keywords ? this.state.keywords : ''
            let items = this.state.items
            .filter(item => item['Category'] === category['Id'])
            .filter(item => item['Name'].toLowerCase().includes(keywords.toLowerCase()) || item['Description'].toLowerCase().includes(keywords.toLowerCase()));
      
            return <li key={index} className={"food-menu__list-item" + (items.length < 1 ? " hide" : "")}>
              <Category
                name={category['Name']}
                id={category['Id']}
                items={this.state.items}
                showDescription={this.state.showDescription}
                keywords={keywords}
              />
            </li>
          })
        }
      </ul>
    </div>
}

export default FoodMenu;
