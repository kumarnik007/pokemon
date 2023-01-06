import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import { Navbar } from './Navbar';

let container: HTMLDivElement | null = null;

describe('Navbar', () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      createRoot(container as HTMLDivElement)
        .render(
          <HashRouter>
            <Navbar />
          </HashRouter>
        );
    });
  });

  afterEach(() => {
    // cleanup on exiting
    const elem = document.getElementById('div');
    if (container && elem) {
      unmountComponentAtNode(elem);
      container.remove();
    }

    container = null;
  });

  it('renders navbar', () => {
    expect(container?.getElementsByClassName('navbar').length)
      .toBe(1);
  });

  it('renders navbar with 3 links', () => {
    expect(container?.getElementsByClassName('navbar-item').length)
      .toBe(3);
    expect(container?.getElementsByClassName('navbar-item')[0].textContent)
      .toBe('Home');
    expect(container?.getElementsByClassName('navbar-item')[1].textContent)
      .toBe('Pokemons');
    expect(container?.getElementsByClassName('navbar-item')[2].textContent)
      .toBe('Search');
  });

  describe('highlights clicked link', () => {
    it('pokemon link has light grey background', () => {
      const navPokemons = document.querySelector('#pokemon');

      expect(navPokemons?.className)
        .not.toContain('has-background-grey-lighter');

      act(() => {
        navPokemons?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(navPokemons?.className)
        .toContain('has-background-grey-lighter');
    });

    it('home link has light grey background', () => {
      const navHome = document.querySelector('#home');

      expect(navHome?.className)
        .not.toContain('has-background-grey-lighter');

      act(() => {
        navHome?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(navHome?.className)
        .toContain('has-background-grey-lighter');
    });

    it('search link has light grey background', () => {
      const navSearch = document.querySelector('#search');

      expect(navSearch?.className)
        .not.toContain('has-background-grey-lighter');

      act(() => {
        navSearch?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(navSearch?.className)
        .toContain('has-background-grey-lighter');
    });
  });
});
