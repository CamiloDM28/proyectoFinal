var usuarioAdministrador = {
  identificacion: "admin08",
  correo: "admin@example.com",
  clave: "admin123",
  rol: "administrador",
  fechaDeCreacion: "2023-06-05"
};

// Obtener el array de usuarios desde el almacenamiento local
var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

// Agregar el usuario administrador al array de usuarios
usuarios.push(usuarioAdministrador);

// Guardar el array de usuarios en el almacenamiento local
localStorage.setItem("usuarios", JSON.stringify(usuarios));

function login() {

  var numeroIdentificacion = document.getElementById("numero_identificacion").value;
  var contrasena = document.getElementById("contrasena").value;

  var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Verificar si el usuario existe en el array de clientes
  var clienteEncontrado = clientes.find(function(cliente) {
      return cliente.identificacion === numeroIdentificacion && cliente.clave === contrasena;
  });

  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.identificacion === numeroIdentificacion && usuario.clave === contrasena;
});

if (clienteEncontrado || usuarioEncontrado) {
    var tipoUsuario;
    
    if (clienteEncontrado) {
      tipoUsuario = clienteEncontrado.rol;
    } else {
      tipoUsuario = usuarioEncontrado.rol;
    }

      // Verificar el tipo de usuario
      if (tipoUsuario === "gerente") {
        window.location.href = "gestiondesucursales.html";
      } else if (tipoUsuario === "administrador") {
          window.location.href = "accesosdeadministrador.html";
      } else if (tipoUsuario === "vendedor") {
        window.location.href = "ventadetiquetes.html";
      } else if (tipoUsuario === "cliente") {
        window.location.href = "ventadetiquetesenlinea.html";
      }
  } else {
      alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
  }
}

console.log(JSON.parse(localStorage.getItem("clientes") || "[]"))
console.log(JSON.parse(localStorage.getItem("usuarios") || "[]"))

