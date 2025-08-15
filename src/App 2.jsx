import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventsPage } from '/src/pages/EventsPage';
import { AddEventPage } from '/src/pages/AddEventPage.jsx';
import { EventDetails } from '/src/pages/EventDetails';
import AboutUsPage from '/src/pages/AboutUsPage.jsx';
import ContactPage from '/src/pages/ContactPage.jsx'; 
import Navigation from '/src/components/Navigation'; 

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/events" element={<EventsPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
