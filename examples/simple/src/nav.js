import React, {Component} from 'react';
import {WurdText} from '../../../dist/wurd';


const Nav = (props) => (
  <nav className="navbar navbar-default">
    <ul className="nav navbar-nav">
      <li><a href="/"><WurdText id="nav.home" /></a></li>
    </ul>
  </nav>
);


export default Nav;
