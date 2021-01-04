
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

function pintarDatosGuardados(){
    var nom = $("#nombre").val();
    var edad = $("#edad").val();
    var anio = $("#anio").val();
    var codHTML = guardar(nom, edad, anio);
    if(String(codHTML).length>30){
        usuarios.push({
            nombre: nom,
            edad: edad,
            anio: anio
        })
        $('#misTarjetas').append(codHTML);
    }else{
        alert(codHTML);
    }
}
