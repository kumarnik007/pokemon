import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          className={({ isActive }) => (
            classNames(
              'navbar-item',
              {
                'has-background-grey-lighter': isActive,
              },
            )
          )}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (
            classNames(
              'navbar-item',
              {
                'has-background-grey-lighter': isActive,
              },
            )
          )}
          to="/pokemon"
        >
          Pokemons
        </NavLink>
      </div>
    </div>
  </nav>
);
