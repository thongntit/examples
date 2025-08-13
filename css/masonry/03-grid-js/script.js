(function () {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const baseRowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'),
    10
  ) || 8;
  const gap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('gap'),
    10
  ) || 16;

  function resizeItem(card) {
    card.style.gridRowEnd = "span 1";
    const contentHeight = card.getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + gap) / (baseRowHeight + gap));
    card.style.gridRowEnd = `span ${rowSpan}`;
  }

  function layout() {
    const cards = Array.from(grid.querySelectorAll('.card'));
    cards.forEach(resizeItem);
  }

  // Layout on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', layout);
  } else {
    layout();
  }

  // Relayout on resize
  window.addEventListener('resize', () => {
    window.requestAnimationFrame(layout);
  });

  // Relayout when images load
  const images = grid.querySelectorAll('img');
  images.forEach((img) => {
    if (img.complete) return;
    img.addEventListener('load', () => resizeItem(img.closest('.card')));
    img.addEventListener('error', () => resizeItem(img.closest('.card')));
  });
})();

