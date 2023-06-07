/**
 * En esta archivo se mantedran los arrays de todos los objetos creados.
 * Ademas existen funciones para agregar objetos al array
 */

function adicionarEmpleado() {

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]");;


    cedulaInput = document.getElementById("cedulaEmpleado");
    nombreInput = document.getElementById("nombreEmpleado");

    empleado = new Empleado(cedulaInput.value,nombreInput.value);
    empleados.push(empleado);
    localStorage.setItem("empleados", JSON.stringify(empleados));


    cedulaInput.value = "";
    nombreInput.value = "";

    cedulaInput.focus();

}


function adicionarCliente() {

    var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");;

    cedulaInput = document.getElementById("cedulaCliente");
    nombreInput = document.getElementById("nombreCliente");

    cliente = new Cliente(cedulaInput.value,nombreInput.value);
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    cedulaInput.value = "";
    nombreInput.value = "";

    cedulaInput.focus();


}