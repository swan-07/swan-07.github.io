// Global view counter using Countapi
// Tracks page views globally across all visitors

(function() {
  const NAMESPACE = 'swan-07-github-io'; // Unique namespace for your site
  
  function initGlobalViewCounter() {
    const pageUrl = window.location.pathname;
    const pageKey = pageUrl === '/' ? 'homepage' : pageUrl.replace(/\//g, '-').slice(1);
    
    // Increment global page counter
    incrementAndDisplayCounter(pageKey, 'view-counter');
    
    // Increment and display total site views
    incrementAndDisplayCounter('total-views', 'total-views');
  }
  
  function incrementAndDisplayCounter(key, elementId) {
    const url = `https://api.countapi.com/hit/${NAMESPACE}/${key}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const counter = document.getElementById(elementId);
        if (counter) {
          counter.textContent = data.value;
          counter.setAttribute('data-key', key);
        }
      })
      .catch(error => {
        console.log('View counter unavailable:', error);
      });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalViewCounter);
  } else {
    initGlobalViewCounter();
  }
})();
