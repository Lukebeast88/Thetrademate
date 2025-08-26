import React from 'react';
import '../styles/fourthpage.css'; // Assuming you have a CSS file for styling

function FourthPage() {
  return (
    <div className="fifth-page">
      <section className="intro-section">
        <h2 className="intro-title">Powerful Features</h2>
        <h3 className="intro-subtitle">
          <span className="subtitle-black">Everything You Need to Automate Your Trade Business</span>
          <span className="subtitle-orange"></span>
        </h3>
        <p className="intro-description">
          Our smart assistant handles the entire customer journey so you can focus on delivering great work
        </p>
      </section>
      <section className="features-section">
        <div className="features-container">
          <div className="feature-item">
            <span className="feature-logo">✉️</span>
            <div className="feature-content">
              <h3>★ Instant Replies, Sent in Your Tone</h3>
              <p>TradeMate doesn't just write — it sends professional replies for you, using your natural style.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-logo">📅</span>
            <div className="feature-content">
              <h3>Smart Booking Calendar</h3>
              <p>Synced to your calendar, eliminates back-and-forth scheduling</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-logo">💰</span>
            <div className="feature-content">
              <h3>Auto-Quoting System</h3>
              <p>Pulls from your pricing database to generate accurate quotes instantly</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-logo">📋</span>
            <div className="feature-content">
              <h3>Automated Invoicing</h3>
              <p>Professional invoices sent automatically after job completion</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-logo">📱</span>
            <div className="feature-content">
              <h3>WhatsApp Alerts</h3>
              <p>Get notified only when the system needs your input or approval</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-logo">🎙️</span>
            <div className="feature-content">
              <h3>★ Built to Sound Like You</h3>
              <p>We use your past messages so every reply feels like it came from you, not a robot.</p>
            </div>
          </div>
          {/* Stat boxes with smaller size and single star */}
          <div className="feature-item stat-box">
            <span className="feature-logo">⚡</span>
            <div className="feature-content stat-content">
              <h3>30s</h3>
              <p>Average response time</p>
            </div>
          </div>
          <div className="feature-item stat-box">
            <span className="feature-logo">🕒</span>
            <div className="feature-content stat-content">
              <h3>24/7</h3>
              <p>Always working for you</p>
            </div>
          </div>
          <div className="feature-item stat-box">
            <span className="feature-logo">✅</span>
            <div className="feature-content stat-content">
              <h3>95%</h3>
              <p>Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthPage;
