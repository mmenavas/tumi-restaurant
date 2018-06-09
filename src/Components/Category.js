import React from 'react';
import MenuItem from './MenuItem';
import { AccordionItem } from 'carbon-components-react';

const Category = () => (
  // <div className="menu-category">
  //   <h3>Appetizers</h3>
  //   <ul>
  //     <li>
  //       <Tile>
  //         <MenuItem />
  //       </Tile>
  //       <Tile>
  //         <MenuItem />
  //       </Tile>
  //       <Tile>
  //         <MenuItem />
  //       </Tile>
  //     </li>
  //   </ul>
  // </div>
  <AccordionItem title="Appetizers">
      <MenuItem />
  </AccordionItem>
);

export default Category;