import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      fontFamily: 'Poppins, sans-serif' 
    }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        style={{ 
          color: '#ff6b35', 
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
