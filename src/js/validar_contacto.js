function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (nombre == "") {
      alert("Mete tu nombre, coño");
      return false;
    }
    
    if (!emailRegex.test(email)) {
      alert("Ingresa un correo electrónico válido");
      return false;
    }
    
    if (mensaje == "") {
      alert("Ingresa un mensaje");
      return false;
    }
    
    return true;
  }
