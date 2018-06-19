import React from 'react';
import Category from './Category';
import './FoodMenu.css';

const FoodMenu = props => (
  <div className="food-menu">
    <h2 className="food-menu__title">
      Menu
    </h2>
    <div className="food-menu__filters">
      <label>
        <input
          type="checkbox"
          onChange={() => props.toggleShowDescription()}
          checked={props.showDescription}
        /> Show description
      </label>
    </div>
    <ul className="food-menu__list">
      {
        props.categories.map((category, index) =>
          <li key={index} className="food-menu__list-item">
            <Category
              name={category['Name']}
              id={category['Id']}
              items={props.items}
              showDescription={props.showDescription}
            />
          </li>
        )
      }
    </ul>
  </div>
);

export default FoodMenu;
