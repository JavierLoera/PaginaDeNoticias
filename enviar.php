<?php
$destino"Jesus_Loera_15@hotmail.com";
$nombre = $_Post["nombre"];
$correo = $_Post["correo"];
$telefono = $_Post["telefono"];
$Motivo = $_Post["Motivo"];
$mensaje = $_Post["mensaje"];
$contenido ="Nombre: " . $nombre ."\ncorreo: " . $correo ."\nTelefono: " . $telefono . "\nmotivo:" $motivo .  "\nMensaje: ". $mensaje
mail($destino,"contacto",$contenido);

?>