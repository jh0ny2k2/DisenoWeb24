$(document).ready(function() {

    // INDEX.HTML
    
    $('#introduccion').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato').toggle();
    });

    $('#monoplaza').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato1').toggle();
    });

    $('#equipos').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato2').toggle();
    });

    $('#pilotos').click(function() {
        $(this).toggleClass('fullscreen');
        $('#dato3').toggle();
    });

    // PILOTOS

    $('#piloto').dblclick(function() {
        $('#descripcion').toggle();
    });

    $('#verstappen').hover(function() {
        $('#datopiloto').toggle();
    });

    $('#checo').hover(function() {
        $('#datopiloto1').toggle();
    });
    $('#hamilton').hover(function() {
        $('#datopiloto2').toggle();
    });
    $('#russel').hover(function() {
        $('#datopiloto3').toggle();
    });
    $('#sainz').hover(function() {
        $('#datopiloto4').toggle();
    });
    $('#leclerc').hover(function() {
        $('#datopiloto5').toggle();
    });
    $('#lando').hover(function() {
        $('#datopiloto6').toggle();
    });
    $('#oscar').hover(function() {
        $('#datopiloto7').toggle();
    });
    $('#alonso').hover(function() {
        $('#datopiloto8').toggle();
    });
    $('#lance').hover(function() {
        $('#datopiloto9').toggle();
    });
    $('#ocon').hover(function() {
        $('#datopiloto10').toggle();
    });
    $('#pierre').hover(function() {
        $('#datopiloto11').toggle();
    });
    $('#albon').hover(function() {
        $('#datopiloto12').toggle();
    });
    $('#sargeant').hover(function() {
        $('#datopiloto13').toggle();
    });
    $('#yuki').hover(function() {
        $('#datopiloto14').toggle();
    });
    $('#ricciardo').hover(function() {
        $('#datopiloto16').toggle();
    });
    $('#bottas').hover(function() {
        $('#datopiloto17').toggle();
    });
    $('#zhou').hover(function() {
        $('#datopiloto18').toggle();
    });
    $('#mag').hover(function() {
        $('#datopiloto19').toggle();
    });
    $('#hulk').hover(function() {
        $('#datopiloto20').toggle();
    });

    // EQUIPO

    // REDBULL
    
    $('#credbull').hover(function() {
        $('#nredbull').toggle();
    });
    

    // MERCEDES

    $('#cmercedes').hover(function() {
        $('#nmercedes').toggle();
    });

    // FERRARI

    $('#cferrari').hover(function() {
        $('#nferrari').toggle();
    });

    // MCLAREN
    $('#cmclaren').hover(function() {
        $('#nmclaren').toggle();
    });


    $('#caston').hover(function() {
        $('#naston').toggle();
    });
    $('#calpine').hover(function() {
        $('#nalpine').toggle();
    });
    $('#cwilliams').hover(function() {
        $('#nwilliams').toggle();
    });
    $('#calpha').hover(function() {
        $('#nalpha').toggle();
    });
    $('#calfa').hover(function() {
        $('#nalfa').toggle();
    });
    $('#chaas').hover(function() {
        $('#nhaas').toggle();
    });



    // CIRCUITOS
    $('#circuito1').mousedown(function() {
        $('#datoCircuito').toggleClass("rowCircuit");
    });

    $('#circuito2').mousedown(function() {
        $('#datoCircuito1').toggleClass("rowCircuit");
    });

    $('#circuito3').mousedown(function() {
        $('#datoCircuito2').toggleClass("rowCircuit");
    });
    $('#circuito4').mousedown(function() {
        $('#datoCircuito3').toggleClass("rowCircuit");
    });
    $('#circuito5').mousedown(function() {
        $('#datoCircuito4').toggleClass("rowCircuit");
    });
    $('#circuito6').mousedown(function() {
        $('#datoCircuito5').toggleClass("rowCircuit");
    });
    $('#circuito7').mousedown(function() {
        $('#datoCircuito6').toggleClass("rowCircuit");
    });
    $('#circuito8').mousedown(function() {
        $('#datoCircuito7').toggleClass("rowCircuit");
    });
    $('#circuito9').mousedown(function() {
        $('#datoCircuito8').toggleClass("rowCircuit");
    });
    $('#circuito10').mousedown(function() {
        $('#datoCircuito9').toggleClass("rowCircuit");
    });
    $('#circuito11').mousedown(function() {
        $('#datoCircuito10').toggleClass("rowCircuit");
    });
    $('#circuito12').mousedown(function() {
        $('#datoCircuito11').toggleClass("rowCircuit");
    });
    $('#circuito13').mousedown(function() {
        $('#datoCircuito12').toggleClass("rowCircuit");
    });
    $('#circuito14').mousedown(function() {
        $('#datoCircuito13').toggleClass("rowCircuit");
    });
    $('#circuito15').mousedown(function() {
        $('#datoCircuito14').toggleClass("rowCircuit");
    });
    $('#circuito16').mousedown(function() {
        $('#datoCircuito15').toggleClass("rowCircuit");
    });
    $('#circuito17').mousedown(function() {
        $('#datoCircuito16').toggleClass("rowCircuit");
    });
    $('#circuito18').mousedown(function() {
        $('#datoCircuito17').toggleClass("rowCircuit");
    });
    $('#circuito19').mousedown(function() {
        $('#datoCircuito18').toggleClass("rowCircuit");
    });
    $('#circuito20').mousedown(function() {
        $('#datoCircuito19').toggleClass("rowCircuit");
    });
    $('#circuito21').mousedown(function() {
        $('#datoCircuito20').toggleClass("rowCircuit");
    });
    $('#circuito22').mousedown(function() {
        $('#datoCircuito21').toggleClass("rowCircuit");
    });
    
    


});