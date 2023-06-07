function mostrarPrecio() {
    var peliculasCombo = document.getElementById("selectorDePeliculas");
    var precioInput = document.getElementById("precio");
    var peliculaSeleccionada = peliculasCombo.value;
    var precio = obtenerPrecio(peliculaSeleccionada);

    var cantidadInput = document.getElementById("cantidad");
    var cantidad = cantidadInput.value;
    var subtotal = precio * cantidad;

    var subtotalInput = document.getElementById("Subtotal");
    subtotalInput.value = subtotal.toFixed(2);
    precioInput.value = precio;
}


function agregarFila() {
    var numeroInput = document.getElementById("numero");
    var peliculasCombo = document.getElementById("selectorDePeliculas");
    var cantidadInput = document.getElementById("cantidad");
    var fechaInput = document.getElementById("fechaCompra");
    var precioInput = document.getElementById("precio");
    var subtotalInput = document.getElementById("Subtotal");

    var numero = numeroInput.value;
    var peliculaSeleccionada = peliculasCombo.value;
    var cantidad = cantidadInput.value;
    var fecha = fechaInput.value;
    var precio = precioInput.value;
    var subtotal = subtotalInput.value;

    // Verificar si se ha seleccionado una película
    if (peliculaSeleccionada === "") {
        alert("Por favor, seleccione una película.");
        return; // Salir de la función sin agregar la fila a la tabla
    }

    // Obtener la referencia a la tabla y agregar una nueva fila
    var tabla = document.getElementById("tablaCompras").getElementsByTagName("tbody")[0];
    var fila = tabla.insertRow();

    // Agregar las celdas a la fila con los valores obtenidos

    var celdaCheckbox = fila.insertCell();

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        // Obtener la fila actual
        var filaActual = this.parentNode.parentNode;

        // Si se selecciona el checkbox, seleccionar la fila
        if (this.checked) {
            filaActual.classList.add("seleccionada");
        } else {
            filaActual.classList.remove("seleccionada");
        }
    });
    celdaCheckbox.appendChild(checkbox);


    var celdaNumero = fila.insertCell();
    celdaNumero.classList.add("celdaNumero");
    celdaNumero.innerHTML = numero;

    var celdaPelicula = fila.insertCell();
    celdaPelicula.classList.add("celdaPelicula");
    celdaPelicula.innerHTML = peliculaSeleccionada;

    var celdaCantidad = fila.insertCell();
    celdaCantidad.classList.add("celdaCantidad");
    celdaCantidad.innerHTML = cantidad;

    var celdaFecha = fila.insertCell();
    celdaFecha.classList.add("celdaFecha");
    celdaFecha.innerHTML = fecha;

    var celdaPrecio = fila.insertCell();
    celdaPrecio.classList.add("celdaPrecio");
    celdaPrecio.innerHTML = precio;

    var celdaSubtotal = fila.insertCell();
    celdaSubtotal.classList.add("subtotal");
    celdaSubtotal.innerHTML = subtotal;


    // Limpiar los valores de los inputs
    numeroInput.value = "";
    peliculasCombo.value = "";
    cantidadInput.value = "";
    fechaInput.value = "";
    precioInput.value = "";
    subtotalInput.value = "";

    var subtotalElements = document.getElementsByClassName("subtotal");
    var total = 0;
    
    for (var i = 0; i < subtotalElements.length; i++) {
      var subtotal = parseFloat(subtotalElements[i].textContent);
      total += subtotal;
    }
    
    var h3Element = document.getElementById("resultado");
    h3Element.textContent = "Total: " + total.toFixed(2);
}

function obtenerPrecio(pelicula) {

    var precios = {
        "El club de la lucha": 10000,
        "Apocalypse Now": 8999,
        "Ciudad de Dios": 9499,
        "Titanic": 7745,
        "El Padrino": 13112,
        "Forrest Gump": 9558,
        "La lista de Schindler": 9658,
        "El Señor de los Anillos: El retorno del Rey": 9458,
        "Matrix": 9358,
        "El Rey León": 9858,
        "Avengers: Endgame": 9758,
        "El resplandor": 9258,
        "Volver al futuro": 9858,
        "El silencio de los corderos": 9958,
        "La naranja mecánica": 9658,
        "Interestelar": 9658,
        "El padrino II": 9.258,
        "Gladiador": 9658,
        "Bohemian Rhapsody": 10950,
        "Jurassic Park": 4960,
        "El viaje de Chihiro": 9258,
        "Ciudad de Dios": 9958,
        "La La Land": 9158,
        "El club de los poetas muertos": 9158,
        "Taxi Driver": 9958,
        "Toy Story": 9458,
        "El bueno, el malo y el feo": 7723,
        "Reservoir Dogs": 7323,
        "Apocalypse Now": 7923,
        "El pianista": 7123,
        "Shutter Island": 7923,
        "El laberinto del fauno": 7623,
        "V de Vendetta": 7823,
        "Joker": 7323,
        "El gran Gatsby": 7823,
        "Los vengadores": 7223,
        "El sexto sentido": 7723,
        "Django desencadenado": 7723,
        "Oldboy": 7523,
        "El señor de los anillos: La comunidad del anillo": 7823,
        "American Beauty": 7623,
        "Naranja y media": 7623,
        "El exorcista": 7823,
        "El club de los cinco": 7723,
        "El show de Truman": 7323,
        "El planeta de los simios": 7523,
        "El indomable Will Hunting": 7723,
        "La princesa Mononoke": 7523,
        "El león, la bruja y el armario": 7523,
        "Her": 7623,
        "El gran hotel Budapest": 7723,
        "La pasión de Cristo": 7723,
        "Cisne negro": 7723,
        "Slumdog Millionaire": 7423,
        "Rocky": 7823,
        "Los juegos del hambre": 7823,
        "Mulán": 7823,
        "Whiplash": 7323,
        "El rescatista": 7823,
        "El renacido": 7923,
        "Interstellar": 7323,
        "La forma del agua": 7823,
        "Birdman": 7223,
        "Blade Runner": 7123,
        "Amélie": 7223,
        "El efecto mariposa": 7323,
        "El profesional": 7423,
        "Batman Begins": 7523,
        "El árbol de la vida": 7523,
        "Los miserables": 7523,
        "El señor de los anillos: Las dos torres": 7723,
        "Los otros": 7923,
        "El castillo ambulante": 7423,
        "La red social": 7923,
        "La última cena": 7923,
        "El aviador": 7723,
        "La milla verde": 7923,
        "Los siete magníficos": 7223,
        "La delgada línea roja": 7723,
        "Midnight in Paris": 9323,
        "Mulholland Drive": 7923,
        "Cazadores de sueños": 7323,
        "La doble vida de Verónica": 7923,
        "Los chicos del coro": 7723,
        "Cincuenta sombras de Grey": 7823,
        "Noche de juegos": 7023,
        "Tomb Raider": 7023,
        "Capitán América: El primer vengador": 7623,
        "Aladdín": 7723,
        "La forma de las cosas": 7823,
        "Loco corazón": 7923,
        "Solo en casa": 7023,
        "Shrek": 7023,
    };

    // Verificamos si la película existe en el objeto de precios
    if (precios.hasOwnProperty(pelicula)) {
        return precios[pelicula];
    } else {
        return "Precio no disponible";
    }
}

function eliminarFilasSeleccionadas() {
    // Obtener todas las filas de la tabla
    var filas = document.querySelectorAll("#tablaDeCompras tbody tr");
  
    //Recorre todas la filas de forma invertida para evitar problemas con los indices al eliminar
    for (var i = filas.length - 1; i >= 0; i--) {
      var fila = filas[i];
  
      // Verificar si la fila está seleccionada
      if (fila.classList.contains("seleccionada")) {
        // Eliminar la fila
        fila.remove();
      }
    }

    var subtotalElements = document.getElementsByClassName("subtotal");
    var total = 0;
    
    for (var i = 0; i < subtotalElements.length; i++) {
      var subtotal = parseFloat(subtotalElements[i].textContent);
      total += subtotal;
    }
    
    var h3Element = document.getElementById("resultado");
    h3Element.textContent = "Total: " + total.toFixed(2);
  }



    class GuardarCompras {
    constructor(numero, pelicula, cantidad, fecha, precio, subTotal){

        this.numero = numero;
        this.pelicula = pelicula;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.precio = precio;
        this.subTotal = subTotal;
    }

    getNumero(){
        return this.numero;
    }

    setNumero(numero){
        this.numero = numero;
    }

    getPelicula(){
        return this.pelicula;
    }

    setPelicula(pelicula){
        this.pelicula = pelicula;
    }

    getCantidad(){
        return this.cantidad;
    }

    setCantidad(cantidad){
        this.cantidad = cantidad;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(fecha){
        this.fecha = fecha;
    }

    getPrecio(){
        return this.precio;
    }

    setPrecio(precio){
        this.precio = precio;
    }

    getSubtoTal(){
        return this.subTotal;
    }

    setFecha(subTotal){
        this.subTotal = subTotal;
    }
}

function guardar() {

    var guardarCompras = JSON.parse(localStorage.getItem("guardarCompras") || "[]");

    var numeroInput = document.getElementsByClassName("celdaNumero");
    var peliculaSelect = document.getElementsByClassName("celdaPelicula");
    var cantidadInput = document.getElementsByClassName("celdaCantidad");
    var fechaInput = document.getElementsByClassName("celdaFecha");
    var precioInput = document.getElementsByClassName("celdaPrecio");
    var subTotalInput = document.getElementsByClassName("Subtotal");

    guardarCompra = new GuardarCompras(numeroInput.value, peliculaSelect.value, cantidadInput.value, fechaInput.value, precioInput.value, subTotalInput.value);
    guardarCompras.push(guardarCompra);
    localStorage.setItem("guardarCompras", JSON.stringify(guardarCompras));

    numeroInput.value = "";
    peliculaSelect.value = "";
    cantidadInput.value = "";
    fechaInput.value = "";
    precioInput.value = "";
    subTotalInput.value = "";

    numeroInput.focus();
}

console.log(JSON.parse(localStorage.getItem("guardarCompras") || "[]"))


  





