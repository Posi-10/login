<?php
  require_once '../app/conexion.php';
  $conexion = conexion();
  $usuario = $_POST['usuario'];
  $pass = $_POST['pass'];
  $sql = "SELECT count(*) as existe FROM usuarios WHERE usuario = '$usuario' AND pass = '$pass'";
  $resultado = mysqli_query($conexion, $sql);
  $r = mysqli_fetch_array($resultado)['existe'];
  if($r > 0){
    $_SESSION['usuario'] = $usuario;
    echo $_SESSION['usuario'];
  }else{
    echo 0;
  }

?>