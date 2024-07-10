// Contenido del encabezado
let headerContent = `
<header>
<div class="en-linea">
<h1><i class="fas fa-running"></i> CLUB SOCIAL Y DEPORTIVO</h1>
<nav class="en-linea">
    <ul>
        <li><a href="../index.html">Inicio</a></li>
        <li><a href="../templates/actividades.html">Actividades</a></li>
        <li><a href="../templates/contacto.html">Contacto</a></li>
        <li><a href="../templates/ubicacion.html">Sucursales</a></li>
        <li><a href="#" onclick="openModal()">Acceso</a></li>
    </ul>
</nav>
</header>
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>Iniciar Sesión</h2>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password"><br><br>
        <button onclick="login()">Entrar</button>
        <p id="error-message" style="color:red; display:none;">Credenciales incorrectas</p>
    </div>
</div>
`;

// Agrego el contenido del encabezado al principio del body
document.body.insertAdjacentHTML('afterbegin', headerContent);


