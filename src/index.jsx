import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { childAppRoutes } from './Components/utils/childAppRoutes';
import { ContextProvider } from './Components/utils/global.context';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: childAppRoutes,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
