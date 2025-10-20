document.addEventListener("DOMContentLoaded", () => {

  const products = [
    {name: "Elegant Shoes", price: 79.99, image: "assets/images/shoes.PNG", category: "shoes"},
    {name: "Sporty Sneakers", price: 89.99, image: "assets/images/shoes2.JPEG", category: "shoes"},
    {name: "Luxury Bag", price: 129.99, image: "assets/images/bag1.PNG", category: "bags"},
    {name: "Classic Watch", price: 199.99, image: "assets/images/clasic shoes.PNG", category: "watches"},
    {name: "Blue Shirt", price: 49.99, image: "assets/images/blue shirt.PNG", category: "shirts"},
    {name: "Leather Boots", price: 139.99, image: "assets/images/leather shoes.PNG", category: "shoes"},
    {name: "Stylish Backpack", price: 99.99, image: "assets/images/bag3.PNG", category: "bags"},
    {name: "Gold Watch", price: 249.99, image: "assets/images/golden watch.jpg", category: "watches"},
    {name: "Red Dress Shirt", price: 59.99, image: "assets/images/red shirt.jpg", category: "shirts"},
    {name: "Casual Loafers", price: 69.99, image: "assets/images/loafer.jpg", category: "shoes"},
    {name: "Elegant Handbag", price: 159.99, image: "assets/images/bag4.PNG", category: "bags"},
    {name: "Smartwatch", price: 179.99, image: "assets/images/apple watch.jpg", category: "watches"},
    {name: "Formal Shirt", price: 54.99, image: "assets/images/formal shirt.jpg", category: "shirts"},
    {name: "High Heels", price: 99.99, image: "assets/images/shoes1.PNG", category: "shoes"},
  ];

  const container = document.getElementById("products-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function displayProducts(list) {
    container.innerHTML = "";
    list.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("col-md-3", "col-sm-6", "product-card");
      card.setAttribute("data-category", prod.category);
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${prod.image}" class="card-img-top" alt="${prod.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">$${prod.price.toFixed(2)}</p>
            <button class="btn btn-gold btn-sm add-to-cart" data-name="${prod.name}" data-price="${prod.price}" data-image="${prod.image}">Add to Cart</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  displayProducts(products);

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      const filtered = category === "all" ? products : products.filter(p => p.category === category);
      displayProducts(filtered);
    });
  });

  // Add to Cart functionality
  container.addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);
      const image = e.target.dataset.image;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(item => item.name === name);
      if(existing) existing.quantity +=1;
      else cart.push({name, price, image, quantity: 1});
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart 🛒`);
      updateCartCount();
    }
  });

  // Update cart count badge
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").textContent = totalItems;
  }

  updateCartCount();

});
document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }

  updateCartCount();

  const addButtons = document.querySelectorAll(".btn-add-cart");
  addButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      const name = card.querySelector(".card-title").innerText;
      const price = parseFloat(card.querySelector(".card-price").dataset.price);
      const image = card.querySelector(".card-img-top").src;

      const existingProduct = cart.find(item => item.name === name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      
      card.classList.add("added-to-cart");
      setTimeout(() => card.classList.remove("added-to-cart"), 600);
    });
  });
});