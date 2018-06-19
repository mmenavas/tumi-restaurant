import React from 'react';
import MenuItem from './MenuItem';
import './Category.css';

const Category = props => (
  <div className="menu-category">
    <h3 className="menu-category__name">{props.name}</h3>
    <ul className="menu-category__list">
    {
      props.items.filter(item => item['Category'] === props.id)
      .map((item, index) =>
        <li key={index} className="menu-category__list-item">
          <MenuItem
            name={item['Name']}
            description={item['Description']}
            price={item['Price']}
            showDescription={props.showDescription}
          />
        </li>
      )
    }
    </ul>
  </div>
);

export default Category;
