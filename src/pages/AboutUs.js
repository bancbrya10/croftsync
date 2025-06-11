import React, { useEffect, useState } from 'react';
import headshot from '../assets/headshot.png'
import '../styles/AboutUs.css'
import '../index.css'

const AboutUs = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in on component mount
    setFadeIn(true);
  }, []);

  return (
    <>
      <title>CroftSync</title>
      <div className={`page-container ${fadeIn ? 'fade-in' : ''}`}>
        <div className='header-container'>
          <h1>About Us</h1>
        </div>
        <p className='about-section'>
          At CroftSync, we specialize in bridging the gap between business operations and technology
          through seamless software integrations. With deep expertise in identity providers, HRIS platforms,
          and a wide range of downstream applications, we empower organizations to streamline their digital ecosystems
          and reduce manual overhead.<br /><br />

          Our team designs and delivers scalable, secure, and highly efficient integrations that ensure your critical data
          flows exactly where it needs to—without delays, errors, or duplication. Whether you’re enabling single sign-on (SSO),
          automating user provisioning, or aligning cross-platform workflows, we bring the clarity and technical rigor
          to make complex integrations feel simple.<br /><br />

          What sets us apart is our focus on pragmatic, cost-effective solutions. We don’t over-engineer—we optimize.
          Our work often pays for itself in reclaimed employee hours, reduced risk, and faster onboarding cycles.
          From early planning to long-term support, CroftSync is your trusted partner in digital transformation.
        </p>
        <div className='img-container'>
          <img src={headshot} alt='Bancroft Headshot' />
        </div>
        <section>
          <p>Founder: Bryan Bancroft</p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
