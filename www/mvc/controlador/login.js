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
	alert(usuario);
    alert ("estoy en ingresar");
    var res_validar_ingreso = validar_ingreso(usuario);
	
	alert ("estoy en ingresar 2");
	
    alert ("entro validar ingreso");
	alert ("ahora aparece el dni");
	alert (res_validar_ingreso);
	
	//no esta estacionado
    if (res_validar_ingreso == "1") {
        window.location.href='../vista/estacionamiento.html?usuario=';
    }else{
		//esta estacionado
        if (res_validar_ingreso == "2"){
            window.location.href='../vista/detalle_estacionamiento.html?usuario=';
        }else{
			//error dni
            if (res_validar_ingreso == "er" ) {
                alert("Ingreso no identificado");
            }
        }
    }
}