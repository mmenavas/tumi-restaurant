import React from 'react';
import { Tile } from 'carbon-components-react';


const MenuItem = () => (
  <Tile>
    <div className="menu-item">
      <div className="menu-item__name">
        Ceviche
      </div>
      <div className="menu-item__description">
        Fish cooked in lime juice.
      </div>
      <div className="menu-item__price">
        $14.99
      </div>
    </div>
  </Tile>

);

export default MenuItem;