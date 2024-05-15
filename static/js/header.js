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
        <li><a href="../templates/ubicacion.html">Ubicación</a></li>
    </ul>
</nav>
</header>
`;

// Agrego el contenido del encabezado al principio del body
document.body.insertAdjacentHTML('afterbegin', headerContent);


