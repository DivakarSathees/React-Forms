import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Main from './components/Main';
import Registrationform from './components/Registartionform';

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


describe('Registrationform', () => {
  test('renders the form title', () => {
    render(
    <MemoryRouter>
    <Registrationform />
    </MemoryRouter>);
    const title = screen.getByText(/Registration Form/i);
    console.log(title)
    expect(title).toBeInTheDocument();
  });



  test('should display required error messages on form submit', async () => {
    render(
      <MemoryRouter>
        <Registrationform />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const nameError = screen.getByText(/Name is required/i);
      const emailError = screen.getByText(/Email is required/i);
      const phoneError = screen.getByText(/Phone number is required/i);
      const passportError = screen.getByText(/Passport number is required/i);
      const travelDateError = screen.getByText(/Travel date is required/i);
      const returnDateError = screen.getByText(/Return date is required/i);
      const destinationError = screen.getByText(/Destination is required/i);
      const reasonError = screen.getByText(/Reason for travel is required/i);

      expect(nameError).toBeInTheDocument();
      expect(emailError).toBeInTheDocument();
      expect(phoneError).toBeInTheDocument();
      expect(passportError).toBeInTheDocument();
      expect(travelDateError).toBeInTheDocument();
      expect(returnDateError).toBeInTheDocument();
      expect(destinationError).toBeInTheDocument();
      expect(reasonError).toBeInTheDocument();
    });
  });


  test('should display invalid error messages on form submit', async () => {
    render(
      <MemoryRouter>
        <Registrationform />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/Name:/i);
    fireEvent.change(nameInput, { target: { value: 'test name' } });

    const emailInput = screen.getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    const phoneInput = screen.getByLabelText(/Phone:/i);
    fireEvent.change(phoneInput, { target: { value: '123' } });

    const passportInput = screen.getByLabelText(/Passport:/i);
    fireEvent.change(passportInput, { target: { value: '123456789' } });

    const travelDateInput = screen.getByLabelText(/Travel date:/i);
    fireEvent.change(travelDateInput, { target: { value: '2022-01-01' } });

    const returnDateInput = screen.getByLabelText(/Return date:/i);
    fireEvent.change(returnDateInput, { target: { value: '' } });

    const destinationInput = screen.getByLabelText(/Destination:/i);
    fireEvent.change(destinationInput, { target: { value: '' } });

    const reasonInput = screen.getByLabelText(/Reason for travel:/i);
    fireEvent.change(reasonInput, { target: { value: 'Job Tour' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const emailError = screen.getByText(/Email is invalid/i);
      const phoneError = screen.getByText(/Phone number is invalid/i);
      const returnDateError = screen.getByText(/Return date should be after travel date/i);
      expect(emailError).toBeInTheDocument();
      expect(phoneError).toBeInTheDocument();
      expect(returnDateError).toBeInTheDocument();
  })
})
})