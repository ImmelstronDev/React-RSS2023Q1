import { render, screen } from '@testing-library/react';
import React from 'react';
import { test } from 'vitest';
import NewForm from './form';

describe('FormData', () => {
  test('render form page', () => {
    render(<NewForm />);
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Price:')).toBeInTheDocument();
    expect(screen.getByText('Caliber:')).toBeInTheDocument();
    expect(screen.getByText('Ammunition:')).toBeInTheDocument();
    expect(screen.getByText('Damage:')).toBeInTheDocument();
    expect(screen.getByText('Effective distance:')).toBeInTheDocument();
    expect(screen.getByText('Reload:')).toBeInTheDocument();
    expect(screen.getByText('Image weapon:')).toBeInTheDocument();
    expect(screen.getByText('Date of creation:')).toBeInTheDocument();
    expect(screen.getByText('Would you like to receive our newsletter?')).toBeInTheDocument();
    expect(screen.getByText('Confirmation to add to the armory list?')).toBeInTheDocument();
  });
});
