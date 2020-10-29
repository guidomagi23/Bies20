function estacionar_dar(idUsuario) {
	
//Define la variable para responder si encontró o no el usuario
	var resp_agre = "";

//	alert ("esta en agregar_usuario_rol");
//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Id_Usuario" : idUsuario,
		
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar_rol.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://b-ies.000webhostapp.com/BIES/usuario_estacionar_1.php',
		success: function(respuesta) {
			resp_agre = respuesta['estado'];
			resp_agre = "ok";
		
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre = "er";
		}
	});

	return resp_agre;
}

function estacionar_sanjeronimo(idUsuario) {
	
//Define la variable para responder si encontró o no el usuario
	var resp_agre = "";

//	alert ("esta en agregar_usuario_rol");
//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Id_Usuario" : idUsuario,
		
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar_rol.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://b-ies.000webhostapp.com/BIES/usuario_estacionar_2.php',
		success: function(respuesta) {
			resp_agre = respuesta['estado'];
			resp_agre = "ok";
		
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre = "er";
		}
	});

	return resp_agre;
}

function estacionar_tucuman(idUsuario) {
	
//Define la variable para responder si encontró o no el usuario
	var resp_agre = "";

//	alert ("esta en agregar_usuario_rol");
//Arma el "post" para enviarlo por ajax
	var parametros = {
		"Id_Usuario" : idUsuario,
		
	};
//Invoca a la url donde se encuentra el archivo "usuario_agregar_rol.php"
	$.ajax({
		data: parametros,
		type: 'post',
		dataType: 'json',
		async: false,
		url: 'https://b-ies.000webhostapp.com/BIES/usuario_estacionar_3.php',
		success: function(respuesta) {
			resp_agre = respuesta['estado'];
			resp_agre = "ok";
		
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre = "er";
		}
	});

	return resp_agre;
}