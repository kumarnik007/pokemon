import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';

import { HomePage } from './HomePage';

let container: HTMLDivElement | null = null;

describe('HomePage', () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    const elem = document.getElementById('div');
    if (container && elem) {
      unmountComponentAtNode(elem);
      container.remove();
    }

    container = null;
  });

  it('renders with correct welcome message', () => {
    act(() => {
      createRoot(container as HTMLDivElement)
        .render(<HomePage />);
    });
    expect(container?.textContent)
      .toBe(
        'Pokemon Home'
        + 'Welcome to this application!'
        + 'Get a list of all pokemons by visting the Pokemons page from the above navigation bar.'
        + 'Try searching for a pokemon by visiting the Search page from the above navigation bar.');
  });
});
