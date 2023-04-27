const validator = require('validator');
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Agregamos esta línea para evitar que la página se refresque

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (validator.isEmpty(name)) {
    alert('Por favor, ingresa tu nombre.');
    return;
  }

  if (!validator.isEmail(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  if (validator.isEmpty(message)) {
    alert('Por favor, ingresa tu mensaje.');
    return;
  }

  alert('Formulario enviado con éxito.');
});

console.log('¡Hola, aves!');
