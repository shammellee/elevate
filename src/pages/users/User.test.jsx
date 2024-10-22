import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen} from '@testing-library/react';

import UserPage, { loader as userLoader } from './User';

test('Renders user page', async () => {
  const router = createMemoryRouter([
    {
      path: 'users/:user_id',
      element: <UserPage />,
      loader: userLoader
    }], {
    initialEntries: ['/users/0']
  });

  render(<RouterProvider router={router} />);
  const titleElement = await screen.findByText(/Your Stats/);
  expect(titleElement).toBeInTheDocument();
});
