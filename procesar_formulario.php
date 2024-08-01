<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    
    // Configura los encabezados del correo
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Mensaje de correo electrónico en formato HTML
    $subject = $asunto;
    $message = "<html><body>";
    $message .= "<h2>Mensaje de contacto</h2>";
    $message .= "<p><strong>Nombre:</strong> $nombre</p>";
    $message .= "<p><strong>Correo:</strong> $correo</p>";
    $message .= "<p><strong>Mensaje:</strong></p>";
    $message .= "<p>$mensaje</p>";
    $message .= "</body></html>";
    
    // Envía el correo
    $to = "buitr4gosw@gmail.com";  // Cambia esto por tu dirección de correo
    $mailSent = mail($to, $subject, $message, $headers);
    
    if ($mailSent) {
        // Redirige a index.php con success=true
        header("Location: index.html?success=true");
        exit;
    } else {
        // Redirige a index.php con success=false
        header("Location: index.html?success=false");
        exit;
    }
} else {
    // Acceso no permitido, redirige a index.php
    header("Location: index.html");
    exit;
}
?>