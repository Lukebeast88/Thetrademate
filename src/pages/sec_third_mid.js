import React from 'react';
import '../styles/sec_third_midpage.css'; // Assuming you have a CSS file for styling

const Sec_third_mid = () => {
  const mainStats = [
    {
      id: 1,
      icon: "⏰",
      number: "100x",
      description: "More likely to win if you reply in 5 mins",
      color: "#ff6b6b"
    },
    {
      id: 2,
      icon: "📉",
      number: "7%",
      description: "Only 7% of trades respond fast enough",
      color: "#ff6b6b"
    },
    {
      id: 3,
      icon: "🏆",
      number: "£500+",
      description: "Cost of missing just 1 job/week",
      color: "#ff6b6b"
    }
  ];

  const comparisonStats = [
    {
      id: 1,
      number: "42 hours",
      description: "Average trade response time",
      type: "negative",
      bgColor: "#fef2f2",
      textColor: "#dc2626"
    },
    {
      id: 2,
      number: "50%",
      description: "Leads never get a reply",
      type: "negative",
      bgColor: "#fef2f2",
      textColor: "#dc2626"
    },
    {
      id: 3,
      number: "<30s",
      description: "TradeMate response time",
      type: "positive",
      bgColor: "#f0fdf4",
      textColor: "#16a34a"
    }
  ];

  return (
    <div className="stats-section">
      {/* Header */}
      <div className="stats-header">
        <div className="badge">
          The Numbers Don't Lie
        </div>
        <h1 className="stats-title">
          You're Losing Jobs Because{' '}
          <span className="highlight-text">You're Too Slow to Respond</span>
        </h1>
        <p className="stats-subtitle">
          Most trades reply hours later — or not at all. TradeMate sends real replies, instantly,{' '}
          before your competitors even open the message.
        </p>
      </div>

      {/* Main Statistics */}
      <div className="main-stats-grid">
        {mainStats.map((stat) => (
          <div key={stat.id} className="stat-card main-stat">
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-number" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="stat-description">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Statistics */}
      <div className="comparison-stats-grid">
        {comparisonStats.map((stat) => (
          <div 
            key={stat.id} 
            className={`stat-card comparison-stat ${stat.type}`}
            style={{ backgroundColor: stat.bgColor }}
          >
            <div 
              className="comparison-number"
              style={{ color: stat.textColor }}
            >
              {stat.number}
            </div>
            <div className="comparison-description">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec_third_mid;
