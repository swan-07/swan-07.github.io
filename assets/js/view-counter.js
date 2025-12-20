// Abacus API integration for static websites
// Uses Abacus counter API - no authentication needed
// API docs: https://v2.jasoncameron.dev/abacus/

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
      // Use Abacus API's /hit endpoint to increment and get value
      const response = await fetch(`https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${key}`);
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
