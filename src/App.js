import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './components/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy';
import logo from './assets/logo-full.png'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <header>
          <div className='top-of-page-container' />
          <div className='logo-container'>
            <div className='img-container'>
              <img src={logo} alt='CroftSync Logo' />
            </div>
          </div>
        </header>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
