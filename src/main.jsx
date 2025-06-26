import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { AddEventPage } from './pages/AddEventPage';
import EventsPage from './pages/EventsPage';
import EventDetails from './pages/EventDetailPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';

import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

import theme from '/src/theme/theme.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'event/:eventId',
        element: <EventDetails />,
      },
      {
        path: 'add-event',
        element: <AddEventPage />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
      {
        path: 'contact',     
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
