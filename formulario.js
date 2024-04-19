// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById("edad").value = edad;
}

// Función para guardar los datos personales en localStorage
function guardarDatosPersonales() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;

    var datosPersonales = {
        nombre: nombre,
        apellido: apellido
        // Agregar otros campos aquí si es necesario
    };

    localStorage.setItem('datosPersonales', JSON.stringify(datosPersonales));
    
    alert('Datos personales guardados correctamente.');
}
