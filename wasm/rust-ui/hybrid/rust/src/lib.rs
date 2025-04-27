use dioxus::prelude::*;
use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Product {
    pub id: String,
    pub name: String,
    pub price: f64,
    pub image_url: String,
    pub description: String,
    pub category: String,
    pub tags: Vec<String>,
}

// Export simple product grid rendering function
#[wasm_bindgen]
pub fn render_product_grid(
    products_js: &JsValue,
    current_page: usize, 
    items_per_page: usize
) -> Result<(), JsValue> {
    // Initialize panic hook for better error messages
    console_error_panic_hook::set_once();
    
    // Log that we're rendering
    web_sys::console::log_1(&"Rendering product grid from Rust".into());

    // Convert JS products to Rust
    let products: Vec<Product> = match serde_wasm_bindgen::from_value(products_js.clone()) {
        Ok(p) => p,
        Err(e) => {
            web_sys::console::error_1(&format!("Failed to parse products: {:?}", e).into());
            return Err(JsValue::from_str("Failed to parse products"));
        }
    };
    
    // Get the container element where we'll render our component
    let window = web_sys::window().expect("No global window exists");
    let document = window.document().expect("No document exists");
    let container = document
        .get_element_by_id("rust-product-grid-container")
        .ok_or_else(|| JsValue::from_str("Could not find container element"))?;
    
    // Calculate pagination values
    let start_index = (current_page - 1) * items_per_page;
    let end_index = (start_index + items_per_page).min(products.len());
    let total_pages = (products.len() as f64 / items_per_page as f64).ceil() as usize;
    
    // Get products for current page
    let page_products = &products[start_index..end_index];
    
    // Render HTML directly (simplified approach without full Dioxus rendering)
    let mut html = String::new();
    
    // Grid container
    html.push_str("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6\">");
    
    // Render each product
    for product in page_products {
        html.push_str(&format!(r#"
            <div class="border border-gray-600 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="relative w-full h-48">
                    <img src="{}" alt="{}" class="object-cover w-full h-full"/>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1 text-gray-200">{}</h3>
                    <p class="text-gray-400 text-sm mb-2 line-clamp-2">{}</p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-gray-200">${:.2}</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                            data-product-id="{}"
                            onclick="window.rustAddToCart('{}')"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        "#, 
        product.image_url, 
        product.name,
        product.name,
        product.description,
        product.price,
        product.id,
        product.id));
    }
    
    html.push_str("</div>");
    
    // Add pagination if needed
    if total_pages > 1 {
        html.push_str(&format!(r#"
            <div class="flex justify-center gap-2 mt-6">
                <button
                    class="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 {}"
                    onclick="window.rustPageChange({})"
                >
                    Previous
                </button>
                <span class="px-4 py-2 text-gray-300">
                    Page {} of {}
                </span>
                <button
                    class="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 {}"
                    onclick="window.rustPageChange({})"
                >
                    Next
                </button>
            </div>
        "#,
        if current_page == 1 { "disabled opacity-50 cursor-not-allowed" } else { "hover:bg-gray-700" },
        current_page - 1,
        current_page,
        total_pages,
        if current_page == total_pages { "disabled opacity-50 cursor-not-allowed" } else { "hover:bg-gray-700" },
        current_page + 1
        ));
    }
    
    // Set the HTML
    container.set_inner_html(&html);
    
    Ok(())
}

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}