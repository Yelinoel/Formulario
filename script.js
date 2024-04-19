document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento div donde se presentarán los datos
    var datosPresentados = document.getElementById('datosPresentados');
  
    // Simular datos
    var datos = [
      { nombre: 'Juan', edad: 30 },
      { nombre: 'María', edad: 25 },
      { nombre: 'Pedro', edad: 35 }
    ];
  
    // Función para presentar los datos en el div
    function presentarDatos() {
      // Limpiar el contenido previo del div
      datosPresentados.innerHTML = '';
  
      // Crear elementos para cada dato y agregarlos al div
      datos.forEach(function(dato) {
        var elemento = document.createElement('p');
        elemento.textContent = 'Nombre: ' + dato.nombre + ', Edad: ' + dato.edad;
        datosPresentados.appendChild(elemento);
      });
    }
  
    // Llamar a la función para presentar los datos cuando se carga la página
    presentarDatos();
  });
  