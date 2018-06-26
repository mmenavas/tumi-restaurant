import React, { Component } from 'react';
import firebase from '../firebase.js';
import Event from './Event';
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
            <Event
              name={event['Name']}
              date={event['Date']}
              time={event['Time']}
              flyer={event['Flyer']}
            />
          </li>
        )
      }
    </ul>
  </div>
}

export default Events;
