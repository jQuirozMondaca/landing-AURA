export function initFormHandler(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Sanitización básica para prevenir XSS
    const name = document
      .getElementById("name")
      .value.trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const email = document.getElementById("email").value.trim();
    const message = document
      .getElementById("message")
      .value.trim()
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    if (!name || !email || !message) {
      alert("Por favor complete todos los campos.");
      return;
    }

    // Aquí iría la llamada fetch() a la API backend
    console.log("Datos seguros listos para enviar:", { name, email, message });
    alert(`Gracias ${name}, hemos recibido tu mensaje.`);
    form.reset();
  });
}
