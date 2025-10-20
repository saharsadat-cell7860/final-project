document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name ||  !email ||  !subject || !message) {
      alert("Please fill in all fields correctly.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully. ✨`);

    form.reset();

    const labels = form.querySelectorAll(".form-floating-custom label");
    labels.forEach(label => label.classList.remove("active"));
  });

  // Floating labels effect
  const inputs = form.querySelectorAll(".form-floating-custom input, .form-floating-custom textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.nextElementSibling.classList.add("active");
    });
    input.addEventListener("blur", () => {
      if(input.value.trim() === "") {
        input.nextElementSibling.classList.remove("active");
      }
    });
  });
});