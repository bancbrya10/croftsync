import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in on component mount
    setFadeIn(true);
  }, []);

  return (
    <>
      <title>CroftSync</title>
      <div className={`page-container ${fadeIn ? 'fade-in' : ''}`}>
        <div className='header-container'><h1 className='contact-h1'>Contact Us</h1></div>
        <div className='header-container'><h3 className='contact-h3'>Fill out the form below to get started today!</h3></div>
        <ContactForm />
      </div>
    </>
  );

};

export default Contact;  // Default export
