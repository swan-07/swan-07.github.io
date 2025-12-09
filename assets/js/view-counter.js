// Counter API integration for static websites
// Uses Counter API's REST endpoint - no authentication needed

(function() {
  const NAMESPACE = 'swan07-views';
  
  function initViewCounter() {
    const pageUrl = window.location.pathname;
    const pageKey = pageUrl === '/' ? 'homepage' : pageUrl.replace(/\//g, '-').slice(1);
    
    // Increment page counter
    trackEvent(pageKey);
    
    // Increment total site counter
    trackEvent('total');
  }
  
  async function trackEvent(key) {
    try {
      // Use Counter API's REST endpoint
      const response = await fetch(`https://api.counterapi.dev/up?namespace=${NAMESPACE}&id=${key}`);
      const data = await response.json();
      
      console.log(`[Counter] ${key}: ${data.value}`);
      
      // Update display
      const elementId = key === 'total' ? 'total-views' : 'view-counter';
      const el = document.getElementById(elementId);
      if (el) {
        el.textContent = data.value;
      }
    } catch (error) {
      console.error(`[Counter] Error tracking ${key}:`, error);
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initViewCounter);
  } else {
    initViewCounter();
  }
})();
