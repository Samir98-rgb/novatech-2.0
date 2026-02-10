// Script base Nova Tech
// Preparado para futuras mejoras

console.log("Nova Tech – sitio cargado correctamente");

// Ejemplo futuro:
// Animaciones
// Validación de formularios
// Tracking de clics en WhatsApp

document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.querySelector('.whatsapp');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      console.log('Click en WhatsApp');
    });
  }
});
