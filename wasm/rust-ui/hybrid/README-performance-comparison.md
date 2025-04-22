# WebAssembly vs React.js Performance Comparison

This project implements a side-by-side performance comparison between WebAssembly (using Rust) and pure React.js implementations of the same UI components. The goal is to measure and compare performance characteristics between these two approaches.

## Implementation Overview

The project uses Next.js App Router and provides three main routes:

- `/` - Home page with information about the comparison
- `/wasm` - WebAssembly implementation using Rust compiled to WASM
- `/react` - Pure React.js implementation

Both implementations share identical visual design, functionality, and test data to ensure a fair comparison.

## Performance Metrics Tracked

The application tracks several performance metrics:

1. **Rendering Metrics**
   - Initial render time
   - Component mount/update time

2. **Memory Usage**
   - Used JS heap size 
   - Total JS heap size
   - (Note: Memory metrics require browsers that support the Performance Memory API)

3. **Interaction Performance**
   - Pagination response time
   - Add to cart response time

## How to Use

1. **Start the application**:
   ```
   npm run dev
   ```

2. **Open the home page** at http://localhost:3000

3. **Navigate** between the WASM and React implementations using the navigation links

4. **Interact** with both implementations:
   - Browse through product pages using the pagination controls
   - Add products to your cart
   - Observe the performance metrics displayed in the dashboard

5. **Compare the metrics** between the two implementations to understand performance differences

## Key Components

- `Navigation.tsx` - Navigation bar for switching between routes
- `PerformanceDashboard.tsx` - Component for displaying performance metrics
- `usePerformanceMetrics.ts` - Hook for tracking performance metrics
- `/wasm/page.tsx` - WebAssembly implementation
- `/react/page.tsx` - React.js implementation

## Performance Analysis

When comparing the two implementations, consider:

1. **Initial Load Time**: Which implementation renders more quickly on first load?
2. **Memory Efficiency**: How do the memory usage patterns differ between implementations?
3. **Interaction Responsiveness**: Which implementation responds more quickly to user actions?
4. **Scaling**: How do performance characteristics change when working with larger datasets?

## Technical Notes

- The WebAssembly implementation uses a Rust component that's compiled to WASM and loaded asynchronously
- Performance metrics are collected using the Performance API and React hooks
- Both implementations use identical styling via Tailwind CSS
- The performance dashboard updates in real-time as you interact with the application