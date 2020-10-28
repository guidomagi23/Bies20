
class DtoEstacionamiento{
	constructor(setEstacionamiento = '',setUsuario = 0) {
		this.est = setEstacionamiento;
		this.usuario = setUsuario;
	}	

	
	set setEstacionamiento(est){
		this.est = est;
	}
	
	
	get getEstacionamiento(){
		return this.est;
	}
	
	set setUsuario(usuario){
		this.usuario = usuario;
	}
	
	
	get getUsuario(){
		return this.usuario;
	}
	

	
}	