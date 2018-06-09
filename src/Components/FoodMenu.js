import React from 'react';
import Category from './Category';
import { Accordion } from 'carbon-components-react';

const FoodMenu = () => (
  <div className="food-menu">
  <Accordion>
    <Category />
    <Category />
    <Category />
    <Category />
    <Category />
  </Accordion>
  </div>

);

export default FoodMenu;