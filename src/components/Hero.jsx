import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Sahithi Vangala</h1>
        <h2>Graduate Student | Data Analyst</h2>
        <div className="hero-cta">
        <a 
  href={`${process.env.PUBLIC_URL}/resume.pdf`} 
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  View Resume
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;