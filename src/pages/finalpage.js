import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/finalpage.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'How It Works', href: '/#howitworks' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#helpfaq' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/#helpfaq' },
    { name: 'Contact', href: '/#bookademo' },
    { name: 'Training', href: '/#features' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy-policy' },
    { name: 'Terms of Service', href: '#terms-of-service' },
    { name: 'Cookie Policy', href: '#cookie-policy' },
    { name: 'GDPR Compliance', href: '#gdpr-compliance' }
  ];

  const handleChatClick = () => {
    // Navigate to book demo section using hash routing
    window.location.hash = '#bookademo';
  };

  return (
    <footer className="footer-section">
      {/* Chat Support Section */}
      <div className="chat-support-section">
        <div className="chat-container">
          <div className="chat-icon">💬</div>
          <h2 className="chat-title">Still got questions?</h2>
          <p className="chat-subtitle">
            Chat with us live! Our team is online and ready to help.
          </p>
          <button onClick={handleChatClick} className="chat-button">
            Chat with us live!
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img 
                src="/logo.jpg" 
                alt="TradeMate Logo" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="logo-fallback" style={{display: 'none'}}>TM</span>
              <span className="brand-name">
                TheTrade<span className="mate-text">Mate</span>
              </span>
            </div>
            <p className="brand-description">
              Built by trades, for trades. We know what it's like to be on the tools.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:hello@thetrademate.com" className="contact-link">
                  hello@thetrademate.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+442012345678" className="contact-link">
                  +44 20 1234 5678
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">London, UK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="column-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3 className="column-title">Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3 className="column-title">Legal</h3>
            <ul className="footer-links">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
