class Cliente {

    constructor(identificacion, clave, nombres,apellidos,direccion,barrio, fechaDeNacimiento){
    
        this.identificacion = identificacion;
        this.clave = clave;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.barrio = barrio;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }


        getIdentificacion() {
            return this.identificacion;
        }
    
        setIdentificacion(identificacion) {
            this.identificacion = identificacion;
        }


        getClave() {
            return this.clave;
        }
    
        setClave(clave) {
            this.clave = clave;
        }
    

        getNombres() {
            return this.nombres;
        }
    
        setNombres(nombres) {
            this.nombres = nombres;
        }
    

        getApellidos() {
            return this.apellidos;
        }
    
        setApellidos(apellidos) {
            this.apellidos = apellidos;
        }
    

        getDireccion() {
            return this.direccion;
        }
    
        setDireccion(direccion) {
            this.direccion = direccion;
        }
    

        getBarrio() {
            return this.barrio;
        }
    
        setBarrio(barrio) {
            this.barrio = barrio;
        }
    

        getFechaDeNacimiento() {
            return this.fechaDeNacimiento;
        }
    
        setFechaDeNacimiento(fechaDeNacimiento) {
            this.fechaDeNacimiento = fechaDeNacimiento;
        }
    }

function adicionarCliente(){

    var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");;

    var identificacionInput = document.getElementById("identificacionCliente");
    var claveInput = document.getElementById("claveCliente");
    var nombresInput = document.getElementById("nombreCliente");
    var apellidosInput = document.getElementById("apellidoCliente");
    var direccionInput = document.getElementById("direccionCliente");
    var barrioInput = document.getElementById("barrioCliente");
    var fechaDeNacimientoInput = document.getElementById("fechaDeNacimientoCliente");

    cliente = new Cliente(identificacionInput.value, claveInput.value, nombresInput.value, apellidosInput.value, direccionInput.value, barrioInput.value, fechaDeNacimientoInput.value);
    cliente.rol = "cliente";
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    identificacionInput.value = "";
    claveInput.value = "";
    nombresInput.value = "";
    apellidosInput.value = "";
    direccionInput.value = "";
    barrioInput.value = "";
    fechaDeNacimientoInput.value = "";

    identificacionInput.focus();
}