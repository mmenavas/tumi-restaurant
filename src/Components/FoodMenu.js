import React, { Component } from 'react';
import firebase from '../firebase.js';
import Category from './Category';
import { Form } from 'carbon-components-react';
import { Search } from 'carbon-components-react';
import { Select } from 'carbon-components-react';
import { SelectItem } from 'carbon-components-react';
import { Checkbox } from 'carbon-components-react';
import './FoodMenu.css';

class FoodMenu extends Component {

  constructor() {
    super();
    this.state = {
      category: 'all',
      keywords: '',
      showDescription: true,
      categories: [], 
      items: [],
      results: []
    }
  }

  componentDidMount() {
    let _this = this;

    // Note: Using orderByChild() requires adding a rule in Firebase Database admin panel and it
    // requires using forEach() to iterate through snapshot in snapshotToArray(). 
    // See: https://stackoverflow.com/questions/38345510/firebase-orderbychild-unexpected-results

    // Fetch and sort categories.
    firebase.database().ref('categories').orderByChild('Weight').once('value').then((snapshot) => {
      _this.setState({
        categories: _this.snapshotToArray(snapshot)
      });
    });

    // Fetch and sort menu items.    
    firebase.database().ref('menu-items').orderByChild("Weight").once('value').then((snapshot) => {
      let items = _this.snapshotToArray(snapshot);
      _this.setState({
        items: items,
        results: items
      });
    });
  }

  snapshotToArray = (snapshot) => {
    let items = [];
    snapshot.forEach(item => {
      // Modify category to include its key as a property.
      items.push(Object.assign(item.val(), {Id: item.key}))
    });

    return items;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.category !== this.state.category || prevState.keywords !== this.state.keywords) {
      this.updateResults();
    }
  }

  handleToggleDescription = () =>
    this.setState({showDescription: !this.state.showDescription});

  handleKeywordSearch = (keywords) => 
    this.setState({keywords: keywords});
  
  handleCategoryChange = (category) => {
    this.setState({category: category});    
  }

  handleFormSubmit = (e) => {
    this.searchBox.input.blur()
    e.preventDefault();
  }

  updateResults = () => {
    const keywords = this.state.keywords ? this.state.keywords.toLowerCase() : '';
    const newResults = this.state.items
      .filter(item => this.state.category === 'all' || item['Category'] === this.state.category)
      .filter(item => {
        const name = item['Name'] ? item['Name'].toLowerCase() : '';
        const description = item['Description'] ? item['Description'].toLowerCase() : '';
        return name.includes(keywords) || description.includes(keywords);
    });
    this.setState({
      results: newResults
    });
  }

  render = () =>
    <div className="food-menu">
      <h2 className="food-menu__title page-title">
        Our Food Menu
      </h2>
      <div className="food-menu__filters">
        <div className="food-menu__keyword-filter">
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
        <div className="food-menu__categories-control">
          <Select
              onChange={(e) => this.handleCategoryChange(e.target.value)}
              className="some-class"
              id="category-filter"
              defaultValue="all"
              hideLabel
              light
            >
            <SelectItem
              value="all"
              text="All categories"
            />
            {
              this.state.categories.map((category, index) =>
                 <SelectItem key={index} value={category['Id']} text={category['Name']} />
              )
            }
          </Select>
        </div> 
        <div className="food-menu__description-control">
          <Checkbox
            id="toggle-description"
            type="checkbox"
            onChange={() => this.handleToggleDescription()}
            defaultChecked={this.state.showDescription}
            labelText="Show description"
          />
        </div> 
      </div>
      <div className="food-menu__count">{this.state.results.length} items are being displayed.</div>
      <ul className="food-menu__list">
        {
          this.state.categories
          // Remove empty categories.
          .filter(item => this.state.results.find(result => result['Category'] === item['Id']))
          .map((category, index) =>
            <li key={index} className="food-menu__list-item">
              <Category
                name={category['Name']}
                id={category['Id']}
                items={this.state.results}
                showDescription={this.state.showDescription}
              />
            </li>
          )
        }
      </ul>
    </div>
}

export default FoodMenu;
