function crearRegistro() {
    var nombres = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value; 
     var fechaSeleccionada = fechaNacimiento.value;
        alert("Fecha seleccionada: " + fechaSeleccionada);
    var sexoInput = document.getElementById("sexo").value.toUpperCase();
    var sexo = validarSexo(sexoInput); 
    var direccion = document.getElementById("dirección").value;
    var localidad = document.getElementById("localidad").value;
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var Ncontraseña = document.getElementById("Ncontraseña").value;

    if (sexo === null) {
        alert("Por favor ingresa 'H', 'M' u 'O' en el campo de sexo.");
        return;
      }

    var persona = {
      nombres: nombres,
      apellidos: apellidos,
      sexo: sexo,
      fechaNacimiento: fechaNacimiento,
      direccion: direccion,
      localidad: localidad,
      nombreUsuario: nombreUsuario,
      contraseña: contraseña,
      Ncontraseña: Ncontraseña
    };
  
    var propiedadesPersona = Object.keys(persona);
  
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3><i>Datos de la Persona:</i></h3>";
    resultadoDiv.innerHTML += "<p>Nombres: " + persona.nombres + "</p>";
    resultadoDiv.innerHTML += "<p>apellidos: " + persona.apellidos + "</p>";
    resultadoDiv.innerHTML += "<p>Sexo: " + persona.sexo + "</p>";
    resultadoDiv.innerHTML += "<p>direccion: " + persona.direccion + " </p>";
    resultadoDiv.innerHTML += "<p>nombreUsuario: " + persona.altura + " </p>";
    resultadoDiv.innerHTML += "<p>contraseña: " + persona.contraseña + " </p>";
    resultadoDiv.innerHTML += "<p>contraseña: " + persona.Ncontraseña + " </p>";
    resultadoDiv.style.display= "block";
    console.log("Propiedades de Persona:", propiedadesPersona);
    console.log("Datos de la Persona:", persona);
  }
  
  function validarSexo(input) {
    if (input === "H" || input === "M" || input === "O") {
      return input;
    } else {
      return null;
    }
  }