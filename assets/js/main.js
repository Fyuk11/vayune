
// main.js

// Al recargar la página, volver al inicio
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Header scrolled
document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Inicialización global
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Vayune website cargado correctamente");

  if (typeof initNav === "function") initNav();
  if (typeof initFadeIn === "function") initFadeIn();
  if (typeof initForm === "function") initForm();
  if (typeof initWhatsApp === "function") initWhatsApp();
});

// main.js
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  services.forEach(service => observer.observe(service));
});

// Servicios
  document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // se anima solo una vez
          }
        });
      },
      { threshold: 0.2 } // 20% visible en viewport
    );

    services.forEach((service) => observer.observe(service));
  });

