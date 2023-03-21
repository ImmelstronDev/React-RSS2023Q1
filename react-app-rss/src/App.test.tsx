import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';

import AppRouter from './AppRouter';

describe('App', () => {
  it('Renders React components!', () => {
    // Arrange
    render(<AppRouter />);
    // act
    // expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Page');
  });
});
