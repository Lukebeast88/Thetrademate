import React from 'react';
import '../styles/seventhpage.css';

const SeventhPage = () => {
  const benefits = [
    {
      id: 1,
      title: "Win More Jobs",
      description: "Quick responses mean you beat competitors to the punch"
    },
    {
      id: 2,
      title: "Never Miss a Lead",
      description: "24/7 smart assistant captures every opportunity"
    },
    {
      id: 3,
      title: "Free Up Your Time",
      description: "Focus on the work, not admin and phone calls"
    },
    {
      id: 4,
      title: "Look More Professional",
      description: "Instant, polished responses every time"
    },
    {
      id: 5,
      title: "No More Double Bookings",
      description: "Smart calendar prevents scheduling conflicts"
    },
    {
      id: 6,
      title: "Get Paid Faster",
      description: "Automated invoicing speeds up payments"
    }
  ];

  return (
    <div className="why-choose-section">
      {/* Header */}
      <div className="why-choose-header">
        <div className="badge">Why Choose TradeMate?</div>
        <h1 className="hero-section-title1">
          Most Tools Write Drafts. TradeMate <span className="highlight">Actually Sends Replies.</span>
        </h1>
        <p className="hero-section-subtitle">
          Every enquiry gets a real reply, in your tone, instantly. No waiting. No missed jobs.<br />
          Just more work, less admin.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-content">
              <div className="title-row">
                <div className="check-icon">✅</div>
                <h3 className="benefit-title">{benefit.title}</h3>
              </div>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventhPage;
