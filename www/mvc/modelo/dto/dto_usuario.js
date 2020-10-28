class DtoUsuario {
	constructor(setId = 0, setNombre = '', 
				setDni = 0 
				//setEstacionado = ''
				) {
		this.id = setId;
		this.nombre = setNombre;
		this.dni = setDni;
		//this.est = setEstacionado;
	}	
	
	set setId(id) {
		this.id = id;
	}	
	
	set setNombre(nombre) {
		this.nombre = nombre;
	}	

	set setDni(dni) {
		this.dni = dni;
	}	
	
	//set setEstacionado(est){
		//this.est = est;
	//}
	
	//set setContrasena(contrasena) {
	//	this.contrasena = contrasena;
	//}	
	
	//get getEstacionado(){
		//return this.est
	//}
	
	get getId() {
		return this.id;
	}

	get getNombre() {
		return this.nombre;
	}

	get getDni() {
		return this.dni;
	}
	
	//get getContrasena() {
	//	return this.contrasena;
	//}
	
}	