import React from 'react';
import '../styles/features.css'; // Assuming you have a CSS file for styling

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "📧",
      title: "Instant Replies, Sent in Your Tone",
      description: "TradeMate doesn't just write — it sends professional replies for you, using your natural style.",
      starred: true,
      bgColor: "#fef2f2"
    },
    {
      id: 2,
      icon: "📅",
      title: "Smart Booking Calendar",
      description: "Synced to your calendar, eliminates back-and-forth scheduling",
      starred: false,
      bgColor: "#f0f9ff"
    },
    {
      id: 3,
      icon: "📋",
      title: "Auto-Quoting System",
      description: "Pulls from your pricing database to generate accurate quotes instantly",
      starred: false,
      bgColor: "#f3f4f6"
    },
    {
      id: 4,
      icon: "🧾",
      title: "Automated Invoicing",
      description: "Professional invoices sent automatically after job completion",
      starred: false,
      bgColor: "#f0f9ff"
    },
    {
      id: 5,
      icon: "💬",
      title: "WhatsApp Alerts",
      description: "Get notified only when the system needs your input or approval",
      starred: false,
      bgColor: "#f0fdf4"
    },
    {
      id: 6,
      icon: "🤖",
      title: "Built to Sound Like You",
      description: "We use your past messages so every reply feels like it came from you, not a robot.",
      starred: true,
      bgColor: "#fef2f2"
    }
  ];

  const stats = [
    {
      id: 1,
      icon: "⚡",
      number: "30s",
      description: "Average response time",
      color: "#ef4444"
    },
    {
      id: 2,
      icon: "🕒",
      number: "24/7",
      description: "Always working for you",
      color: "#f97316"
    },
    {
      id: 3,
      icon: "✅",
      number: "95%",
      description: "Customer satisfaction",
      color: "#22c55e"
    }
  ];

  return (
    <div className="powerful-features-section">
      {/* Header */}
      <div className="features-header">
        <div className="badge">
          Powerful Features
        </div>
        <h1 className="features-title">
          Everything You Need to <span className="highlight-text">Automate Your Trade Business</span>
        </h1>
        <p className="features-subtitle">
          Our smart assistant handles the entire customer journey so you can focus on delivering great work
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="feature-card"
            style={{ backgroundColor: feature.bgColor }}
          >
            <div className="feature-header">
              <div className="feature-icon2">{feature.icon}</div>
              {/* Removed the star-icon from header to avoid double stars */}
            </div>
            <h3 className="feature-title">
              {feature.starred && <span className="star-inline"> </span>}
              {feature.title}
            </h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section - Smaller boxes */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-number" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
