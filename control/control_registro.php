<?php
  require_once '../app/conexion.php';
  $conexion = conexion();
  $usuario = $_POST['usuario'];
  $pass = $_POST['pass'];
  $sql = "INSERT INTO usuarios(usuario, pass) VALUES(?, ?)";
  $query = $conexion->prepare($sql);
  $query->bind_param('ss', $usuario, $pass);
  $r = $query->execute();
  if($r){
    echo 1;
  }else{
    echo 0;
  }
  $conexion->close(); 
?>