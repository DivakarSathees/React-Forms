import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Main from './components/Main';

test('renders Home link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders About us link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('About us')).toBeInTheDocument();
});

test('renders Destination link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('Destination')).toBeInTheDocument();
});

test('renders Contact Us link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});

test('renders About component for /about route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <About />
    </MemoryRouter>
  );
  expect(screen.getByTestId('about')).toBeInTheDocument();
});
test('renders Destination component for /destination route', () => {
  render(
    <MemoryRouter initialEntries={['/destination']}>
      <Destination />
    </MemoryRouter>
  );
  expect(screen.getByTestId('destination')).toBeInTheDocument();
});


test('renders Contact component for /contact route', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <Contact />
    </MemoryRouter>
  );
  expect(screen.getByTestId('contact')).toBeInTheDocument();
});


test('renders main component for / route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Main />
    </MemoryRouter>
  );
  expect(screen.getByTestId('/')).toBeInTheDocument();
});

test('renders main component for /** route', () => {
  render(
    <MemoryRouter initialEntries={['/**']}>
      <Main />
    </MemoryRouter>
  );
  expect(screen.getByTestId('/')).toBeInTheDocument();
});