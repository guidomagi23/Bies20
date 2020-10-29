function agregar_usuario(dtoUsuario) {
//Define la variable para responder si encontrÃ³ o no el usuario
//  Los valores posibles son "er" (error de conexion), "" (no agrego el usuario),
//  "ok" (agrego el usuario)
	var resp_agre_usuario = "";

//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Dni" : dtoUsuario.getDni,
		"Nombre" : dtoUsuario.getNombre,
		"Contrasena" : dtoUsuario.getContrasena,
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://iestsdsids2.000webhostapp.com/Usuarios/usuario_agregar.php',
		success: function(respuesta) {
			resp_agre_usuario = respuesta['estado'];
			dtoUsuario.setId = respuesta['idUsuarioNuevo'];
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre_usuario = "er";
		}
	});
	
	return resp_agre_usuario;
}