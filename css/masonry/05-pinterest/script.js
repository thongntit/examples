(function() {
  const container = document.getElementById('masonry-container');
  if (!container) return;

  // Configuration
  const config = {
    gutter: 16,           // Space between items
    columnWidth: 240,     // Fixed column width
    minColumns: 1,        // Minimum columns
    maxColumns: 6         // Maximum columns
  };

  // Track column heights - this is Pinterest's core algorithm
  let columnHeights = [];
  let columnCount = 0;

  /**
   * Calculate how many columns fit in the container
   */
  function calculateColumnCount() {
    const containerWidth = container.offsetWidth - (config.gutter * 2); // Account for container padding
    const availableWidth = containerWidth + config.gutter; // Add one gutter for calculation
    const columns = Math.floor(availableWidth / (config.columnWidth + config.gutter));
    
    // Ensure we stay within min/max bounds
    return Math.max(config.minColumns, Math.min(config.maxColumns, columns));
  }

  /**
   * Find the index of the shortest column
   * This is Pinterest's key algorithm for placement
   */
  function getShortestColumnIndex() {
    let shortestIndex = 0;
    let shortestHeight = columnHeights[0];
    
    for (let i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < shortestHeight) {
        shortestHeight = columnHeights[i];
        shortestIndex = i;
      }
    }
    
    return shortestIndex;
  }

  /**
   * Calculate the left position for a given column
   */
  function getColumnLeft(columnIndex) {
    return config.gutter + (columnIndex * (config.columnWidth + config.gutter));
  }

  /**
   * Set random heights for demo media elements
   */
  function setMediaHeights() {
    const mediaElements = container.querySelectorAll('.media');
    mediaElements.forEach(media => {
      const height = media.dataset.h ? parseInt(media.dataset.h) : 
                     Math.floor(Math.random() * (560 - 220 + 1)) + 220;
      media.style.height = height + 'px';
    });
  }

  /**
   * Pinterest's core masonry layout algorithm
   */
  function layout() {
    // Calculate current column count
    const newColumnCount = calculateColumnCount();
    
    // Reset if column count changed
    if (newColumnCount !== columnCount) {
      columnCount = newColumnCount;
      columnHeights = new Array(columnCount).fill(0);
    }

    // Get all masonry items
    const items = Array.from(container.querySelectorAll('.masonry-item'));
    
    // Position each item using Pinterest's algorithm
    items.forEach((item, index) => {
      // Set item width first
      item.style.width = config.columnWidth + 'px';
      
      // Force a reflow to get accurate height
      item.offsetHeight;
      
      // Find shortest column
      const columnIndex = getShortestColumnIndex();
      
      // Calculate position
      const left = getColumnLeft(columnIndex);
      const top = columnHeights[columnIndex];
      
      // Apply Pinterest-style absolute positioning
      item.style.left = left + 'px';
      item.style.top = top + 'px';
      
      // Get item height immediately (no setTimeout needed)
      const itemHeight = item.offsetHeight;
      
      // Update column height immediately
      columnHeights[columnIndex] += itemHeight + config.gutter;
    });
    
    // Update container height after all items are positioned
    updateContainerHeight();
  }

  /**
   * Update container height to match tallest column
   */
  function updateContainerHeight() {
    const maxHeight = Math.max(...columnHeights);
    container.style.height = (maxHeight + config.gutter) + 'px';
  }

  /**
   * Handle window resize with debouncing
   */
  function handleResize() {
    // Reset column heights for recalculation
    columnHeights = new Array(columnCount).fill(0);
    layout();
  }

  /**
   * Initialize the masonry layout
   */
  function init() {
    // Add loading class
    container.classList.add('loading');
    
    // Set media heights for demo
    setMediaHeights();
    
    // Wait a bit for heights to be applied, then layout
    setTimeout(() => {
      layout();
      
      // Remove loading class and add loaded class
      container.classList.remove('loading');
      container.classList.add('loaded');
    }, 50);
    
    // Handle resize with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose layout function globally for debugging
  window.pinterestMasonry = { layout, config };
})();
