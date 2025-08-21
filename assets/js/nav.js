

// nav.js
function initNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (!navToggle || !navMenu) {
    console.warn("initNav: faltan .nav-toggle o .nav-menu");
    return;
  }

  const closeMenu = () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("active");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  // Abrir / cerrar menú
  navToggle.addEventListener("click", toggleMenu);

  // Cerrar menú al hacer clic en un link
  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  console.log("initNav: listeners listos ✅");
}

// Marca de carga del archivo
console.log("✅ nav.js cargado");
