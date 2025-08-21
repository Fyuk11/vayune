// ===== ANIMATIONS.JS =====

// Detectar elementos con .fade-in y mostrar al hacer scroll
const faders = document.querySelectorAll(".fade-in");

const options = {
  threshold: 0.3, // 30% visible
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
