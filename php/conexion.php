<?php
	function conectarse(){
		$servidor = "localhost";
		$usuario = "root";
		$password ="";
		$bd ="zarate";

		$conectar = new mysqli($servidor,$usuario,$password,$bd) or die("No se pudo conactar al servidpr de BD MySQL");
		return $conectar;
	}
	$conexion = conectarse();
?>