# Masonry (Waterfall) Layout — Implementation Approaches

This folder contains demos of popular masonry techniques, ordered by implementation approach.

- 01-round-robin-columns/: Even distribution across fixed columns (NOT true masonry)
- 02-multicolumn/: Pure CSS Multi-column
- 03-grid-js/: CSS Grid + tiny JS to compute row spans
- 04-pure-js/: Pure JS shortest-column algorithm
- 05-colcade/: Lightweight column-based library
- 06-masonryjs/: Masonry.js library (with ImagesLoaded)

## 1) Round-robin Columns (01-round-robin-columns/)

**Claude Rating: 2⭐** - Simple but not true masonry; gaps appear due to height differences.

**How it works**: Distribute items evenly across fixed columns (1→2→3→4→1…).

**Pros**: Simple logic; predictable placement.

**Cons**: Not true masonry; ignores item heights during placement.

**Great for**: Simple layouts where you want even distribution.

## 2) CSS Multi-column (02-multicolumn/)

**Claude Rating: 3⭐** - Pure CSS solution but visual order is column-wise, not row-wise.

**How it works**: Container uses `column-count` and `column-gap`. Each card uses `break-inside: avoid` so it does not split across columns.

**Pros**: Pure CSS, minimal code, broad support.

**Cons**: Visual order is column-wise (top-to-bottom per column), not row-wise; limited placement control.

**Great for**: Static content where strict left-to-right order is not required.

Key CSS:
```css
.masonry { column-count: 3; column-gap: 16px; }
.card { break-inside: avoid; }
```

## 3) CSS Grid + tiny JS (03-grid-js/)

**Claude Rating: 4⭐** - Excellent balance of modern CSS Grid with minimal JS; preserves source order.

**How it works**: Grid uses a small fixed `grid-auto-rows`. A few lines of JS measure each card's height and set `grid-row-end: span N` so items pack tightly.

**Pros**: Keeps document source order; powerful responsive control with Grid; no heavy dependency.

**Cons**: Needs measurement in JS; re-layout on resize and after images load.

**Great for**: Native Grid features while preserving source order, with minimal JS.

Key idea:
```js
const rowSpan = Math.ceil((card.offsetHeight + gap) / (rowHeight + gap));
card.style.gridRowEnd = `span ${rowSpan}`;
```

## 4) Pure JS shortest-column (04-pure-js/)

**Claude Rating: 3⭐** - Educational and dependency-free, but requires more maintenance effort.

**How it works**: No library; compute current shortest column and append next item.

**Pros**: Zero dependencies; fully controllable.

**Cons**: More code to maintain; need to handle resize and dynamic content.

**Great for**: Learning or fully custom behavior without dependencies.

## 5) Colcade lightweight library (05-colcade/)

**Claude Rating: 4⭐** - Lightweight and effective; good middle-ground between simplicity and features.

**How it works**: Lightweight column-based layout helper by Desandro.

**Pros**: Very small; column-based layout similar to Masonry.

**Cons**: Less feature-rich than Masonry.js.

**Great for**: Simple dynamic layouts with minimal JS.

Initialize:
```html
<script src="https://cdn.jsdelivr.net/npm/colcade@0.2.0/colcade.min.js"></script>
<script>
  new Colcade('.grid', { columns: '.grid-col', items: '.grid-item' });
  // Ensure item heights set before init in the demo.
</script>
```

## 6) Masonry.js library (06-masonryjs/)

**Claude Rating: 5⭐** - The gold standard; feature-rich, battle-tested, and handles complex scenarios.

**How it works**: A mature JS layout engine repositions items. Use `imagesloaded` to wait for images before layout.

**Pros**: Feature-rich; great for dynamic content, filtering/sorting, animations.

**Cons**: Extra JS dependency and runtime cost.

**Great for**: Complex, dynamic grids needing robust behavior and extras.

Initialize:
```html
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script>
  var grid = document.querySelector('.grid');
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  });
</script>
```

## Notes
A pure CSS `grid-template-rows: masonry` proposal exists but is not widely supported yet.

Open each folder's `index.html` directly in a browser to view the demo.
