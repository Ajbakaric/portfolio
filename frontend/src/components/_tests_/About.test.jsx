import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About component', () => {
  it('renders heading and button', () => {
    render(<About />);
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hire me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
  });
});
