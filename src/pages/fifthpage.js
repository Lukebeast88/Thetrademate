import React from 'react';
import '../styles/fifthpage.css';

const FifthPage = () => {
  return (
    <div className="case-study-section">
      <div className="header">
        <div className="badge">Real Success Story</div>
        <h1 className="title">
          How TradeMate Transformed <span>Mike's Electrical Business</span>
        </h1>
      </div>

      <div className="content-container">
        <div className="before-after">
          <div className="before">
            <h3>Before TradeMate:</h3>
            <ul>
              <li><span>⏰</span> Replied to leads after 6+ hours</li>
              <li><span>📉</span> Won only 1 in 5 leads</li>
              <li><span>💷</span> Missing £1,500+/month in work</li>
            </ul>
          </div>

          <div className="after">
            <h3>After TradeMate:</h3>
            <ul>
              <li><span>⏱️</span> Replies sent in under 30 seconds</li>
              <li><span>📈</span> Now wins 5 in 5 leads</li>
              <li><span>💰</span> Extra £3,000+/month revenue</li>
            </ul>
          </div>
        </div>

        <blockquote>
          "TradeMate literally doubled my business. I was losing jobs left and right because I couldn't reply fast enough. Now every lead gets an instant, professional response that sounds exactly like me."
          <div className="author">
            <div className="avatar">M</div>
            <div className="author-details">
              <div className="name">Mike Thompson</div>
              <div className="position">MT Electrical Services, Birmingham</div>
            </div>
          </div>
        </blockquote>

        <div className="stats">
          <div className="stat-item">
            <div className="number">300%</div>
            <div className="desc">Lead conversion increase</div>
          </div>
          <div className="stat-item">
            <div className="number">8hrs</div>
            <div className="desc">Saved per week on admin</div>
          </div>
          <div className="stat-item">
            <div className="number">3 months</div>
            <div className="desc">To ROI payback</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
