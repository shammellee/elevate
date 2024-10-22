import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RootPage, { loader as rootLoader } from './Root';

test('Renders root page', async () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <RootPage />,
      loader: rootLoader,
    }], {
    initialEntries: ['/']
  });

  render(<RouterProvider router={router} />);
  const titleElement = await screen.findByText(/Users/);
  expect(titleElement).toBeInTheDocument();
});

