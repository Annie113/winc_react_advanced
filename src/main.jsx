import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { AddEventPage } from './pages/AddEventPage'; // ✅ imported
import EventsPage from './pages/EventsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import EventDetails from './pages/EventDetailPage';

const router = createBrowserRouter([
  {
    path: '/',             // Root path
    element: <Root />,
    children: [
      {
        path: '',    // Explicitly define /events
        element: <HomePage />,
      },
      {
        path: 'events',    // Explicitly define /events
        element: <EventsPage />,
      },
      {
        path: 'event/:eventId',  // Correct dynamic path for event detail
        element: <EventDetails />,
      },
      {
        path: 'add-event', // Add event path
        element: <AddEventPage />,
      },
    ],
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
