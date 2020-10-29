document.getElementById('titulo').style.backgroundColor= "#7a1b0c";
document.getElementById('pgEstacionamiento').style.backgroundColor= "#7a1b0c";


$('#btCerrarSesion').click(cerrarSesion);
function cerrarSesion(){
    window.location.href='../vista/login.html';
}

$('#btAtras').click(atras);
function atras(){
    window.location.href='../vista/login.html';
}
var dni_logueado = "";

$('#btDar').click(dar);
function dar(){
	
	usuario = dni_logueado;
	alert("boton 2");
	

	alert("dni dar");
	alert(usuario);
	
	alert("controlador: tiene que aparecer el mensaje dentro de validar");
	
	var res = validar(usuario);
	alert("boton 4");
	alert("controlador dice: ");
	if(res == "ok"){
		alert("Te has estacionado en DAR");
		window.location.href='../vista/detalle_estacionamiento.html';
	}else {
		alert("Error al estacioanar.");
		}
}

$('#btSanJeronimo').click(SanJeronimo);
function SanJeronimo(){
    window.location.href='../vista/detalle_estacionamiento.html';
    alert("Te has estacionado en San Jeronimo");
}

$('#btTucuman').click(Tucuman);
function Tucuman(){
    window.location.href='../vista/detalle_estacionamiento.html';
    alert("Te has estacionado en Tucuman");
}

$('#btIrse').click(Irse);
function Irse(){
    alert("Has abandonado el estacionamiento");
    window.location.href='../vista/login.html'
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Funcion que se ejecuta al abrirse la ventana
// obtiene el dni del get, descripcion y nivel del rol del usuario
function obtenerUsuario() {
	dni_logueado = getParameterByName('usuario');
}

// Funcion que se ejecuta al abrirse la ventana
// obtiene el dni del get, invoca a la funcion solicitarRolesDisponibles
// para que ese usuario y a la funcion cargarRoles
function inicializarVentana() {
	obtenerUsuario();
	alert("dni_logueado");
	alert(dni_logueado);
}

