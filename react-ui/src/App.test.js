import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders self promotion link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/subscribe to technocratz/i);
  expect(linkElement).toBeInTheDocument();
});
