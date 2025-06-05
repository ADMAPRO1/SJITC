// Array of hero background images (make sure these files exist)
const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

let currentHero = 0;

// Wait for DOM to load before querying elements
window.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const leftIcon = document.querySelector(".hero-left");
  const rightIcon = document.querySelector(".hero-right");

  // Set initial background
  changeHeroBg();

  // Change background function
  function changeHeroBg() {
    heroSection.style.backgroundImage = `url('${heroImages[currentHero]}')`;
  }

  // Next and previous functions
  function nextHero() {
    currentHero = (currentHero + 1) % heroImages.length;
    changeHeroBg();
  }
  function prevHero() {
    currentHero = (currentHero - 1 + heroImages.length) % heroImages.length;
    changeHeroBg();
  }

  // Auto-slide every 5 seconds
  let heroInterval = setInterval(nextHero, 5000);

  // Reset interval on manual navigation
  function resetInterval() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextHero, 5000);
  }

  // Event listeners for arrows
  leftIcon.addEventListener("click", () => {
    prevHero();
    resetInterval();
  });
  rightIcon.addEventListener("click", () => {
    nextHero();
    resetInterval();
  });
});
