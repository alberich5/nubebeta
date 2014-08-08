<?php
include("conexion.php");
	$nombre = $_POST["nombre_txt"];
	$email = $_POST["email_txt"];
	$asunto = $_POST["asunto_txt"];
	$mensaje = $_POST["mensaje_txt"];

	$consulta = "INSERT INTO mensajes (nombre,email,asunto,comentario) VALUES ('$nombre','$email','$asunto','$mensaje')";
	$ejecutar = $conexion->query(utf8_encode($consulta));

	echo "Gracias";

header("Location: ../contacto.html");
?>

