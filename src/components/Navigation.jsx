import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/events">All Events</Link>
        </li>
        <li>
          <Link to="/add-event">Add New Event</Link>
        </li>
      </ul>
    </nav>
  );
};
