<?php

//Permite el acceso desde cualquier origen
header('Access-Control-Allow-Origin: *');

//Conexion a la base de datos MySql
$conexion = mysqli_connect("localhost","id15075672_admin","Bicicletero2020+-", "id15075672_bies_prueba") or die(mysqli_error());
//echo "pase la conexion::::  ";

//Definicion de variables recibidas del post

//En produccion.......
//$Id= $_POST['Id_usuario'];

//En prueba......
date_default_timezone_set("America/Argentina/Buenos_Aires");
$Id = $_POST['Id_usuario'];
$FechaActual = date("Y-m-d");


//Consulta sql para agregar un usuario, asigna dni como nombre y dni. El id se autogenera
$sql="SELECT es.*, bi.BICICLETERO_NOMBRE, bi.BICICLETERO_UBICACION 
FROM ESTACIONAMIENTO es 
LEFT JOIN BICICLETERO bi ON (es.ID_BICICLETERO = bi.ID_BICICLETERO)
WHERE es.ID_USUARIO = 1 AND es.FECHA_ESTACIONAMIENTO = '$FechaActual' AND es.HORA_FIN IS null";

//Ejecuta la consulta
$resultado = $conexion->query($sql);



//Arma la cabecera "json"
header('Content-Type: application/json');

//Verifica si encontro filas en la tabla
if ($resultado->num_rows > 0) {
//El resultado (resulset) se recorre con el while	
//A cada fila (en este caso es una sola) la carga en un array 
    while ($fila=mysqli_fetch_array($resultado)){
        $usuario = array ('Id_usuario' => 'Estacionado');
          
    }
} else {
//Si no existe crea el array con todos valores vacios	
    $usuario = array ('Id_usuario'=>'Desestacionado');
 
}	

//Codifica y retorna en formato json el array
echo json_encode($usuario, JSON_FORCE_OBJECT); 

//cierra la conexion
$conexion->close();

?>