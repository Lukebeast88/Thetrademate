import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToHash from './pages/scrolltohash';
import FirstPage from './pages/firstpage';
import SecondPage from './pages/secondpage';
import Sec_third_mid from './pages/sec_third_mid';
import FifthPage from './pages/fifthpage';
import SeventhPage from './pages/seventhpage';
import EightPage from './pages/eightpage';
import HowItWorks from './pages/howitworks';
import Features from './pages/features';
import Ninethpage from './pages/ninethpage';
import FAQSection from './pages/tenthpage';
import Footer from './pages/finalpage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Component to handle smooth scrolling to hash elements */}
        <ScrollToHash />
        
        {/* Home Section */}
        <div id="home">
          <FirstPage />
        </div>
          <SecondPage />
          <Sec_third_mid />
        
        {/* How It Works Section */}
        <div id="howitworks">
          <HowItWorks />
        </div>
        
        {/* Features Section */}
        <div id="features">
          <Features />
          <FifthPage />
          <SeventhPage />
        </div>
        
        {/* Pricing Section */}
        <div id="pricing">
          <EightPage />
        </div>
        
        {/* Book Demo Section */}
        <div id="bookademo">
          <Ninethpage />
        </div>
        
        {/* Help & FAQ Section */}
        <div id="helpfaq">
          <FAQSection />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
