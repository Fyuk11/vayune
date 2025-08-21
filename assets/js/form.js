// form.js
function initForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      msg.textContent = "⚠️ Por favor, completa todos los campos.";
      msg.style.color = "orange";
      return;
    }

    // WhatsApp redirect
    const phone = "5491123456789"; // tu número con código de país
    const waMessage = `Hola, soy ${name}. Mi email es ${email}. Mensaje: ${message}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`;

    window.open(waUrl, "_blank");
    msg.textContent = "✅ Mensaje enviado, te responderemos pronto!";
    msg.style.color = "green";

    form.reset();
  });
}
