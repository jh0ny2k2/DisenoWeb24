$(document).ready(function() {

    $('#gresini').dblclick(function() {
        // Obtener el tamaño actual del div
        var anchoActual = $(this).width();
        var altoActual = $(this).height();

        // Definir el nuevo tamaño más grande
        var nuevoAncho = anchoActual * 1.5; // Aumentar el ancho en un 50%
        var nuevoAlto = altoActual * 1.5;   // Aumentar el alto en un 50%

        // Aplicar el nuevo tamaño con animación
        $(this).animate({
            width: nuevoAncho,
            height: nuevoAlto
        }, 500); // Duración de la animación en milisegundos
    });
  
    
  
  });