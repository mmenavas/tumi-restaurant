import React from 'react';
import { Tile } from 'carbon-components-react';
import './Hours.css';

const Hours = props => (
  <div className="hours">
    <h2 className="hours__title page-title">
      Hours
    </h2>
    <div className="hours__info">
      <Tile>
        <h3 className="tile-title">Business Hours</h3>
          <ul>
            <li><strong>Monday:</strong> Closed</li>
            <li><strong>Tuesday - Thursday:</strong> 11:30 AM - 9 PM</li>
            <li><strong>Friday - Saturday:</strong> 11:30 AM - 10 PM</li>
            <li><strong>Sunday:</strong> 11 AM to 8 PM</li>
          </ul>
      </Tile>
    </div>
  </div>
);

export default Hours;
