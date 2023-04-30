import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';

import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from './utils/renderWithProviders';
import AppRouter from './AppRouter';

const data = [
  {
    img: 'https://huntzone.varshevsky.com/wp-content/uploads/2019/08/Bornheim-No.-3.jpg',
    name: 'Bornheim No. 3',
    price: 146,
    caliber: 'compact',
    ammo: '5+1/10',
    damage: 74,
    distance: 64,
    reload: 3,
    id: 1,
  },
  {
    img: 'https://huntzone.varshevsky.com/wp-content/uploads/2019/08/Bornheim-No3-Extended.jpg',
    name: 'Bornheim No. 3 Extended',
    price: 203,
    caliber: 'compact',
    ammo: '8+1/10',
    damage: 74,
    distance: 6,
    reload: 8,
    id: 2,
  },
];

global.fetch = vi.fn().mockResolvedValueOnce({
  json: () => Promise.resolve(data),
});

describe('App', () => {
  it('Renders React components!', () => {
    renderWithProviders(
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Page');
  });
});
