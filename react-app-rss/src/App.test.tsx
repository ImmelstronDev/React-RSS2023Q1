import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  it('Renders React components!', () => {
    // Arrange
    render(<App />);
    // act
    // expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('React components!');
  });
});
