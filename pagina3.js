// Función para agregar una nueva condición de salud al formulario
function agregarCondicionSalud() {
    // Contenedor donde se agregarán las nuevas condiciones de salud
    var condicionesSaludContainer = document.getElementById("condicionesSaludContainer");
  
    // Crear un nuevo div para contener los elementos de la nueva condición de salud
    var nuevaCondicionDiv = document.createElement("div");
    nuevaCondicionDiv.classList.add("row");
  
    // Crear input para la nueva condición de salud
    var nuevaCondicionInput = document.createElement("input");
    nuevaCondicionInput.classList.add("form-control");
    nuevaCondicionInput.setAttribute("type", "text");
    nuevaCondicionInput.setAttribute("name", "condicionSalud");
    nuevaCondicionInput.setAttribute("placeholder", "Ingrese la condición de salud");
  
    // Crear botón para eliminar la nueva condición de salud
    var eliminarCondicionBtn = document.createElement("button");
    eliminarCondicionBtn.classList.add("btn", "btn-danger", "ms-3");
    eliminarCondicionBtn.setAttribute("type", "button");
    eliminarCondicionBtn.textContent = "Eliminar";
    eliminarCondicionBtn.addEventListener("click", function() {
      condicionesSaludContainer.removeChild(nuevaCondicionDiv);
    });
  
    // Agregar input y botón al div de la nueva condición de salud
    nuevaCondicionDiv.appendChild(nuevaCondicionInput);
    nuevaCondicionDiv.appendChild(eliminarCondicionBtn);
  
    // Agregar el div de la nueva condición de salud al contenedor principal
    condicionesSaludContainer.appendChild(nuevaCondicionDiv);
  }
  