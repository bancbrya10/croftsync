import React, { useState, useEffect } from "react";
import "./contactsection.css";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="cs-section">
      <h2 className="contact-h2">Contact</h2>
      <p className="contact-p">
        Tell us about your systems and goals — we’ll recommend practical steps
        to reduce manual HR processes, improve SSO security, and automate user
        provisioning.
      </p>

      {!submitted ? (
        <form
          action="https://formspree.io/f/mgvnpaly"
          method="POST"
          className="cs-form"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="company" placeholder="Company (optional)" />

          {/* 👇 NEW: Package Dropdown */}
          <label htmlFor="package" className="cs-label">
            Select Your Package
          </label>
          <select id="package" name="package" required className="cs-select">
            <option value="">-- Choose an Option --</option>
            <option value="integration-audit">
              Integration Audit
            </option>
            <option value="automation-pilot">
              2-Week Automation Pilot
            </option>
            <option value="managed-support">
              Managed Integration Support
            </option>
            <option value="custom">Custom Project / Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Please provide any relevant details you wish to share"
            rows="4"
            required
          />

          {/* Honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button type="submit" className="cs-btn cs-btn--accent">
            Send Message
          </button>
        </form>
      ) : (
        <div className="cs-thankyou">
          <h3 className="cs-thankyou__title">Thank you for reaching out!</h3>
          <p className="cs-thankyou__text">
            We’ve received your message and will get back to you shortly.
          </p>
        </div>
      )}
    </section>
  );
}
