document.getElementById('titulo').style.backgroundColor= "#7a1b0c";
document.getElementById('pgLogin').style.backgroundColor= "#7a1b0c";



$('#btRegistrarse').click(registrarse);
function registrarse(){
	window.location.href='../vista/registrarse.html?usuario=';
}

$('#btBase').click(Base);
function Base(){
	window.location.href='../vista/terminosycondiciones.html?usuario';
}
   //aqui ira lo que abre la ventana de las bases


$('#btIngresar').click(ingresar);
function ingresar(){
	
    var inUsuario = $('#inUsuario');
	
    var usuario = inUsuario.val().trim();
	
    inUsuario.val(usuario);
	
 
    var res_validar_ingreso = validar_ingreso(usuario);
	
	
	
	//no esta estacionado
    //if (res_validar_ingreso == "Desestacionado") {
    //    window.location.href='../vista/estacionamiento.html?usuario='+ usuario;
   // }else{
	//	//esta estacionado
   //     if (res_validar_ingreso == "Estacionado"){
    //        window.location.href='../vista/detalle_estacionamiento.html?usuario='+ usuario;
   //     }else{
			//error dni
   //         if (res_validar_ingreso == "er" ){
   //             alert("Ingreso no identificado");
   //         }else(res_validar_ingreso = "error"){
	//			alert("Ingreso no identificado 2");
	//		}
   //     }
    //}
	
			if(res_validar_ingreso == "Desestacionado"){
				window.location.href='../vista/estacionamiento.html?usuario='+ usuario;
			} else if (res_validar_ingreso == "Estacionado"){
				window.location.href='../vista/detalle_estacionamiento.html?usuario='+ usuario;
			} else if (res_validar_ingreso == "er" ){
				alert("Advertencia: Error de conexión.");
			}else if(res_validar_ingreso = "error"){
				alert("Advertencia: Ingreso no identificado.")
			}			
}
	



