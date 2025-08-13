(function () {
  const container = document.getElementById('vanilla-grid');
  const source = document.getElementById('source-items');
  if (!container || !source) return;

  const items = Array.from(source.querySelectorAll('.card'));

  function getColumnCount(width) {
    if (width < 600) return 1;
    if (width < 900) return 2;
    if (width < 1200) return 3;
    return 4;
  }

  function createColumns(count) {
    container.innerHTML = '';
    for (let i = 0; i < count; i += 1) {
      const col = document.createElement('div');
      col.className = 'column';
      container.appendChild(col);
    }
  }

  function getShortestColumn() {
    const cols = Array.from(container.children);
    let min = cols[0];
    for (let i = 1; i < cols.length; i += 1) {
      if (cols[i].offsetHeight < min.offsetHeight) min = cols[i];
    }
    return min;
  }

  function layout() {
    const columns = getColumnCount(container.clientWidth);
    createColumns(columns);
    
    // Distribute items by current shortest column
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      // Set random height for the media element
      const media = clone.querySelector('.media');
      if (media) {
        const h = media.dataset.h ? parseInt(media.dataset.h, 10) : Math.floor(Math.random() * (560 - 220 + 1)) + 220;
        media.style.height = h + 'px';
        media.style.background = 'linear-gradient(135deg, #eef1f5, #dfe6ef)';
        media.style.display = 'block';
        media.style.width = '100%';
        media.style.borderBottom = '1px solid #f0f0f0';
      }
      getShortestColumn().appendChild(clone);
    });
  }

  // Initial layout
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', layout);
  } else {
    layout();
  }

  // Re-layout on resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(layout, 120);
  });
})();

