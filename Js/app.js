

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("product-cards");
  const cartCount = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Load Products
  fetch("data/products.json")
    .then(res => res.json())
    .then(products => {
      productsContainer.innerHTML = "";
      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-3 col-sm-6";
        card.innerHTML = `
          <div class="card shadow-sm h-100 text-center border-0">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title fw-bold">${product.name}</h5>
              <p class="card-text text-muted">${product.description}</p>
              <p class="fw-bold text-warning">$${product.price}</p>
              <button class="btn btn-dark btn-sm add-to-cart" data-id="${product.id}">
                <i class="fa fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        `;
        productsContainer.appendChild(card);
      });

      // Add to Cart
      document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", e => {
          const id = e.target.closest("button").dataset.id;
          const selected = products.find(p => p.id == id);
          addToCart(selected);
        });
      });
    })
    .catch(err => console.error("Error loading products:", err));

  // Add to cart function
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  // Update cart count
  function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = total;
  }

  updateCartCount();
});