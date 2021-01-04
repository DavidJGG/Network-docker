var usuarios = [];

function G_llenarArreglo(){
    usuarios = [
        {
            nombre: "David",
            edad: "23",
            anio: 1997
        },
        {
            nombre: "Jonathan",
            edad: "18",
            anio: 2002
        },
        {
            nombre: "Gabriela",
            edad: "21",
            anio: 1999
        },
        {
            nombre: "Piter",
            edad: "15",
            anio: 2005
        }
    ];

    return usuarios.length;
}

function getColor(edad) { return "primary" }
//function getColor(edad) { return edad < 20 ? "danger" : "success" }


function guardar(nom, edad, anio) {
    if(!validarEdad(edad)){ return "Error edad incorrecta: "+edad;}
    if(!validarAnio(anio)){ return "Error año incorrecto: "+anio;}

    //${usuarios[i].edad < 20 ? "danger" : "success"}
    var codHTML = `
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-${getColor(edad)} shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="h5 mb-0 font-weight-bold text-gray-800">Nombre: ${nom}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">Edad: ${edad}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">Año: ${anio}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return codHTML;
}

function validarEdad(edad){
    if( (/[1-9]+/g).test(edad) ){
        return true;
    }

    return false;
}

function validarAnio(anio){
    if( (/[1-9][1-9][1-9][1-9]/).test(anio) ){
        return true;
    }

    return false;
}


exports.validarEdad = validarEdad;
exports.validarAnio = validarAnio;
exports.guardar = guardar;