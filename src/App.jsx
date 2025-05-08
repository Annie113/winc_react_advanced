import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventsPage } from './EventsPage';
import { AddEventPage } from './pages/AddEventPage'; // Import your form page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />
<<<<<<< HEAD
        <Route path="/add-event" element={<AddEventPage />} />
        {/* Optionally add a 404 fallback route */}
=======
        <Route path="/events" element={<EventsPage />} /> {/* ✅ Add this */}
        <Route path="/add-event" element={<AddEventPage />} />
>>>>>>> b9a96ad (update all changes)
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
