import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders Navbar component', () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  const homeLink = getByText(/Home/i);
  const favoritesLink = getByText(/Favorites/i);

  expect(homeLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});
