// Variables globales o funciones que necesites
var contadorFamiliares = 0;

function agregarFamiliar() {
    contadorFamiliares++;

    var familiaresContainer = document.getElementById("familiaresContainer");
    var nuevoFamiliar = document.createElement("div");
    nuevoFamiliar.innerHTML = `
        <label for="familiarNombre${contadorFamiliares}">Nombre:</label>
        <input type="text" id="familiarNombre${contadorFamiliares}" name="familiarNombre${contadorFamiliares}">
        <label for="familiarParentesco${contadorFamiliares}">Parentesco:</label>
        <input type="text" id="familiarParentesco${contadorFamiliares}" name="familiarParentesco${contadorFamiliares}">
        <!-- Otros campos de datos familiares -->
    `;
    familiaresContainer.appendChild(nuevoFamiliar);
}

function guardarFamiliares() {
    var datosFamiliares = [];

    for (var i = 1; i <= contadorFamiliares; i++) {
        var nombre = document.getElementById("familiarNombre" + i).value;
        var parentesco = document.getElementById("familiarParentesco" + i).value;

        datosFamiliares.push({ nombre: nombre, parentesco: parentesco });
    }

    console.log("Datos Familiares Guardados:", datosFamiliares);
}
