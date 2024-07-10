function changeMap(src) {
    document.getElementById('map').innerHTML = '<iframe src="' + src + '" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  }

  // Función para abrir el modal
function openModal() {
  document.getElementById('modal').style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById('modal').style.display = "none";
  document.getElementById('error-message').style.display = "none";
}

// Función para manejar el inicio de sesión
function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if (username === "admin" && password === "admin") {
      window.location.href = "/tabla_socios.html"; 
  } else {
      document.getElementById('error-message').style.display = "block";
  }
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
  let modal = document.getElementById('modal');
  if (event.target == modal) {
      closeModal();
  }
}