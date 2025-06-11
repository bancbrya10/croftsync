import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleNavbar}>
        {collapsed ? '☰' : '×'}
      </button>
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
            {!collapsed && <span>About Us</span>}
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
