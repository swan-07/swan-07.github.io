// Simple view counter using localStorage
// Counts views on your local browser/device

(function() {
  const STORAGE_KEY = 'swan07-page-views';
  const STORAGE_TOTAL = 'swan07-total-views';
  
  function initViewCounter() {
    const pageUrl = window.location.pathname;
    const pageKey = pageUrl === '/' ? 'homepage' : pageUrl.replace(/\//g, '-').slice(1);
    
    // Increment counters
    incrementCounter(pageKey);
    incrementCounter('total');
    
    // Display counters
    displayCounters(pageKey);
  }
  
  function incrementCounter(key) {
    const storageKey = key === 'total' ? STORAGE_TOTAL : `${STORAGE_KEY}-${key}`;
    let count = localStorage.getItem(storageKey);
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem(storageKey, count);
    console.log(`[View Counter] ${key}: ${count}`);
  }
  
  function displayCounters(pageKey) {
    // Display page views
    const pageViewEl = document.getElementById('view-counter');
    if (pageViewEl) {
      const pageStorageKey = `${STORAGE_KEY}-${pageKey}`;
      const pageCount = localStorage.getItem(pageStorageKey) || '0';
      pageViewEl.textContent = pageCount;
    }
    
    // Display total views
    const totalViewEl = document.getElementById('total-views');
    if (totalViewEl) {
      const totalCount = localStorage.getItem(STORAGE_TOTAL) || '0';
      totalViewEl.textContent = totalCount;
    }
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initViewCounter);
  } else {
    initViewCounter();
  }
})();
