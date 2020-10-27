
// "DTO" destinada a transportar los datos correspondientes a
// la tabla "Usuarios" del modelo. 
// Las columnas de la tabla son "id", "nombre", "dni" y "contrasena"
// Contiene los metodos "set" y "get" para las 4 variables
// 
class DtoEstacionamiento {
	constructor(setId_Estacionamiento = "") {
		this.id_Estacionaminto = setId_Estacionamiento;
	}	
	
	
	
	set setId_Estacionamiento(est){
		this.est = est;
	}
	
	
	get getId_Estacionamiento(){
		return this.est;
	}
	

	
}	