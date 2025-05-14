import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventsPage } from './pages/EventsPage'; // Ensure correct path if needed
import { AddEventPage } from './pages/AddEventPage'; // Import your form page
import { EventDetails } from './pages/EventDetails'; // Import EventPage for event details

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} /> {/* This will show events at the root */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/event/:eventId" element={<EventDetails />} /> {/* Route for event details */}
        {/* Optionally add a 404 fallback route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;