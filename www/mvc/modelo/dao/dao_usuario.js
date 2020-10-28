
function leer_por_dni(dtoUsuario) {
	//Define la variable para responder si encontro o no el usuario
	//  Los valores posibles son "er" (error de conexion), "" (no encontro el usuario),
	//  "ok" (encontro al usuario)
	
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
					
					//alert ("paso por setid");
					//dtoUsuario.setNombre = respuesta['Nombre'];	
					//dtoUsuario.setDni = respuesta['Dni'];
					//dtoUsuario.setContrasena = respuesta['Contrasena'];	
	
				},
				error: function(jqXHR, textStatus, errorMessage) {
					respuestaNoRecibida(jqXHR, textStatus);
					//alert ("paso por er");
					resp_leer_usuario = "er";

				}
			});
		}
		
		return resp_leer_usuario;
	}
	
	
	function respuestaNoRecibida(jqXHR, textStatus){
	//Informa el error, esto es solo de prueba, ya que se recuerda que el modelo
	//no debe tener contacto con la vista	
		alert("Error de conexion, intente mas tarde");
		alert (textStatus + jqXHR.status);
	}
	