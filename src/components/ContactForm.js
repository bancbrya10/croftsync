import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_d5lz38y',     // Replace with your EmailJS service ID
      'template_bpi7m5e',    // Replace with your EmailJS template ID
      form.current,
      'NgwNi1RX_LTosAVYR'      // Replace with your EmailJS public key
    ).then(() => {
      setStatus('Message sent successfully!');
      form.current.reset();
    }).catch((error) => {
      setStatus('Failed to send message. Please try again later.');
      console.error(error);
    });
  };

  return (

    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="business" placeholder='Name of your Business' />
        <textarea name="description" placeholder="Provide a brief description of your integration needs" rows="10" required />
        <button type="submit">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
