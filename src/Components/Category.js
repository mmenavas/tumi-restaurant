import React from 'react';
import MenuItem from './MenuItem';
import './Category.css';

const Category = props => (
  <div className="menu-category">
    <h3 className="menu-category__name">{props.name}</h3>
    <ul className="menu-category__list">
    {
      props.items.filter(item => item.category === props.name)
      .map((item, index) =>
        <li key={index} className="menu-category__list-item">
          <MenuItem name={item.name} description={item.description} price={item.price} />
        </li>
      )
    }
    </ul>
  </div>
);

export default Category;
