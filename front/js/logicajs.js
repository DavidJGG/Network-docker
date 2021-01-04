var usuarios = [];
const urlServ = "http://localhost:3000";
//const urlServ = "http://35.193.124.239:3000";
function G_llenarArreglo() {
    // $.ajax({
    //     url: urlServ+"/serv",
    //     type: "GET",
    //     success: function (data) {
    //         usuarios = data;
    //         pintarDatosInit()
    //     },
    //     error: function (err) {
    //         alert("Error");
    //         console.log(err);
    //     }
    // });

    fetch(urlServ+'/serv')
        .then(response => response.json())
        .then((data) => {
            usuarios=data;
            pintarDatosInit();
        }).catch(err => console.log(err));

    return usuarios.length;
}

//function getColor(edad) { return "primary" }
function getColor(edad) { return edad < 20 ? "danger" : "success" }


function guardar() {
    var nom = $("#nombre").val();
    var edad = $("#edad").val();
    var anio = $("#anio").val();


    if (!validarEdad(edad)) { return "Error edad incorrecta: " + edad; }
    if (!validarAnio(anio)) { return "Error año incorrecto: " + anio; }

    var usuario = {
        nombre: nom,
        edad: edad,
        anio: anio
    };

    $.ajax({
        url: urlServ + "/serv",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(usuario),
        success: function (data) {
            if (data.status == 200) {
                alert(data.msg);
                G_llenarArreglo()
            } else {
                alert("Error al insertar:" + data.msg);
                G_llenarArreglo()
            }
        },
        error: function (err) {
            alert("Error fatal");
            console.log(err);
        }
    });
}

function validarEdad(edad) {
    if ((/[1-9]+/g).test(edad)) {
        return true;
    }

    return false;
}

function validarAnio(anio) {
    if ((/[1-9][1-9][1-9][1-9]/).test(anio)) {
        return true;
    }

    return false;
}




function pintarDatosInit() {
    $("#misTarjetas").empty();

    for (let i = 0; i < usuarios.length; i++) {
        $("#misTarjetas").append(`
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-${getColor(usuarios[i].edad)} shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="h5 mb-0 font-weight-bold text-gray-800">Nombre: ${usuarios[i].nombre}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">Edad: ${usuarios[i].edad}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">Año: ${usuarios[i].anio}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
}

$(document).ready(function () {
    G_llenarArreglo();
    pintarDatosInit();
});
