import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Auth from './pages/Auth';
import SellCoupon from './pages/SellCoupon';
import HowItWorks from './pages/HowItWorks';
import SafetyGuidelines from './pages/SafetyGuidelines';
import FAQ from './pages/FAQ';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/sell" element={<SellCoupon />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/safety" element={<SafetyGuidelines />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/register" element={<Auth />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;