$('#btRetornar').click(retornar);
function retornar(){
    history.back();
}

$('#btGuardar').click(guardar);
function guardar(){
    var inNombre = $('#inNombre');
    var nombre = inNombre.val().trim();
    inNombre.val(nombre);
    var inContrasenaActual = $('#inContrasenaActual');
    var contrasenaActual = inContrasenaActual.val().trim();
    inContrasenaActual.val(contrasenaActual);
    var inContrasenaNueva = $('#inContrasenaNueva');
    var contrasenaNueva = inContrasenaNueva.val().trim();
    inContrasenaNueva.val(contrasenaNueva);
    var inContrasenaReingresada = $('#inContrasenaReingresada');
    var contrasenaReingresada = inContrasenaReingresada.val().trim();
    inContrasenaReingresada.val(contrasenaReingresada);
    var res_validar_ingreso = validar_ingreso(dni, nombre, contrasenaActual, contrasenaNueva, contrasenaReingresada);
    if (res_validar_ingreso == "1") {
        alert ("Datos incorrectos, reingrese");
    }else{
        if (res_validar_ingreso == "2"){
            alert("El usuario fue modificado correctamente");
        }else{
            if (res_validar_ingreso == "3" ) {
                alert("ERROR, la modificación no se pudo realizar");
            }else{
                alert("ERROR!!!!");
            }
        }
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" :
    decodeURIComponent(results[1].replace(/\+/g, " "));
}

var dni = "";

function obtenerUsuario() {
    dni = getParameterByName('usuario');
    alert ("Usuario: " + dni);
    var nombre = obtenerNombreUsuario(dni);
    var inNombre = $('#inNombre');
    inNombre.val(nombre);
}
