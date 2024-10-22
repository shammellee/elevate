import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './reset.css';
import './index.css';
import RootPage, { loader as rootLoader } from './pages/root/Root';
import UserPage, { loader as userLoader } from './pages/users/User';
import ErrorPage from './pages/error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'users/:user_id',
        element: <UserPage />,
        loader: userLoader
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

