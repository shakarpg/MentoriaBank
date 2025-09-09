import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      name: 'John Doe',
      account: { number: '123', agency: '456', balance: 1000, limit: 2000 },
      card: { number: '1111', limit: 5000 }
    })
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders user name after fetching data', async () => {
  render(<Dashboard />);

  await waitFor(() => {
    expect(screen.getByText('Bem-vindo, John Doe')).toBeInTheDocument();
  });
});
