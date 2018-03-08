import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <br />
    <br />
    <h1 className="App-title">
      <font color="white">React</font>
    </h1>

    <NavLink to="/" activeClassName="active-nav">
      Home
    </NavLink>
    <br />
    <NavLink to="/project" activeClassName="active-nav">
      Project Graph
    </NavLink>
    <br />
    <NavLink to="/apollo-example" activeClassName="active-nav">
      Apollo Example
    </NavLink>
    <NavLink to="/projectOwnerView" activeClassName="active-nav">
      projectOwnerView
    </NavLink>

    <br />

    <Link to="/login">Login</Link>
    <br />
    <br />
    <br />
    <br />
    <br />
  </header>
);

export default Header;
