import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo192.png" alt="Company Logo" className="w-8 h-8" />
          <span className="text-lg font-bold">Tech Services Co.</span>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;