import React, { useEffect } from 'react';
import '../styles/ninethpage.css';

const Ninethpage = () => {
  const demoFeatures = [
    {
      icon: "✅",
      text: "A real lead response sent instantly in your style"
    },
    {
      icon: "✅",
      text: "How the booking calendar works with your schedule"
    },
    {
      icon: "✅",
      text: "Automated quoting and invoicing in action"
    },
    {
      icon: "✅",
      text: "Q&A tailored to your specific business needs"
    }
  ];

  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://api.leadconnectorhq.com/js/form_embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="book-consultation-section">
      <div className="consultation-container">
        {/* Header */}
        <div className="consultation-header">
          <div className="badge">Book Your Demo</div>
          <h1 className="consultation-title">
            Book Your Free <span className="highlight">15-Minute Consultation</span>
          </h1>
          <p className="consultation-subtitle">See how you could save 10+ hours/month</p>
          <p className="consultation-description">
            We'll show you exactly how TradeMate saves you time, wins more jobs, and handles admin — live and personalised.
          </p>
          <div className="urgency-note">
            <span className="urgency-dot">🔴</span>
            <span className="urgency-text">Spots fill up fast — reserve yours before the calendar fills</span>
          </div>
        </div>

        <div className="consultation-content">
          {/* Left Side - Demo Info */}
          <div className="demo-info">
            <h2 className="demo-title">What you'll see in your demo:</h2>
            
            <ul className="demo-features">
              {demoFeatures.map((feature, index) => (
                <li key={index} className="demo-feature">
                  <span className="feature-check">✅</span>
                  <span className="feature-text">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Inline GoHighLevel Form */}
          <div className="consultation-form-container">
            
            
            {/* Display the actual form inline using iframe */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/VIlBeQKrxRiw6hlAIdAD"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              title="Book Your Consultation Form"
              className="ghl-form-iframe"
              allow="geolocation; microphone; camera"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ninethpage;
