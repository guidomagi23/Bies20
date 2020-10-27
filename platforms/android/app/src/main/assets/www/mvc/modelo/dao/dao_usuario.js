
// "DAO" destinada a contener todos los accesos a la tabla "Usuarios"
// del modelo. 
// No contiene el acceso real (query a la tabla) porque la base
// se encuentra en un servidor remoto, por lo tanto lo que hace
// es invocar mediante "ajax" a scripts php para cada accion a 
// realizar.

// Funcion destinada a obtener los datos de un usuario x por su dni.
//
// Recibe como parametro un "DTO" dentro del cual se encuentra el
// dni que se quiere leer
//
// Retorna una "se�al" con el resultado del acceso al servidor y el 
// mismo DTO recibido como parametro con la informacion (si habia)
//
function leer_por_dni(dtoUsuario) {
	//Define la variable para responder si encontro o no el usuario
	//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
	//  "ok" (encontro al usuario)
	alert ("entro leer por dni");
		var resp_leer_usuario = "";
	//Obtiene el dni del objeto recibido como parametro	
		dni = dtoUsuario.getDni;
	//Pregunta si es numerico o vacio
		if (isNaN(dni) || dni == "") { 
	
		}else{ 
	//Arma el "post" para enviarlo por ajax
			var parametros = {
				"Dni" : dni,
			};
	//Invoca a la url donde se encuentra el archivo "usuario_leer_por_dni.php"
			$.ajax({
				data: parametros,
				type: 'post',
				dataType: 'json',
				async: false,
				url: 'https://b-ies.000webhostapp.com/BIES/usuario_login.php',
				success: function(respuesta) {
					resp_leer_usuario = "Okay";
	//Completa la informacion del DTO con la respuesta del servidor
					dtoUsuario.setId = respuesta['Id_usuario'];
					
					alert ("paso por setid");
					//dtoUsuario.setNombre = respuesta['Nombre'];	
					//dtoUsuario.setDni = respuesta['Dni'];
					//dtoUsuario.setContrasena = respuesta['Contrasena'];	
	
				},
				error: function(jqXHR, textStatus, errorMessage) {
					respuestaNoRecibida(jqXHR, textStatus);
					alert ("paso por er");
					resp_leer_usuario = "er";

				}
			});
		}
		return resp_leer_usuario;
	}
	
	//Funcion que se ejecuta si NO pudo conectarse con el servidor (error de conexion).
	//
	//Recibe como parametros las respuestas ajax ante el intento de conexion	
	//
	function respuestaNoRecibida(jqXHR, textStatus){
	//Informa el error, esto es solo de prueba, ya que se recuerda que el modelo
	//no debe tener contacto con la vista	
		alert("Error de conexion, intente mas tarde");
		alert (textStatus + jqXHR.status);
	}	
	
	
	// Funcion destinada a modificar el nombre y/o contrase�a de un usuario x por su id.
	//
	// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
	//
	// Retorna una "se�al" con el resultado del acceso al servidor
	//
	
	//Invoca a la url donde se encuentra el archivo "usuario_modif_por_id.php"
		
	// Funcion destinada a agregar un usuario.
	//
	// Recibe como parametro un "DTO" dentro del cual se encuentran los datos
	//
	// Retorna una "se�al" con el resultado del acceso al servidor
	//
	