import React from 'react';
import '../styles/sixthpage.css'; // Assuming you have a CSS file for styling

const SixthPage = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "Before TradeMate, I missed jobs all the time. Now I never worry about replying to leads — it's all done while I'm on the tools.",
      author: "Mike Thompson",
      company: "Thompson Electrical",
      location: "Manchester",
      avatar: "MT",
      bgColor: "#f8f9fa"
    },
    {
      id: 2,
      rating: 5,
      quote: "The AI sounds exactly like me in emails. My customers can't even tell the difference. It's saved me hours every week.",
      author: "Sarah Williams",
      company: "Williams Plumbing Services",
      location: "Birmingham",
      avatar: "SW",
      bgColor: "#fef2f2"
    },
    {
      id: 3,
      rating: 5,
      quote: "My booking rate has doubled since using TradeMate. Quick responses mean I win more jobs than my competitors.",
      author: "James Clarke",
      company: "Clarke & Sons Heating",
      location: "London",
      avatar: "JC",
      bgColor: "#f8f9fa"
    }
  ];

  const socialProof = {
    avatars: ["MT", "SW", "JC"],
    count: "+50",
    text: "Join 50+ happy trade businesses",
    subtitle: "Already saving time with TradeMate"
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star">⭐</span>
    ));
  };

  return (
    <div className="testimonials-section">
      {/* Header */}
      <div className="testimonials-header">
        <div className="badge">What Our Customers Say</div>
        <h1 className="testimonials-title">Real Trades. Real Results.</h1>
        <p className="testimonials-subtitle">
          See how TradeMate is helping trade businesses win more work and save time
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="testimonial-card"
            style={{ backgroundColor: testimonial.bgColor }}
          >
            <div className="quote-mark">"</div>
            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>
            <blockquote className="testimonial-quote">
              "{testimonial.quote}"
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-company">{testimonial.company}</div>
                <div className="author-location">{testimonial.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Proof */}
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
  );
};

export default SixthPage;
