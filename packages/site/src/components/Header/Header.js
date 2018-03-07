import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
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
    <br />
    <Link to="/login">Login</Link>
  </header>
);

export default Header;
