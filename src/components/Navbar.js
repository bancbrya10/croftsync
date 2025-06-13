import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Prevent collapse on mobile
      if (mobile) {
        setCollapsed(false);
      }
    };

    handleResize(); // Run on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar ${!isMobile && collapsed ? 'collapsed' : ''}`}>
      {!isMobile && (
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
      )}
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" />
            {!collapsed && <span>Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/services">
            <FaServicestack className="nav-icon" />
            {!collapsed && <span>Services</span>}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle className="nav-icon" />
            {!collapsed && <span>About</span>}
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope className="nav-icon" />
            {!collapsed && <span>Contact</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
