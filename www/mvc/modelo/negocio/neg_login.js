//
// Logica de negocio correspondiente a la ventana "login".
// Su funcion es la de nexo entre el controlador y las daos. 
// 


//Crea una variable global, instancia de DtoUsuario
var usu_ingreso = new DtoUsuario();
var usu_ingreso_est = new DtoEstacionamiento();

// Funcion destinada a validar los datos ingresados, verificar
// si la contraseña es correcta y en caso de ser valida debe
// determinar si es la primera vez que el usuario ingresa al sistema
// para obligarlo a modificar su nombre y contraseña, si no es la
// primera vez debe mostrar el menu del sistema.
//
// Recibe como parametro el dni y la contrasena
//
// Retorna un dato de tipo string con el valor "1" si los datos 
// no eran correctos, "2" si es la primera vez que ingresa,
// "3" si esta permitido ingresar al menu del sistema y "4" si
// se produjo error de conexion
//


function validar_ingreso(usuario){
	alert("Hola, estoy en validar_ingreso");
//Asigna el dni recibido como parametro al objeto creado	
	usu_ingreso.setDni = usuario;
	
//Define una variable para recibir la respuesta de la lectura	
	var resp_leer_usuario = "";

//Llama a la "dao" para que acceda al webservice 
//Envia el objeto de tipo DtoUsuario como parametro y recibe una String
	alert ("entro a la funcion leer por dni");
	
	resp_leer_usuario = leer_por_dni(usu_ingreso);
	
	alert("pase por resp leer usuario");
	
	est = validar_estacionamiento(usuario);
	
	
	
	if ((resp_leer_usuario != "er") && (resp_leer_usuario != "") && (est != "er") && (est != "") && (est== "Estacionado") {
		
		alert ("Estacionado");
		return "1";		
		
	}else if ((resp_leer_usuario != "er") && (usu_ingreso.getId() == "Okay") && (resp_leer_usuario != "")&& (est != "er") && (est != "") && (est != "er") && (est== "Desestacionado")){
		
		alert ("Desestacionado");
		return "2";
		
	}else if ((resp_leer_usuario == "er") && (usu_ingreso.getId() != "Okay") ){
		
		alert ("ERROR!!!");
		return "3";
		
	}		
	
}

function validar_estacionamiento(usuario){
	alert("Hola, estoy en validar_ingreso_est");
	//Asigna el STRING Estacionado O Desestacionado recibido como parametro al objeto creado
	usu_ingreso_est.setId_Estacionamiento = usuario;
	
	//Define una variable para recibir la respuesta de la lectura	

	var est = "";
	
	
	alert ("entro a la funcion estacionar");
	
	est = estacionar(usu_ingreso_est);
	
	alert("pase por resp estacionar");
	
	return est;
}