import React from 'react';
import Category from './Category';
import './FoodMenu.css';

const FoodMenu = props => (
  <div className="food-menu">
    <h2 className="food-menu__title">
      Menu
    </h2>
    <ul className="food-menu__list">
      {
        props.categories.map((category, index) =>
          <li key={index} className="food-menu__list-item">
            <Category name={category['Name']} id={category['Id']} items={props.items} />
          </li>
        )
      }
    </ul>
  </div>
);

export default FoodMenu;
