document.addEventListener("DOMContentLoaded", function() {


// Función para compartir en Facebook
function compartirFacebook() {
  var url = encodeURIComponent(window.location.href);
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
}

// Función para compartir en Twitter
function compartirTwitter() {
  var url = encodeURIComponent(window.location.href);
  var texto = encodeURIComponent('¡Echa un vistazo a esta página!');
  window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + texto, '_blank');
}

// Función para compartir en LinkedIn
function compartirLinkedIn() {
  var url = encodeURIComponent(window.location.href);
  var titulo = encodeURIComponent('Título de la página');
  var resumen = encodeURIComponent('Breve descripción de la página');
  window.open('https://www.linkedin.com/shareArticle?url=' + url + '&title=' + titulo + '&summary=' + resumen, '_blank');
}

// Asignar eventos de clic a los botones de compartir
document.getElementById('facebookBtn').addEventListener('click', compartirFacebook);
document.getElementById('twitterBtn').addEventListener('click', compartirTwitter);
document.getElementById('linkedinBtn').addEventListener('click', compartirLinkedIn);







console.log('¡Hola, aves!');

});
