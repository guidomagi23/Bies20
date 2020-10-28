

	
function ver_estado(dtoEstacionamiento){

	var est = "";
	usuario = dtoEstacionamiento.getUsuario;
	


	//Arma el "post" para enviarlo por ajax
			var parametros = {
				"Id_usuario" : usuario,
			};
	//Invoca a la url donde se encuentra el archivo "usuario_leer_por_dni.php"
			$.ajax({
				data: parametros,
				type: 'post',
				dataType: 'json',
				async: false,
				url: 'https://b-ies.000webhostapp.com/BIES/estacionamiento_si_o_no.php',
				success: function(respuesta) {
					
	//Completa la informacion del DTO con la respuesta del servidor
					dtoEstacionamiento.setEstacionamiento = respuesta['Id_usuario'];
					est = dtoEstacionamiento.getEstacionamiento;
					//alert ("paso por setid");
					//dtoUsuario.setNombre = respuesta['Nombre'];	
					//dtoUsuario.setDni = respuesta['Dni'];
					//dtoUsuario.setContrasena = respuesta['Contrasena'];	
	
				},
				error: function(jqXHR, textStatus, errorMessage) {
					respuestaNoRecibida(jqXHR, textStatus);
					//alert ("paso por er");
					est = "er";

				}
			});
		
		
		return est;
	}
	
	function respuestaNoRecibida(jqXHR, textStatus){
	//Informa el error, esto es solo de prueba, ya que se recuerda que el modelo
	//no debe tener contacto con la vista	
		alert("Error de conexion, intente mas tarde");
		alert (textStatus + jqXHR.status);
	}
	
	
	