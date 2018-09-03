import React from 'react';
import './MenuItem.css';

const MenuItem = props => (
  <div className="menu-item">
    <div className="menu-item__header">
      <div className="menu-item__name">
        {props.name}
      </div>
      <div className="menu-item__price">
        {props.price}
      </div>
    </div>
    <div className={"menu-item__description" + (!props.showDescription ? " hide" : "")}>
      {props.description}
    </div>
  </div>
);

export default MenuItem;
