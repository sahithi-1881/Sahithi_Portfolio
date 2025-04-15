import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setIsMenuOpen(false); // Close menu on mobile after selection
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on resize (if window becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Sahithi Vangala</div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li 
            className={active === 'home' ? 'active' : ''} 
            onClick={() => handleClick('home')}
          >
            Home
          </li>
          <li 
            className={active === 'about' ? 'active' : ''} 
            onClick={() => handleClick('about')}
          >
            About
          </li>
          <li 
            className={active === 'experience' ? 'active' : ''} 
            onClick={() => handleClick('experience')}
          >
            Experience
          </li>
          <li 
            className={active === 'skills' ? 'active' : ''} 
            onClick={() => handleClick('skills')}
          >
            Skills
          </li>
          <li 
            className={active === 'projects' ? 'active' : ''} 
            onClick={() => handleClick('projects')}
          >
            Projects
          </li>
          <li 
            className={active === 'contact' ? 'active' : ''} 
            onClick={() => handleClick('contact')}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;