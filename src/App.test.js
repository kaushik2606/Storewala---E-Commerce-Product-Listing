import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar and sidebar content', () => {
  render(<App />);

  expect(screen.getByText(/navbar/i)).toBeInTheDocument();
  expect(screen.getByText(/sidebar/i)).toBeInTheDocument();
});
