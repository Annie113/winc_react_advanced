import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventsPage } from '/src/pages/EventsPage';
import { AddEventPage } from '/src/pages/AddEventPage.jsx';
import { EventDetails } from '/src/pages/EventDetails';
import AboutUsPage from '/src/pages/AboutUsPage.jsx'; // Import About Us page
import Navigation from '/src/components/Navigation'; // Import Navigation bar

function App() {
  return (
    <Router>
      <Navigation /> {/* Navigation shows on all pages */}
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} /> {/* About Us page route */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
