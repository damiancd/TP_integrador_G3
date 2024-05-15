// Función ejemplo para validar formulario
function validarDatos(){
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.
    let nombre = document.getElementById("nombre").value.trim()                   
    let actividad = document.getElementById("actividad").value.trim()
    let error = document.getElementById("campos")

    // Verificar si el nombre contiene solo caracteres alfabéticos 
    //!/^[a-zA-Z]+$/.test(variable)  
    if(!/^[a-zA-Z]+$/.test(nombre)){
        error.textContent = "Por favor complete un nombre válido."
        error.style.color = "red"
        return false
    }

      //Verificar Actividad 
      if(actividad===""){
        error.textContent = "Por favor seleccione una actividad."
        error.style.color = "blue"
        return false
    }
  
    // Si todas las validaciones son exitosas, informar
    alert("Gracias por contactarse, su consulta será respondida a la brevedad.")
    return true
  
}

    