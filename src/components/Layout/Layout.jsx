import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <NavLink className="header_link" to="/">
            Home
          </NavLink>
          <NavLink
            state={{ from: location }}
            className="header_link"
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
