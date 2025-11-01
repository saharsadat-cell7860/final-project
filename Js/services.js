// =====================
//  Services Page Script
// =====================

// Fade-in animation when scrolling
document.addEventListener("scroll", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Smooth hover effect on service cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.3s ease";
  });
});