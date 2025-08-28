import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the # from the hash
      const elementId = location.hash.slice(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default ScrollToHash;
