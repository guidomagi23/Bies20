function estacionar(idUsuario) {
	alert("3");
//Define la variable para responder si encontró o no el usuario
	var resp_agre = "";
	alert("4");
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
			alert("5");
		},
		error: function(jqXHR, textStatus, errorMessage) {
			respuestaNoRecibida(jqXHR, textStatus);	
			resp_agre = "er";
		}
	});
	alert("6");
	alert(resp_agre);
	return resp_agre;
}