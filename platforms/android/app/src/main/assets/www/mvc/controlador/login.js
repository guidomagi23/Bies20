$('#btSalir').click(salir);
function salir(){
    navigator.app.exitApp();
}

$('#btIngresar').click(ingresar);
function ingresar(){
    var inUsuario = $('#inUsuario');
    var usuario = inUsuario.val().trim();
    inUsuario.val(usuario);
    var inContrasena = $('#inContrasena');
    var contrasena = inContrasena.val().trim();
    inContrasena.val(contrasena);
    var res_validar_ingreso = validar_ingreso(usuario, contrasena);
    if (res_validar_ingreso == "1") {
        alert ("Ingreso incorrecto");
    }else{
        if (res_validar_ingreso == "2"){
            window.location.href='../vista/act_dat_usuario.html?usuario=' + usuario;
        }else{
            if (res_validar_ingreso == "3" ) {
                window.location.href='../vista/menu_sistema.html?usuario='+ usuario + '&id=' + usu_ingreso.getId;
            }else{
                alert("ERROR!!!!");
            }
        }
    }
}