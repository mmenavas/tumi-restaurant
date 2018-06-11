import React from 'react';
import { Tile } from 'carbon-components-react';
import './MenuItem.css';

const MenuItem = props => (
  <Tile>
    <div className="menu-item">
      <div className="menu-item__header">
        <div className="menu-item__name">
          {props.name}
        </div>
        <div className="menu-item__price">
          {props.price}
        </div>
      </div>
      <div className="menu-item__description">
        {props.description}
      </div>
    </div>
  </Tile>

);

export default MenuItem;