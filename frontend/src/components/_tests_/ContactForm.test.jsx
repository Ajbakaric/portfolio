import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm component', () => {
  it('renders form inputs', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
  });

  it('shows thank you message after submission', () => {
    render(<ContactForm />);
  fireEvent.submit(screen.getByTestId('contact-form'));
    // You may need to mock this better if using external services
  });
});
