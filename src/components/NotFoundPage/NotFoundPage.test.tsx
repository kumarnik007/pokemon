import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';

import { NotFoundPage } from './NotFoundPage';

let container: HTMLDivElement | null = null;

describe('NotFoundPage', () => {
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

  it('renders with correct message', () => {
    act(() => {
      createRoot(container as HTMLDivElement)
        .render(<NotFoundPage />);
    });
    expect(container?.textContent)
      .toBe('Page not found');
  });
});
