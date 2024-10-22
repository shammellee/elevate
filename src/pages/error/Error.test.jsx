import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RootPage, { loader as rootLoader } from 'pages/root/Root';
import ErrorPage from './Error';

test('Renders error page', async () => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});

  const router = createMemoryRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
    }], {
    initialEntries: ['/non-existent-path']
  });

  render(<RouterProvider router={router} />);
  const element = await screen.findByText(/uh.*oh/i);
  expect(element).toBeInTheDocument();
  console.warn.mockRestore();
});

