import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Tile } from 'carbon-components-react';
import './Events.css';

class Events extends Component {

  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    let _this = this;
    
    // Fetch and sort categories.
    firebase.database().ref('events').once('value').then((snapshot) => {
      let newEvents = [];
      snapshot.forEach(event => {
        newEvents.push(event.val());
      });
      _this.setState({
        events: newEvents
      });
    });

  }

  render = () =>
  <div className="events">
    <h2 className="events__title page-title">
      Events
    </h2>
    <ul className="events__list">
      {
        this.state.events
        .filter(event => event['Active'])
        .map((event, index) =>
          <li key={index} className="events__list-item">
            <Tile>
              <h3 className="events__name">{event['Name']}</h3>
              <ul>
                <li className="events__date"><strong>Date:</strong> {event['Date']}</li>
                <li className="events__time"><strong>Time:</strong> {event['Time']}</li>
              </ul>
              <img className ="events__flyer"
                src={event['Flyer']}
                alt=""
                title=""
              />
            </Tile>
          </li>
        )
      }
    </ul>
  </div>
}

export default Events;
