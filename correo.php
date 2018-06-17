<?php
//juego de caracteres
header("Content-type: text/html;charset='utf-8'");
//variables del formulario
$nombre = htmlentities($_POST['nombre']);
$email = htmlentities($_POST['email']);
$asunto = htmlentities($_POST['asunto']);
$mensaje = htmlentities($_POST['mensaje']);
$direccion_ip = $_SERVER['REMOTE_ADDR'];

$header = 'From: '.$email."\n";
$header .= "X-Mailer: PHP/" . phpversion()."\n";
$header .= "Content-Type: text/plain";
$mensaje = "este mesaje fue enviado" .$nombre."\n";
$mensaje.="su email es".$email."\n";
$mensaje.="asunto" .$asunto."\n";
$mensaje.="mensaje".$mensaje."\n";

$mensaje.="desde la IP" .$direccion_ip."\n";
//enviar correo
$para = "naikder01@gmail.com";
$asunto="mensaje del sitio web";

if(mail($para,$asunto, utf8_decode($mensaje),$header)){
	echo "mensaje enviasdo";
}
else{
	echo "error en elenvio";
}


?>