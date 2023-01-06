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
  });
});
