import React from 'react';
import Category from './Category';
import { TextInput } from 'carbon-components-react';
import { Checkbox } from 'carbon-components-react';
import './FoodMenu.css';

const FoodMenu = props => (
  <div className="food-menu">
    <h2 className="food-menu__title">
      Menu
    </h2>
    <div className="food-menu__filters">
      <div className="menu__keyword-filter">
        <TextInput
          light
          id="keyword-filter"
          labelText="Search"
          onChange={e => props.searchByKeywords(e.target.value)}
          placeholder="Enter a keyword (e.g. potatoes)"
        />
      </div>
      <div className="menu__description-control">
        <Checkbox
          id="toggle-description"
          type="checkbox"
          onChange={() => props.toggleShowDescription()}
          defaultChecked={props.showDescription}
          labelText="Show description"
        />
      </div> 
    </div>
    <ul className="food-menu__list">
      {
        props.categories.map((category, index) => {
          let items = props.items
          .filter(item => item['Category'] === category['Id'])
          .filter(item => item['Name'].toLowerCase().includes(props.keywords.toLowerCase()) || item['Description'].toLowerCase().includes(props.keywords.toLowerCase()));
    
          return <li key={index} className={"food-menu__list-item" + (items.length < 1 ? " hide" : "")}>
            <Category
              name={category['Name']}
              id={category['Id']}
              items={props.items}
              showDescription={props.showDescription}
              keywords={props.keywords}
            />
          </li>
        })
      }
    </ul>
  </div>
);

export default FoodMenu;
