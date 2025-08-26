// FirstPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/firstpage.css'; // Assuming you have a CSS file for styling

// FirstPage component

function FirstPage() {
  return (
    <>
      <header className="navbar">
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
        <nav className="nav-links">
          <Link to="/#home">Home</Link>
          <Link to="/#howitworks">How It Works</Link>
          <Link to="/#features">Features</Link>
          <Link to="/#pricing">Pricing</Link>
          <Link to="/#bookademo">Book Demo</Link>
          <Link to="/#helpfaq">Help & FAQs</Link>
        </nav>
        <Link to="/#bookademo" className="consultation-btn">Book a Free Consultation</Link>
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
