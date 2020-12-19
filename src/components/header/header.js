import React from 'react';

import './header.scss';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../assets/images/logo.jpg" alt="Logo"/>
      </div>
      <ul className="header__list">
        <li className="header__item">
          <Link to="/">
            Films
          </Link>
        </li>
        <li className="header__item">
          <Link to="/tvshow">
            TV show
          </Link>
        </li>
        <li className="header__item">
          <Link to="/cartons">
            Cartons
          </Link>
        </li>
        <li className="header__item">
          <Link to="/collections">
            Collections
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;