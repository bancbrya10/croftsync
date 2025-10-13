import React, { useState, useEffect } from "react";
import './contactsection.css';

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
                headers: { "Accept": "application/json" },
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
                We’d love to learn about your systems and discuss how CroftSync can help you connect them.
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
                    <textarea name="message" placeholder="How can we help?" rows="4" required></textarea>

                    {/* Honeypot spam trap */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    <button type="submit" className="cs-btn">Send Message</button>
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
