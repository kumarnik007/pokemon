import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav
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
          id="home"
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
          id="pokemon"
        >
          Pokemons
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
          to="/search"
          id="search"
        >
          Search
        </NavLink>
      </div>
    </div>
  </nav>
);
