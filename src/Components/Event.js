import React from 'react';
import { Tile } from 'carbon-components-react';
import './Event.css';

const Event = props => (
  <Tile>
    <h3 className="event__name tile-title">{props.name}</h3>
    <ul>
      <li className="event__date"><strong>Date:</strong> {props.date}</li>
      <li className="event__time"><strong>Time:</strong> {props.time}</li>
    </ul>
    <img className ="event__flyer"
      src={props.flyer}
      alt=""
      title=""
    />
  </Tile>
);

export default Event;
