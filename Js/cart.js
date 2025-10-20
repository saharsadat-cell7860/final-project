document.addEventListener("DOMContentLoaded", () => {
  const cartTableBody = document.getElementById("cart-table-body");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const clearBtn = document.getElementById("clear-cart");
  const emptyCart = document.getElementById("empty-cart");
  const cartItemsTable = document.getElementById("cart-items");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartTableBody.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsTable.classList.add("d-none");
      emptyCart.classList.remove("d-none");
      cartCount.textContent = 0;
      cartTotal.textContent = "$0";
      return;
    } else {
      cartItemsTable.classList.remove("d-none");
      emptyCart.classList.add("d-none");
    }

    cart.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="d-flex align-items-center">
          <img src="${item.image}" class="cart-img" alt="${item.name}">
          <span>${item.name}</span>
        </td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" class="form-control quantity-input" data-index="${index}">
        </td>
        <td>$${subtotal.toFixed(2)}</td>
        <td>
          <button class="btn btn-sm btn-danger remove-item" data-index="${index}">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      `;
      cartTableBody.appendChild(row);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    updateCartCount();
  }

  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }

  // Remove item
  cartTableBody.addEventListener("click", e => {
    if (e.target.closest(".remove-item")) {
      const index = e.target.closest(".remove-item").dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  // Change quantity
  cartTableBody.addEventListener("change", e => {
    if (e.target.classList.contains("quantity-input")) {
      const index = e.target.dataset.index;
      let value = parseInt(e.target.value);
      if (value < 1) value = 1;
      cart[index].quantity = value;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  // Clear cart
  clearBtn.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  });

  renderCart();
});