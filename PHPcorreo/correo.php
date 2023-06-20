<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];
  $destinatario = "correo@tudominio.com";
  $asunto = "Nuevo mensaje desde la web";
  $cabeceras = "From: $correo\r\n";
  
  if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
    echo "El mensaje se envió correctamente.";
  } else {
    echo "Hubo un error al enviar el mensaje.";
  }
}
?>
