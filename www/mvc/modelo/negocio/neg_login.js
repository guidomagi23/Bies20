
var usu_ingreso = new DtoUsuario();
var usu_ingreso_est = new DtoEstacionamiento();


function validar_ingreso(usuario){
	//alert("Hola, estoy en validar_ingreso");
//Asigna el dni recibido como parametro al objeto creado	
	usu_ingreso.setDni = usuario;
	
//Define una variable para recibir la respuesta de la lectura	
	var resp_leer_usuario = "";

	
	resp_leer_usuario = leer_por_dni(usu_ingreso);
	
	
	
	if (resp_leer_usuario == "Okay"){
		
		resp_leer_usuario = validar_estacionamiento(usu_ingreso.getId);
		
	}
	
	return resp_leer_usuario;
	
}

function validar_estacionamiento(id_usuario){
	
	usu_ingreso_est.setUsuario = id_usuario;

	var est = "";

	est = ver_estado(usu_ingreso_est);
	
	
	return est;
}