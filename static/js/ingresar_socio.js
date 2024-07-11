function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let apellido_ingresado = document.getElementById("apellido").value 
    let dni_ingresado = document.getElementById("dni").value 
    let imagen_ingresada = document.getElementById("imagen").value 
    let correo_ingresado = document.getElementById("correo").value
    let actividad_ingresada = document.getElementById("actividad").value  


    console.log(nombre_ingresado,apellido_ingresado,dni_ingresado,imagen_ingresada,correo_ingresado,actividad_ingresada);
    // Se arma el objeto de js 
    let datos = {
        nombre: nombre_ingresado,
        apellido:apellido_ingresado,
        dni:dni_ingresado,
        imagen:imagen_ingresada,
        correo:correo_ingresado,
        actividad:actividad_ingresada
    }
    console.log(datos);
    
    let url = "https://damiancd.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../tabla_socios.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}