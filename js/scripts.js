/* =================================================================================
================	URL 		      |		www.antoniobuitrago.es   ===============
================	Author Name		  |		Antonio Buitrago         ===============
================================================================================= */


// Script para el saludo de la pantalla de portada

// Obtiene la hora actual del sistema
var hora = new Date().getHours();

// Obtén el elemento <p> donde mostrar el saludo
var saludoElement = document.getElementById("saludo");

// Define el saludo según la hora
var saludo;
if (hora >= 5 && hora < 12) {
    saludo = "Buenos días !";
} else if (hora >= 12 && hora < 18) {
    saludo = "Buenas tardes !";
} else {
    saludo = "Buenas noches !";
}

// Actualiza el contenido del elemento <p> con el saludo
saludoElement.textContent = saludo;

// ---------------------------------------------------------------------------------------------------------------------------
// Muestra el Sweet alert si el formulario se ha enviado correctamente
document.addEventListener("DOMContentLoaded", function () {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);

    // Verificar si la variable "success" tiene el valor "true"
    if (urlParams.get("success") === "true") {
        // Mostrar el SweetAlert al cargar la página
        Swal.fire({
            title: 'Enhorabuena!',
            text: 'El formulario ha sido enviado correctamente.',
            icon: 'success',
            confirmButtonText: "Accept",
            confirmButtonColor: "#21364b",
        }).then(function () {
            // Redirigir a index.php después de hacer clic en "Aceptar"
            window.location.href = "index.html";
        });
    }
});

// ---------------------------------------------------------------------------------------------------------------------------
// Script que cierra el offcanvas al hacer clic en un enlace del menú
function cerrarOffcanvas() {
    $('#offcanvasRight').offcanvas('hide');
}
