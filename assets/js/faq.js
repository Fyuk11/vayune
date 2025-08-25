document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      item.classList.toggle("active");
      // Cerrar los demás si querés acordeón exclusivo
      faqs.forEach(f => {
        if (f !== item) f.classList.remove("active");
      });
    });
  });
});
