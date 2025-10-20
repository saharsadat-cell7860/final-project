// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// Counter animation on scroll
const counters = document.querySelectorAll(".counter-number");
let countersStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 200; 

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + (target >= 1000 ? "+" : ""); 
      }
    };
    updateCount();
  });
}

window.addEventListener("scroll", () => {
  const triggerPosition = document.querySelector(".counter-box").offsetTop - window.innerHeight + 100;
  if (window.scrollY > triggerPosition && !countersStarted) {
    countersStarted = true;
    animateCounters();
  }
});