// FirstPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/firstpage.css'; // Assuming you have a CSS file for styling

// FirstPage component
function FirstPage() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <img 
              src="/logo.jpg" 
              alt="TradeMate Logo" 
              className="logo-image"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline-block';
              }}
            />
            <span className="logo-fallback" style={{display: 'none'}}>TM</span>
            <span className="logo-text">
              TheTrade<span className="mate-text">Mate</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links desktop-nav">
            <Link to="/#home">Home</Link>
            <Link to="/#howitworks">How It Works</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/#bookademo">Book Demo</Link>
            <Link to="/#helpfaq">Help & FAQs</Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link to="/#bookademo" className="consultation-btn desktop-btn">
            Book a Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <Link to="/#home" onClick={closeMobileMenu}>Home</Link>
            <Link to="/#howitworks" onClick={closeMobileMenu}>How It Works</Link>
            <Link to="/#features" onClick={closeMobileMenu}>Features</Link>
            <Link to="/#pricing" onClick={closeMobileMenu}>Pricing</Link>
            <Link to="/#bookademo" onClick={closeMobileMenu}>Book Demo</Link>
            <Link to="/#helpfaq" onClick={closeMobileMenu}>Help & FAQs</Link>
            <Link to="/#bookademo" className="consultation-btn mobile-btn" onClick={closeMobileMenu}>
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
      </header>

      <section className="hero">
        <div className="hero-background">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="hero-content">
          <p className="tagline">For Busy UK Tradespeople and Service Pros</p>
          <h1 className="main-title">
            TradeMate Replies — So You
            <br />
            Don't Have To.
          </h1>
          <h2 className="subtitle1">Book 3x More Jobs, Save 12+ Hours/Week</h2>
          <p className="description">
            Most tools leave you with a draft. TradeMate actually replies to your leads instantly —
            sounding like you, while you're still on the tools.
          </p>
          <div className="hero-buttons">
            <Link to="/#bookademo" className="primary-btn">Book a Free Consultation</Link>
            <Link to="/#howitworks" className="secondary-btn">See How It Works</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstPage;
