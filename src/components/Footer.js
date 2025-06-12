import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';


function Footer() {
  return (
    <footer>
      <ul className='footer-links'>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-of-service">Terms of Service</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
