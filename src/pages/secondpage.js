import React from 'react';
import '../styles/secondpage.css'; // Assuming you have a CSS file for styling

const SecondPage = () => {
  const socialProof = {
    count: "+50",
    avatars: ["MT", "SW", "JC"],
    text: "Join 50+ happy trade businesses",
    subtitle: "Already saving time with TradeMate"
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "It replies to my leads before I've even seen them. My customers think it's me — and it books the job.",
      name: "Sarah",
      service: "Plumbing Services",
      initials: "SP"
    },
    {
      id: 2,
      quote: "Saved me 8 hours/week — replies just like I would. Game changer for my business.",
      name: "Mike",
      service: "Electrical Services",
      initials: "ME"
    },
    {
      id: 3,
      quote: "Never miss a lead again. TradeMate works 24/7 while I focus on the actual work.",
      name: "James",
      service: "Carpentry Services",
      initials: "JC"
    },
    {
      id: 4,
      quote: "My response time went from hours to seconds. Customers love the instant replies.",
      name: "Emma",
      service: "Painting Services",
      initials: "EP"
    },
    {
      id: 5,
      quote: "Doubled my bookings in the first month. The automation is seamless and professional.",
      name: "David",
      service: "Roofing Services",
      initials: "DR"
    }
  ];

  // Triple the testimonials for truly seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <>
      {/* Info Cards Container - Stays in the box */}
      <div className="trademate-container">
        {/* Did You Know Section */}
        <div className="info-card">
          <div className="icon-container clock-icon">
            <span className="clock-emoji">🕐</span>
          </div>
          <div className="content">
            <h3 className="title1">
              <span className="highlight">Did you know?</span> On average, each employee in UK businesses spends over 11 hours a week managing emails, many outside working hours.
            </h3>
            <p className="subtitle">
              TradeMate automates your lead responses and bookings, freeing you to focus on growing your business.
            </p>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="info-card">
          <div className="icon-container strategy-icon">
            <span className="strategy-emoji">📈</span>
          </div>
          <div className="content">
            <p className="description1">
              TradeMate doesn't just help manage your workload — it empowers your business to grow by freeing your time to focus on strategy and scaling.
            </p>
          </div>
        </div>

        {/* WhatsApp Management Section */}
        <div className="info-card">
          <div className="icon-container whatsapp-icon">
            <span className="whatsapp-emoji">💬</span>
          </div>
          <div className="content">
            <p className="description1">
              TradeMate automatically manages replies and only notifies you via WhatsApp if manual input is truly needed. You stay in control—without interruptions.
            </p>
          </div>
        </div>

        {/* Workflow Cards */}
        <div className="workflow-section">
          <div className="workflow-card new-lead">
            <h4 className="workflow-title">New Lead!</h4>
            <p className="workflow-subtitle">Auto-replied in 30 seconds</p>
          </div>
          
          <div className="workflow-card job-booked">
            <h4 className="workflow-title">Job Booked</h4>
            <p className="workflow-subtitle">Tomorrow 9:00 AM</p>
          </div>
          
          <div className="workflow-card invoice-sent">
            <h4 className="workflow-title">Invoice Sent</h4>
            <p className="workflow-subtitle">Payment received</p>
          </div>
        </div>
      </div>

      {/* Carousel Section - OUTSIDE the container box */}
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {infiniteTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <span className="author-initials">{testimonial.initials}</span>
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-service">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof Section - MOVED HERE: Just below carousel */}
      <div className="social-proof-container">
        <div className="social-proof">
          <div className="social-avatars">
            {socialProof.avatars.map((avatar, index) => (
              <div key={index} className="social-avatar">{avatar}</div>
            ))}
            <div className="social-count">{socialProof.count}</div>
          </div>
          <div className="social-text">
            <div className="social-title">{socialProof.text}</div>
            <div className="social-subtitle">{socialProof.subtitle}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
