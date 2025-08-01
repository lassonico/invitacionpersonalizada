console.log("On line")
 // Simulación de base de datos de contactos
 const contactos = [
 { telefono: "3001234567", nombre: "Carlos Pérez" },
 { telefono: "3109876543", nombre: "Ana Gómez" },
 { telefono: "3205551122", nombre: "Luis Martínez" }
 ];
 // Función para obtener parámetros de la URL
 function obtenerParametro(nombre) {
 const urlParams = new URLSearchParams(window.location.search);
 return urlParams.get(nombre);
 }
 // Buscar el número en la lista y mostrar el nombre
 const telefono = obtenerParametro("telefono");
 const contacto = contactos.find(c => c.telefono === telefono);
 const mensaje = document.getElementById("mensaje");
 if (contacto) {
 mensaje.textContent = `Hola ${contacto.nombre}, acompañanos en éste día y celebra con nosotros ésta nueva etapa en nuestras vidas.`;
 } else {
 mensaje.textContent = "No se encontró tu número en la base de datos.";
 }

window.addEventListener("load", function() {
      setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("contenido").style.display = "block";

        const telefono = obtenerParametro("telefono");
        const nombre = buscarNombre(telefono);

        const mensaje = document.getElementById("mensaje");
        if (nombre) {
          mensaje.textContent = `Hola ${nombre}, esta es tu invitación personalizada.`;
        } else {
          mensaje.textContent = "No se encontró una invitación personalizada para este número.";
        }
      }, 6000);
    });
