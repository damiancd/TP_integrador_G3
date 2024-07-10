function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let apellido_ingresado = document.getElementById("apellido").value 
    let dni_ingresado = document.getElementById("dni").value 
    let imagen_ingresada = document.getElementById("imagen").value
    let correo_ingresado = document.getElementById("correo").value
    let actividad_ingresada = document.getElementById("actividad").value   

    let datos = {
        nombre: nombre_ingresado,
        apellido:apellido_ingresado,
        dni:dni_ingresado,
        imagen:imagen_ingresada,
        correo:correo_ingresado,
        actividad:actividad_ingresada
    }

    console.log(datos);



    let url = "https://damiancd.pythonanywhere.com/socio/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../tabla_socios.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}