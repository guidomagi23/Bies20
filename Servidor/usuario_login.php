<?php

//Permite el acceso desde cualquier origen
header('Access-Control-Allow-Origin: *');

//Conexion a la base de datos MySql
$conexion = mysqli_connect("localhost","id15075672_bies_prueba","id15075672_admin","masterkey") or die(mysqli_error());
//echo "pase la conexion::::  ";

//Definicion de variables recibidas del post

//En produccion.......
$Dni= $_POST['Dni'];

//En prueba......
//$Dni = 12345678;

//Consulta sql para leer un usuario por dni
$sql="SELECT * FROM Usuarios WHERE Dni = $Dni";

//Ejecuta la consulta
$resultado = $conexion->query($sql);
//echo ("pase la ejecucion");

//Arma la cabecera "json"
header('Content-Type: application/json');

//Verifica si encontro filas en la tabla
if ($resultado->num_rows > 0) {
//El resultado (resulset) se recorre con el while	
//A cada fila (en este caso es una sola) la carga en un array 
    while ($fila=mysqli_fetch_array($resultado)){
        $usuario = array ('estado' => 'ok', 'Id' => $fila['Id'], 'Nombre' => $fila['Nombre'], 'Dni' => $fila['Dni']);
    }
} else {
//Si no existe crea el array con todos valores vacios	
    $usuario = array ('estado'=>'', 'Id'=>'', 'Nombre'=>'', 'Dni'=>'', 'Contrasena'=>'');
}	

//Codifica y retorna en formato json el array
echo json_encode($usuario, JSON_FORCE_OBJECT); 

//cierra la conexion
$conexion->close();

?>