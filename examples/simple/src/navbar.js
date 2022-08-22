// Provides an example of how to edit interactive elements such as dropdowns

import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';


export default function Navbar({ content }) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><a href="/"><content.Text id="home" /></a></li>
        </ul>

        <content.Object type="ul" className="nav navbar-nav navbar-right" id="menu" keys="item1,item2">
          {content.block('menu', block =>
            <NavDropdown id="navDropdown" title="Menu">
              <MenuItem>{block.text('item1')}</MenuItem>
              <MenuItem>{block.text('item2')}</MenuItem>
            </NavDropdown>
          )}
        </content.Object>

        <ul className="nav navbar-nav navbar-right">
          <li><a href="?lang=en"><content.Text id="english" /></a></li>
          <li><a href="?lang=es"><content.Text id="spanish" /></a></li>
        </ul>
      </div>
    </nav>
  );
}
