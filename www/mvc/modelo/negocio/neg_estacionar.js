var usu_nuevo = new DtoEstacionar();

function validar_dar(dni){
	
	//var usu_nuevo = new DtoEstacionar();
	var id = 0;
	usu_nuevo.setDni = dni;

	
	//funcionando
	resp_agr = estacionar_dar(saber_id(usu_nuevo));
	
	return resp_agr;
	
}

function validar_sanjeronimo(dni){
	
	//var usu_nuevo = new DtoEstacionar();
	var id = 0;
	usu_nuevo.setDni = dni;

	
	//funcionando
	resp_agr = estacionar_sanjeronimo(saber_id(usu_nuevo));

	return resp_agr;
	
}

function validar_tucuman(dni){
	
	//var usu_nuevo = new DtoEstacionar();
	var id = 0;
	usu_nuevo.setDni = dni;

	
	//funcionando
	resp_agr = estacionar_tucuman(saber_id(usu_nuevo));

	return resp_agr;
	
}

function validar_desestacionar(dni){
	
	//var usu_nuevo = new DtoEstacionar();
	var id = 0;
	usu_nuevo.setDni = dni;

	
	//funcionando
	resp_agr = desestacionar(saber_id(usu_nuevo));

	return resp_agr;
	
}