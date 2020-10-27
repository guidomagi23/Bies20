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
    if (res_validar_ingreso == "1") {
        alert ("Ingreso incorrecto");
    }else{
        if (res_validar_ingreso == "2"){
            window.location.href='../vista/estacionamiento.html?usuario=' + usuario;
        }else{
            if (res_validar_ingreso == "3" ) {
                window.location.href='../vista/menu_sistema.html?usuario='+ usuario + '&id=' + usu_ingreso.getId;
            }else{
                alert("ERROR!!!!");
            }
        }
    }
}