var ciudadesPorDepartamento = {
    Amazonas: ["Leticia", "Puerto Nariño"],
    Antioquia: ["Medellín", "Bello", "Itagüí", "Envigado", "Apartadó", "Rionegro", "Turbo", "Caucasia", "Sabaneta", "Girardota"],
    Arauca: ["Arauca", "Saravena", "Tame"],
    Atlántico: ["Barranquilla", "Soledad", "Malambo", "Sabanalarga", "Baranoa", "Galapa"],
    Bolívar: ["Cartagena", "Barranco de Loba", "Magangué", "Arjona", "El Carmen de Bolívar", "San Juan Nepomuceno"],
    Boyacá: ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Togüí", "Paipa", "Soatá"],
    Caldas: ["Manizales", "Pereira", "Villamaría", "Chinchiná", "La Dorada", "Manzanares"],
    Caquetá: ["Florencia", "San Vicente del Caguán", "Puerto Rico", "Curillo", "Valparaíso"],
    Casanare: ["Yopal", "Aguazul", "Villanueva", "Tauramena", "Monterrey", "Orocue"],
    Cauca: ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Patía", "El Bordo", "Guachené"],
    Cesar: ["Valledupar", "Aguachica", "Bosconia", "Codazzi", "La Jagua de Ibirico", "Chiriguaná"],
    Chocó: ["Quibdó", "Nuquí", "Istmina", "Tadó", "Cértegui", "Condoto"],
    Córdoba: ["Montería", "Planeta Rica", "Sahagún", "Lorica", "Tierralta", "Montelíbano"],
    Cundinamarca: ["Bogotá", "Soacha", "Zipaquirá", "Funza", "Girardot", "Chía", "Facatativá"],
    Guainía: ["Inírida"],
    Guaviare: ["San José del Guaviare"],
    Huila: ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre", "Baraya"],
    "La Guajira": ["Riohacha", "Maicao", "Uribia", "Manaure", "Dibulla", "San Juan del Cesar"],
    Magdalena: ["Santa Marta", "Ciénaga", "Fundación", "El Banco", "Aracataca", "Pueblo Bello"],
    Meta: ["Villavicencio", "Acacías", "Granada", "Puerto López", "Restrepo", "San Carlos de Guaroa"],
    Nariño: ["Pasto", "Tumaco", "Ipiales", "Túquerres", "La Unión", "Samaniego"],
    "Norte de Santander": ["Cúcuta", "Pamplona", "Ocaña", "Villa del Rosario", "Los Patios", "El Zulia"],
    Putumayo: ["Mocoa", "Puerto Asís", "Orito", "Sibundoy", "San Miguel", "Villagarzón"],
    Quindío: ["Armenia", "Calarcá", "Quimbaya", "Montenegro", "La Tebaida", "Salento"],
    Risaralda: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "Belén de Umbría", "Marsella"],
    "San Andrés y Providencia": ["San Andrés", "Providencia"],
    Santander: ["Bucaramanga", "Floridablanca", "Girón", "Barrancabermeja", "Piedecuesta", "San Gil"],
    Sucre: ["Sincelejo", "Corozal", "Sincé", "Tolú", "Morroa", "San Onofre"],
    Tolima: ["Ibagué", "Espinal", "Fresno", "Melgar", "Honda", "Líbano"],
    "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá", "Cartago", "Yumbo", "Buga"],
    Vaupés: ["Mitú", "Carurú", "Taraira", "Papunaua", "Yavaraté"],
    Vichada: ["Puerto Carreño", "La Primavera", "Santa Rosalía", "Cumaribo", "La Guadalupe", "Santa Rita"],
};


function cargarCiudades() {
    var departamento = document.getElementById("departamento").value;
    var ciudadSelect = document.getElementById("ciudad");
    ciudadSelect.innerHTML = "<option value=''>Seleccionar ciudad</option>";

    if (departamento !== "") {
        var ciudades = ciudadesPorDepartamento[departamento];
        for (var i = 0; i < ciudades.length; i++) {
            var ciudad = ciudades[i];
            var option = document.createElement("option");
            option.value = ciudad;
            option.innerHTML = ciudad;
            ciudadSelect.appendChild(option);
        }
    }
}

function guardarSucursal() {
    if (validarFormulario()) {
        // Lógica para guardar la sucursal
        alert("Sucursal guardada correctamente");
    }
}

function actualizarSucursal() {
    if (validarFormulario()) {
        // Lógica para actualizar la sucursal
        alert("Sucursal actualizada correctamente");
    }
}

function eliminarSucursal() {
    if (confirm("¿Estás seguro de que deseas eliminar esta sucursal?")) {
        // Lógica para eliminar la sucursal
        alert("Sucursal eliminada correctamente");
    }
}

function validarFormulario() {
    var codigo = document.getElementById("codigo").value;
    var gerente = document.getElementById("gerente").value;
    var departamento = document.getElementById("departamento").value;
    var ciudad = document.getElementById("ciudad").value;
    var direccion = document.getElementById("direccion").value;
    var barrio = document.getElementById("barrio").value;
    var numeroSalas = document.getElementById("numero_salas").value;
    var numeroTrabajadores = document.getElementById("numero_trabajadores").value;

    if (
        codigo === "" ||
        gerente === "" ||
        departamento === "" ||
        ciudad === "" ||
        direccion === "" ||
        barrio === "" ||
        numeroSalas === "" ||
        numeroTrabajadores === ""
    ) {
        alert("Por favor completa todos los campos");
        return false;
    }

    return true;
}