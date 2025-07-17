import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Projects from '../Projects';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: 'Test Project',
            description: 'A test description',
            image: '/test-image.jpg',
            link: 'https://example.com',
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Projects component', () => {
  it('renders projects heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders a test project from fetch', async () => {
    render(<Projects />);

    await waitFor(() => {
      expect(screen.getByText(/test project/i)).toBeInTheDocument();
      expect(screen.getByText(/a test description/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /view project/i })).toBeInTheDocument();
    });
  });
});
