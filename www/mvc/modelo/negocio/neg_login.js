//
// Logica de negocio correspondiente a la ventana "login".
// Su funcion es la de nexo entre el controlador y las daos. 
// 


//Crea una variable global, instancia de DtoUsuario
var usu_ingreso = new DtoUsuario();

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
function validar_ingreso(dni) {

//Asigna el dni recibido como parametro al objeto creado	
	usu_ingreso.setDni = dni;
//Define una variable para recibir la respuesta de la lectura	
	var resp_leer_usuario = "";
//Llama a la "dao" para que acceda al webservice 
//Envia el objeto de tipo DtoUsuario como parametro y recibe una String
	resp_leer_usuario = leer_por_dni(usu_ingreso);
	
	consulta_estacionado = "select es.*, bi.bicicletero_nombre, bi.bicicletero_ubicacion from estacionamiento es left join bicicletero bi on (es.id_bicicletero = bi.id_bicicletero) where es.id_usuario = :id_usuario and es.fecha_estacionamiento = current_date and es.hora_fin is null"
	
	consulta_promedio = "select bh.id_bicicletero_horario, b.id_bicicletero, b.bicicletero_nombre, b.bicicletero_ubicacion, b.capacidad, count(e.id_estacionamiento) as ocupado, (count(e.id_estacionamiento) / b.capacidad * 100) as porcentaje_ocupado from bicicletero b left join bicicletero_horario bh on (b.id_bicicletero = bh.id_bicicletero) left join estacionamiento e on (bh.id_bicicletero_horario = e.id_bicicletero_horario) and (e.fecha_estacionamiento = current_date) and (e.hora_fin is null) where :horaingreso between bh.hora_inicio and bh.hora_fin and bh.dia_semana = :dia_semana group by bh.id_bicicletero_horario, b.id_bicicletero, b.bicicletero_nombre, b.bicicletero_ubicacion, b.capacidad"
}
//dni mal
	if (resp_leer_usuario != null) {
		
		if (consulta_estacionado = ) {
		return "no esta estacionado";
		}
		
	 //Si no esta estacionado		
	}else return "ingreso incorrecto";

	

	
	
	
	"select bh.id_bicicletero_horario, b.id_bicicletero, b.bicicletero_nombre, b.bicicletero_ubicacion, b.capacidad, count(e.id_estacionamiento) as ocupado, (count(e.id_estacionamiento) / b.capacidad * 100) as porcentaje_ocupado from bicicletero b left join bicicletero_horario bh on (b.id_bicicletero = bh.id_bicicletero) left join estacionamiento e on (bh.id_bicicletero_horario = e.id_bicicletero_horario) and (e.fecha_estacionamiento = current_date) and (e.hora_fin is null) where :horaingreso between bh.hora_inicio and bh.hora_fin and bh.dia_semana = :dia_semana group by bh.id_bicicletero_horario, b.id_bicicletero, b.bicicletero_nombre, b.bicicletero_ubicacion, b.capacidad"
}