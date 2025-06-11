import React from 'react';
import '../styles/Footer.css';


function Footer() {
  return (
    <footer>
      <ul className='footer-links'>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
        <li><a href="https://www.linkedin.com/company/bancroft-industries">LinkedIn</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
