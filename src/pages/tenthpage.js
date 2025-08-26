import React, { useState } from 'react';
import '../styles/tenthpage.css'; // Assuming you have a CSS file for styling

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestion, setOpenQuestion] = useState(4); // Only one question open at a time

  const categories = [
    'All Questions',
    'Setup & Getting Started',
    'Pricing & Plans',
    'Features & Functionality',
    'Support & Security'
  ];

  const faqs = [
    {
      id: 1,
      category: 'Features & Functionality',
      question: 'How quickly does TradeMate reply to my leads?',
      answer: 'Under 30 seconds — every time. TradeMate monitors your email 24/7 and sends professional replies in your voice before your competitors even see the message.',
      hasYesAnswer: true
    },
    {
      id: 2,
      category: 'Setup & Getting Started',
      question: 'Do I need to pay for setup or training?',
      answer: 'No setup fees, no contracts. We handle everything during your free 7-day trial. Our team trains TradeMate using your past messages so it sounds exactly like you.',
      hasYesAnswer: true
    },
    {
      id: 3,
      category: 'Features & Functionality',
      question: 'What happens if TradeMate doesn\'t know how to reply?',
      answer: 'You\'ll get a WhatsApp alert instantly. You can step in, reply yourself, and TradeMate learns from your response. You\'re always in control.',
      hasYesAnswer: true
    },
    {
      id: 4,
      category: 'Pricing & Plans',
      question: 'Can I cancel anytime?',
      answer: 'Yes! You can cancel your subscription at any time with no cancellation fees or penalties. Your account will remain active until the end of your current billing period.',
      hasYesAnswer: true
    },
    {
      id: 5,
      category: 'Setup & Getting Started',
      question: 'How long does it take to set up TradeMate?',
      answer: 'Setup takes just 15 minutes. We connect to your email, import your past messages to learn your style, and you\'re ready to start getting instant replies.',
      hasYesAnswer: false
    },
    {
      id: 6,
      category: 'Features & Functionality',
      question: 'Will my customers know it\'s not me replying?',
      answer: 'No. TradeMate learns from your past conversations and writes exactly like you do - same tone, phrases, and personality. Most customers never realize it\'s automated.',
      hasYesAnswer: false
    },
    {
      id: 7,
      category: 'Pricing & Plans',
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 7-day free trial with no credit card required. You get full access to all features so you can see exactly how TradeMate works for your business.',
      hasYesAnswer: false
    },
    {
      id: 8,
      category: 'Support & Security',
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption and are fully GDPR compliant. Your emails and customer data are never shared with third parties and are stored securely.',
      hasYesAnswer: false
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All Questions' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (questionId) => {
    // If clicking on the already open question, close it. Otherwise, open the new one.
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="badge">Got Questions?</div>
          <h1 className="faq-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h1>
          <p className="faq-subtitle">
            Everything you need to know about TradeMate
          </p>
        </div>

        {/* Search */}
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${openQuestion === faq.id ? 'open' : ''}`}
            >
              <button
                className="faq-question-button"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="faq-question">{faq.question}</span>
                <span className={`faq-arrow ${openQuestion === faq.id ? 'up' : 'down'}`}>
                  {openQuestion === faq.id ? '▲' : '▼'}
                </span>
              </button>
              
              <div className={`faq-answer ${openQuestion === faq.id ? 'show' : ''}`}>
                {faq.hasYesAnswer && <div className="yes-indicator">Yes!</div>}
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="no-results">
            <p>No questions found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
