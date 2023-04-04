import { Navigate } from 'react-router-dom';
import { Home, Contact, Favs, Detail } from '../../Routes';

export const childAppRoutes = [
  {
    index: true,
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },

  {
    path: 'home',
    element: <Home />,
  },

  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'dentist/:dentistId',
    element: <Detail />,
  },
  {
    path: 'favs',
    element: <Favs />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },
];
