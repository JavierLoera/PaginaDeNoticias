<?php
$destino="Jesus_Loera_15@hotmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$motivo = $_POST["Motivo"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: ".$nombre."\nCorreo: ".$correo ."\nTelefono: ".$telefono."\nMotivo:".$motivo."\nMensaje: ".$mensaje;
mail($destino,"contacto",$contenido);

?>