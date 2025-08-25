document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("testimoniosSlider");
  const slides = document.querySelectorAll(".testimonial-card");
  const indicatorsContainer = document.getElementById("sliderIndicators");

  let index = 0;
  const total = slides.length;

  // Crear indicadores
  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => showSlide(i));
    indicatorsContainer.appendChild(btn);
  });
  const indicators = indicatorsContainer.querySelectorAll("button");

  function showSlide(i) {
    index = (i + total) % total;
    slider.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach(btn => btn.classList.remove("active"));
    indicators[index].classList.add("active");
  }

  // Auto-play
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);

  // Swipe en mobile
  let startX = 0;
  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });
  slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) showSlide(index + 1);
    if (endX - startX > 50) showSlide(index - 1);
  });
});