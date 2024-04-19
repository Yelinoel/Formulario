// Función para agregar un nuevo internamiento al formulario
function agregarInternamiento() {
    // Contenedor donde se agregarán los nuevos internamientos
    var internamientosContainer = document.getElementById("internamientosContainer");
  
    // Crear un nuevo div para contener los elementos del nuevo internamiento
    var nuevoInternamientoDiv = document.createElement("div");
    nuevoInternamientoDiv.classList.add("row");
  
    // Crear input para el nuevo internamiento
    var nuevoInternamientoInput = document.createElement("input");
    nuevoInternamientoInput.classList.add("form-control");
    nuevoInternamientoInput.setAttribute("type", "text");
    nuevoInternamientoInput.setAttribute("name", "internamiento");
    nuevoInternamientoInput.setAttribute("placeholder", "Ingrese los detalles del internamiento");
  
    // Crear botón para eliminar el nuevo internamiento
    var eliminarInternamientoBtn = document.createElement("button");
    eliminarInternamientoBtn.classList.add("btn", "btn-danger", "ms-3");
    eliminarInternamientoBtn.setAttribute("type", "button");
    eliminarInternamientoBtn.textContent = "Eliminar";
    eliminarInternamientoBtn.addEventListener("click", function() {
      internamientosContainer.removeChild(nuevoInternamientoDiv);
    });
  
    // Agregar input y botón al div del nuevo internamiento
    nuevoInternamientoDiv.appendChild(nuevoInternamientoInput);
    nuevoInternamientoDiv.appendChild(eliminarInternamientoBtn);
  
    // Agregar el div del nuevo internamiento al contenedor principal
    internamientosContainer.appendChild(nuevoInternamientoDiv);
  }
  