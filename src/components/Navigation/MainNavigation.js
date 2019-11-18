import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

const mainNavigation = props => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>e-Rapor</h1>
    </div>
    <nav className="main-navigation__item">
      <ul>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
