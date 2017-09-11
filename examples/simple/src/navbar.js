// Provides an example of how to edit interactive elements such as dropdowns

import React from 'react';
import wurd, {WurdText, WurdObject} from '../../../dist/wurd';
import {NavDropdown, MenuItem} from 'react-bootstrap';


const Navbar = (props) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li><a href="/"><WurdText id="nav.home" /></a></li>
      </ul>

      <WurdObject type="ul" className="nav navbar-nav navbar-right" id="nav.menu" keys="item1,item2">
        <NavDropdown id="navDropdown" title="Menu">
          <MenuItem>{wurd.text('nav.menu.item1')}</MenuItem>
          <MenuItem>{wurd.text('nav.menu.item2')}</MenuItem>
        </NavDropdown>
      </WurdObject>
    </div>
  </nav>
);


export default Navbar;
