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
	
	var res = validar_dar(usuario);

	if(res == "ok"){
		alert("Te has estacionado en DAR");
		window.location.href='../vista/detalle_estacionamiento.html';
	}else {
		alert("Error al estacioanar.");
		}
}

$('#btSanJeronimo').click(SanJeronimo);
function SanJeronimo(){
   
	usuario = dni_logueado;
	
	var res = validar_sanjeronimo(usuario);

	if(res == "ok"){
		alert("Te has estacionado en SAN JERONIMO");
		window.location.href='../vista/detalle_estacionamiento.html';
	}else {
		alert("Error al estacioanar.");
		}
}

$('#btTucuman').click(Tucuman);
function Tucuman(){
   usuario = dni_logueado;
	
	var res = validar_tucuman(usuario);

	if(res == "ok"){
		alert("Te has estacionado en TUCUMAN");
		window.location.href='../vista/detalle_estacionamiento.html';
	}else {
		alert("Error al estacioanar.");
		}
}


$('#btIrse').click(Irse);
function Irse(){
    usuario = dni_logueado;
	alert("dni_logueado");
	alert(usuario);
	
	var res = validar_desestacionar(usuario);

	if(res == "ok"){
		alert("Has abandonado el estacionamiento");
		window.location.href='../vista/login.html';
	}else {
		alert("Error al dejar el estacionamiento.");
		}
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
}

