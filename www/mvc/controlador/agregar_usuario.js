
// Controlador de la ventana que permite agregar un nuevo
// usuario al sistema

// Definicion de variables globales
var dni_logueado = "";
var rolNivel = "";
var rolDescripcion = "";
var arreglo_roles_disponibles = new Array();
// Select de roles
var s = document.getElementById('seRol');

// Boton retornar
$('#btRetornar').click(retornar);
function retornar(){
    history.back();
}

// Boton agregar
$('#btAgregar').click(agregar);
function agregar(){
// Obtiene de la vista los datos dni (del usuario a agregar) y
// el rol que se la va a asignar.
// Tambien obtiene de la vista la contraseña del usuario actual
// a fin de verificar quien agrega un nuevo usuario
 	var inDni = $('#inDni');
	var dni_nuevo = inDni.val().trim();
	inDni.val(dni_nuevo);
	
	var inContrasena = $('#inContrasena');
	var contrasena = inContrasena.val().trim();
	inContrasena.val(contrasena);
	
	dni = dni_logueado;
	ubicRolSelec = $("#seRol").prop('selectedIndex');
	idRol = arreglo_roles_disponibles[ubicRolSelec].getIdRol;
	
// Invoca a una funcion del modelo, especialmente de la logica del
// negocio que valida los datos y si son validos solicita al resto 
// del modelo que se conecte con el servidor con el objeto de
// actualizar de la base de datos (agregar el usuario)		
	var res_validar_ingreso = validar_ingreso(dni, contrasena, dni_nuevo, idRol); 

// Verifica el resultado de la funcion anterior, si retorna 1
// significa que los datos no estaban de acuerdo a la logica del
// negocio, si retorna 2 es porque se modifico la base de datos del
// servidor, 3 significa que hubo algun error en el servidor, si tiene
// otro valor se produjo algun error de conexion
	if (res_validar_ingreso == "1") {
		alert ("Datos incorrectos, reingrese");
	} else {
		if (res_validar_ingreso == "2") {
			alert ("El usuario fue agregado correctamente");
		} else {
			if (res_validar_ingreso == "3") {
				alert ("ERROR, no se pudo agregar el usuario");
			} else {
				alert ("ERROR!!!!");
			}
		}		
	}	
}

// Funcion para obtener un valor recibido por get
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
	rolNivel = getParameterByName('rolNivel');
	rolDescripcion = getParameterByName('rolDescripcion');	
}

// Funcion que se ejecuta al abrirse la ventana
// obtiene el dni del get, invoca a la funcion solicitarRolesDisponibles
// para que ese usuario y a la funcion cargarRoles
function inicializarVentana() {
	obtenerUsuario();
	document.getElementById("h1Usuario").innerHTML = "Usuario: " + dni_logueado;
	document.getElementById("h1Rol").innerHTML = "Rol: " + rolDescripcion;
	solicitarRolesDisponibles();
	cargarRoles();
}

// Funcion para obtener roles disponibles en la base de datos para crear nuevos
// usuarios
function solicitarRolesDisponibles() {
// Invoca a una funcion del modelo, que busca todos los roles con nivel inmediato
// inferior al del usuario de ingreso que existan en la base de datos	
	var res_obtener_roles = obtenerRolesDisponibles(rolNivel, arreglo_roles_disponibles);
	
// Verifica el resultado de la funcion anterior, si retorna 2 es correcto, cualquier
// otro representa un error de conexion	
	if (res_obtener_roles != "2") {
		alert ("ERROR!!!!");
	} 
}

// Funcion para enviar al "select" de la vista un rol
function agregarRol(texto, valor) {
	var op = document.createElement("option");
	op.value=valor;
	op.text=texto; 
	s.appendChild(op);
}

// Funcion para solicitar el envio a la vista todos los roles disponibles obtenidos del modelo
function cargarRoles() {	
// Recorre el arreglo e invoca a la funcion agregarRol enviando la descripcion y id de cada rol
	for (var i = 0; i < arreglo_roles_disponibles.length; i++) {
		agregarRol(arreglo_roles_disponibles[i].getDescripcion, arreglo_roles_disponibles[i].getIdRol);
	}	

// Hace visible en el "select" de la vista la primera de las opciones disponibles
	$(document).ready(function(){
		setTimeout(function(){
			$('select').val(arreglo_roles_disponibles[0].getIdRol);
			$('select').trigger('change');
		}, 0)
	});
}
