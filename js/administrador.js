class Usuario {

    constructor(identificacion, correo, clave, rol, fechaDeCreacionDelUsuario){
    
        this.identificacion = identificacion;
        this.correo = correo;
        this.clave = clave;
        this.rol = rol;
        this.fechaDeCreacionDelUsuario = fechaDeCreacionDelUsuario;
    }


        getIdentificacion() {
            return this.identificacion;
        }
    
        setIdentificacion(identificacion) {
            this.identificacion = identificacion;
        }


        getCorreo() {
            return this.correo
        }

        setCorreo(correo) {
            this.correo = correo;
        }


        getClave() {
            return this.clave;
        }
    
        setClave(clave) {
            this.clave = clave;
        }
    

        getRol() {
            return this.rol;
        }

        setRol(rol) {
            this.rol = rol;
        }
    

        getFechaDeCreacionDelUsuario() {
            return this.fechaDeCreacionDelUsuario;
        }
    
        setFechaDeCreacionDelUsuario(fechaDeCreacionDelUsuario) {
            this.fechaDeCreacionDelUsuario = fechaDeCreacionDelUsuario;
        }
    }

function adicionarUsuario(){



    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");;

    var identificacionInput = document.getElementById("identificacion");
    var correoInput = document.getElementById("correo");
    var claveInput = document.getElementById("clave");
    var rolSelect = document.getElementById("roles");
    var fechaDeCreacionDelUsuarioInput = document.getElementById("fechaDeCreacion");

    usuario = new Usuario(identificacionInput.value,correoInput.value, claveInput.value,rolSelect.value , fechaDeCreacionDelUsuarioInput.value);

   
    var administrador = new Usuario("admin", "admin@example.com", "admin123", "administrador", "2023-01-01");
    usuarios.push(administrador);


    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    identificacionInput.value = "";
    correoInput.value = "";
    claveInput.value = "";
    rolSelect.value = "";
    fechaDeCreacionDelUsuarioInput.value = "";

    identificacionInput.focus();
}
