/**
 * Para organizar mejor el proyecto coloque en archivos diferentes
 * cada clase. Si desea puede colocar en un solo archivo todas las
 * clases.
 */


class Cliente {

    constructor(cedula, nombre) {

        this.cedula = cedula;
        this.nombre = nombre;

    }

    
    setCedula(nombre) {

        this.cedula = cedula;
    }

    
    setNombre(nombre) {

        this.nombre = nombre;
    }

    getNombre() {

        return this.nombre;

    }

    
    getCedula() {

        return this.cedula;
        
    }
}   