// This file silences TypeScript errors for our dynamically imported WASM package
// by declaring a module for the Rust-generated pkg folder.
//
// If you want to provide actual type definitions for your WASM exports, you can
// copy or manually define the types from the pkg .d.ts files here.

declare module '../../../rust/pkg' {
  // We can at least declare the existence of these exports to avoid TS errors.
  function init_panic_hook(): void;
  function render_product_grid(
    products_js: any,
    current_page: number,
    items_per_page: number
  ): void;
  export function __wbg_init(module_or_path?: any): Promise<void>;

  // Default export is the init function
  export default __wbg_init;
}