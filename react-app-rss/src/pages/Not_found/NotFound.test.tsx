import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Testing Not found Page', () => {
  it('should render Form', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/NotFound/i);
  });
});
