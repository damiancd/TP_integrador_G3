// Función ejemplo para validar formulario
function validarDatos(){
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.
    let nombre = document.getElementById("nombre").value.trim()                   
    let dni = document.getElementById("dni").value.trim() 
    let direccion = document.getElementById("direccion").value.trim()
    let error = document.getElementById("campos")

    // Todo lo que se recibe de document viene en string
    // Verificar si algún campo está en blanco
    if(nombre === "" || direccion === ""){
        error.textContent = "Por favor complete todos los campos."
        error.style.color = "red"
        return false
    }    

    // Verificar si el nombre contiene solo 
    // caracteres alfabéticos 
    //!/^[a-zA-Z]+$/.test(variable)  
    if(!/^[a-zA-Z]+$/.test(nombre)){
        error.textContent = "Por favor complete un nombre válido."
        error.style.color = "blue"
        return false
    }
    
    // Verificar si el DNI contiene solo 8 dígitos numéricos
    // dni = "12345678"
    if(dni.length !== 8){
        error.textContent = "Por favor ingrese dni correctamente."
        error.style.color = "brown"
        return false
    }
    
    // Verificar dni no es un número
    if(isNaN(dni)){
        error.textContent = "Por favor ingrese correctamente los números."
        error.style.color = "brown"
        return false
    }
    
    // Si todas las validaciones son exitosas, informar
    alert("Datos validados.")
    return true
  
}

    