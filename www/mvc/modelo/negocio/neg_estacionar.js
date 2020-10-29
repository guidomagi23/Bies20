var usu_nuevo = new DtoEstacionar();

function validar(dni){
	alert("Estoy en validar");
	//var usu_nuevo = new DtoEstacionar();
	var id = 0;
	usu_nuevo.setDni = dni;
	alert("DNI");
	alert(usu_nuevo.getDni);
	
	//funcionando
	resp_agr = estacionar(saber_id(usu_nuevo));
	
	alert("2");
	
	alert(resp_agr);
	return resp_agr;
	
}