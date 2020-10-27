
// "DTO" destinada a transportar los datos correspondientes a
// la tabla "Usuarios" del modelo. 
// Las columnas de la tabla son "id", "nombre", "dni" y "contrasena"
// Contiene los metodos "set" y "get" para las 4 variables
// 
class DtoEstacionamiento {
	constructor(setEstacionamiento = "") {
		this.est = setEstacionamiento;
	}	

	
	set setEstacionamiento(est){
		this.est = est;
	}
	
	
	get getEstacionamiento(){
		return this.est;
	}
	

	
}	