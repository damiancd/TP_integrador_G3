// Contenido del encabezado
/*let headerContent = `
    <header>
        <div class="en-linea">
            <img id="logo" src="../js4-header/static/img/logo_esquel.png" alt="logo">
        </div>
        <nav class="en-linea">
            <a class="hipervinc" href="/js4-header/index.html">Inicio</a>
            <a class="hipervinc" href="../js4-header/templates/ubicacion.html">Ubicación</a>
            <a class="hipervinc" href="#">Actividades</a>
            <a class="hipervinc" href="#">Hospedajes</a>
            <a class="hipervinc" href="https://www.google.com/" target="_blank">Google</a>
            <a class="hipervinc" href="../formulario.html">Contacto</a>
            <a class="hipervinc" href="#galeria-s2">Ir a texto</a>
        </nav>
    </header>       

`;
let headerContent = `
<header>
<h1><i class="fas fa-running"></i> Club Social y Deportivo</h1>
<nav>
    <ul>
        <li><a href="../index.html">Inicio</a></li>
        <li><a href="../templates/actividades.html">Actividades</a></li>
        <li><a href="../templates/contacto.html">Contacto</a></li>
        <li><a href="../templates/ubicacion.html">Ubicación</a></li>
    </ul>
</nav>
</header>
`;*/


let headerContent = `
<header>
<div class="en-linea">
<h1><i class="fas fa-running"></i> Club Social y Deportivo</h1>
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

// Agregar el contenido del encabezado al principio del body
document.body.insertAdjacentHTML('afterbegin', headerContent);


