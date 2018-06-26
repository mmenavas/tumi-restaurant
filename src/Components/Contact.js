import React from 'react';
import { Tile } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import './Contact.css';

const Contact = props => (
  <div className="contact">
    <h2 className="contact__title page-title">
      Contact
    </h2>
    <div className="contact__info">
      <Tile>
        <div className="contact__hours">
          <h3 className="tile-title">Business Hours</h3>
            <ul>
              <li><strong>Monday:</strong> Closed</li>
              <li><strong>Tuesday - Thursday:</strong> 11:30 AM - 9 PM</li>
              <li><strong>Friday - Saturday:</strong> 11:30 AM - 10 PM</li>
              <li><strong>Sunday:</strong> 11 AM to 8 PM</li>
            </ul>
        </div>
      </Tile>
      <Tile>
        <div className="contact__phone">
          <h3 className="tile-title">Phone</h3>
          <p>(480) 821-1717</p>
          <Button small href="tel:+14808211717">Call now</Button>
        </div>
      </Tile>
      <Tile>
        <div className="contact__address">
          <h3 className="tile-title">Address</h3>
          <p>961 W Ray Rd #3-4 <br />
            Chandler, AZ 85225 </p>
          <Button small href="https://goo.gl/maps/mNxfhfpvRo12">Open map</Button>
        </div>
      </Tile>
    </div>
  </div>
);

export default Contact;
