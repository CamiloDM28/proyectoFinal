function validarFormulario() {
    var titulo = document.getElementById("titulo").value;
    var duracionHoras = document.getElementById("duracionHoras").value;
    var duracionMinutos = document.getElementById("duracionMinutos").value;
    var sala = document.getElementById("sala").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;

    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "";

    if (!titulo || !duracionHoras || !duracionMinutos || !sala || !fechaInicio || !fechaFin) {
        errorMessage.innerHTML = "Todos los campos son obligatorios";
    } else {
        console.log("Formulario válido, se puede proceder");
    }
}