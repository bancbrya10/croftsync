import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import '../index.css'

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in on component mount
    setFadeIn(true);
  }, []);

  return (
    <>
      <title>CroftSync</title>
      <div className={`page-container ${fadeIn ? 'fade-in' : ''}`}>
        <div>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
