import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('Testing About Page', () => {
  it('should render Form', () => {
    render(<AboutUs />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/About us/i);
  });
});
