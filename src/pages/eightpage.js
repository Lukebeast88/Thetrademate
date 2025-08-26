import React, { useState } from 'react';
import '../styles/eightpage.css'; // Assuming you have a CSS file for styling

const EightPage = () => {
  const [isAnnual, setIsAnnual] = useState(true); // Default to annual

  const pricingPlans = [
    {
      id: 'starter',
      icon: '',
      name: 'Foundation - Instant Lead Capture & Response',
      monthlyPrice: 350,
      annualPrice: 280, // 20% discount for annual
      description: 'Perfect for solo trades ready to capture and convert leads instantly.',
      features: [
        'Automatic email responses in your tone',
        'Lead storage & tagging with hot/cold scoring',
        'Basic lead notifications via email',
      ],
      buttonText: 'Start capturing Leads Now',
      buttonStyle: 'secondary'
    },
    {
      id: 'pro',
      icon: '',
      name: 'Pro - Team Scheduling & Cash Flow',
      monthlyPrice: 550,
      annualPrice: 440, // 20% discount for annual
      description: 'Best for growing teams who need live booking, instant job alerts, and faster payments.',
      features: [
        'Everything in Foundation',
        'Live self-booking calendar - Customers secure slots instantly, reducing back-and-forth',
        'Automatic booking reminders',
        'Instant WhatsApp alerts for confirmed jobs and key updates',
        'Automatic invoice on job completion - get paid faster',
        'Customer portal for appointments & invoices',
        'Team seats (up to 3 users)',
      ],
      buttonText: 'Scale Your Team Bookings',
      buttonStyle: 'primary',
      popular: true,
      testimonial: '"Best value for growing trades" - Trusted by 50+ businesses'
    },
    {
      id: 'custom',
      icon: '',
      name: 'Master - Fully Customized Automation Hub',
      price: 'Contact',
      priceSubtext: 'for pricing',
      description: 'For enterprise projects and ambitious businesses wanting a system built entirely around them.',
      features: [
        '5-step engagement: Discovery -> Design -> Build -> Test -> Launch',
        'Early access to beta features',
        'Full website rebuild + automation integration',
        'ROI guarantee - 20% fewer no-shows',
      ],
      buttonText: 'Design Your Custom Workflow',
      buttonStyle: 'secondary'
    }
  ];

  const roiComparison = {
    without: {
      title: 'Without TradeMate:',
      description: 'Miss 4+ leads/month = £2,000+ lost',
      bgColor: '#fef2f2'
    },
    with: {
      title: 'With TradeMate:',
      description: 'Catch every lead = ROI of 2000%',
      bgColor: '#f0fdf4'
    }
  };

  return (
    <div className="pricing-section">
      {/* Header */}
      <div className="pricing-header">
        <div className="badge">
          Simple Pricing
        </div>
        <h1 className="pricing-title">
          Plans That <span className="highlight">Pay for Themselves — Fast</span>
        </h1>
        <p className="pricing-subtitle">
          Just 1 extra job per month covers your plan — most trades lose £500+ a month by replying too late.
        </p>
      </div>

      {/* Toggle */}
      <div className="pricing-toggle">
        <span className="save-badge">Save 20%</span>
        <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>Annual</span>
        <div className="toggle-switch" onClick={() => setIsAnnual(!isAnnual)}>
          <div className={`toggle-slider ${isAnnual ? 'annual' : 'monthly'}`}></div>
        </div>
        <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {/* Badge with crown icon ONLY shows when plan.popular is true (only for Pro plan) */}
            {plan.popular && (
              <div className="popular-badge">
                <span className="crown-icon">👑</span>
                Most Popular
              </div>
            )}
            
            
            <h3 className="plan-name">{plan.name}</h3>
            
            <div className="plan-pricing">
              {plan.price === 'Contact' ? (
                <div className="custom-pricing">
                  <span className="custom-price">Contact</span>
                  <span className="custom-subtext">{plan.priceSubtext}</span>
                </div>
              ) : (
                <>
                  <div className="price-display">
                    <span className="currency">£</span>
                    <span className="price">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  </div>
                  <span className="period">per month</span>
                  
                </>
              )}
            </div>

            <p className="plan-description">{plan.description}</p>

            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="check-icon">✅</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`plan-button ${plan.buttonStyle}`}>
              {plan.buttonText}
            </button>

            {plan.testimonial && (
              <div className="plan-testimonial">
                {plan.testimonial}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ROI Section */}
      <div className="roi-section">
        <h2 className="roi-title">Simple Math: TradeMate Pays for Itself</h2>
        <div className="roi-comparison">
          <div className="roi-card without" style={{ backgroundColor: roiComparison.without.bgColor }}>
            <h4 className="roi-card-title">{roiComparison.without.title}</h4>
            <p className="roi-card-description">{roiComparison.without.description}</p>
          </div>
          <div className="roi-card with" style={{ backgroundColor: roiComparison.with.bgColor }}>
            <h4 className="roi-card-title">{roiComparison.with.title}</h4>
            <p className="roi-card-description">{roiComparison.with.description}</p>
          </div>
        </div>
        <div className="guarantee">
          <span className="guarantee-icon">✅</span>
          <span className="guarantee-text">30-day money-back guarantee • No questions asked</span>
        </div>
      </div>
    </div>
  );
};

export default EightPage;
