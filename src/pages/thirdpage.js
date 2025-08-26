import React from 'react';
import '../styles/thirdpage.css'; // Assuming you have a CSS file for styling

const ThirdPage = () => {
  const steps = [
    {
      id: 1,
      icon: "📧",
      title: "Customer Gets in Touch",
      subtitle: "Email, website, or form",
      description: ""
    },
    {
      id: 2,
      icon: "📧",
      title: "Instant Personal Reply Sent in Your Voice",
      subtitle: "",
      description: "Not a draft. TradeMate sends an actual reply — with pricing or booking options — using how you normally speak to customers."
    },
    {
      id: 3,
      icon: "📅",
      title: "They Book Themselves",
      subtitle: "Your calendar, your rules",
      description: ""
    },
    {
      id: 4,
      icon: "🔧",
      title: "You Do the Work",
      subtitle: "No calls, no paperwork",
      description: ""
    },
    {
      id: 5,
      icon: "💰",
      title: "We Send the Invoice",
      subtitle: "Automatically. You get paid",
      description: ""
    }
  ];

  const features = [
    {
      id: 1,
      icon: "✅",
      text: "Replies are actually sent, not sitting in your inbox waiting.",
      type: "positive"
    },
    {
      id: 2,
      icon: "📱",
      text: "WhatsApp alerts only if you're needed. You stay in control.",
      type: "info"
    }
  ];

  return (
    <div className="how-it-works-section">
      {/* Header */}
      <div className="how-it-works-header">
        <div className="badge">
          How It Works
        </div>
        <h1 className="main-title">
          From Lead to Booked Job — <span className="highlight-text">Without You Lifting a Finger</span>
        </h1>
        <p className="main-subtitle">
          Your smart assistant handles the entire customer journey from first contact to payment
        </p>
      </div>

      {/* Process Flow */}
      <div className="process-container">
        <div className="process-line"></div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-container">
              <div className="step-number-wrapper">
                <div className="step-number">{step.id}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="step-card">
                <h3 className="step-title">{step.title}</h3>
                {step.subtitle && (
                  <p className="step-subtitle">{step.subtitle}</p>
                )}
                {step.description && (
                  <p className="step-description">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="features-section">
        {features.map((feature) => (
          <div key={feature.id} className={`feature-item ${feature.type}`}>
            <span className="feature-icon">{feature.icon}</span>
            <span className="feature-text">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
