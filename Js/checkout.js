document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const country = document.getElementById("country").value.trim();
    const payment = document.getElementById("payment").value;

    if (!name || !email || !phone || !address || !city || !zip || !country || !payment) {
      alert("Please fill in all fields correctly.");
      return;
    }

    alert(`Thank you, ${name}! Your order has been placed successfully 🛍`);

    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
});