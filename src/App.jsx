import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wikipedia from './components/Wikipedia';
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/wikipedia" replace />} />
            <Route path="/wikipedia" element={<Wikipedia />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
