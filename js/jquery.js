 

$(document).ready(function(){
 


/*
$(function() {
  //leer y parsear
  $.getJSON( "json/news1.json", function( jsonObject ) {
ponerTitulo(jsonObject);
  });
  
});

*/



 cargaPrincipal();
hooverW();
imgRandom();
cargarMasNoticias();





});//es el cierre de .ready






function cargaPrincipal(){

    $("#uno").fadeOut(); 
    $("#uno").fadeIn(3500); 
    $(".publicidad1").fadeOut() && $(".publicidad2").fadeOut(); 
    $(".publicidad1").fadeIn(9000) && $(".publicidad2").fadeIn(9000); 


}

function imgRandom(){
  setInterval(function() {
  var number = 1 + Math.floor(Math.random() * 3);
  
if (number==1) {

$("#uno").attr("src","img/inicio.png");

}
if (number==2) {

  $("#uno").attr("src","img/inicio4.png");

}
if (number==3) {

  $("#uno").attr("src","img/inicio5.png");
}
},
2000);

}

function hooverW(){

    $(".titulo1").mouseover(function(){
        $(".titulo1").css({"box-shadow": "0px 5px 10px 6px", "z-index": "50"});
    });
    $(".titulo1").mouseout(function(){
        $(".titulo1").css({"box-shadow": "0px 0px 0px 0px"});
  });
         $(".publicidad1").mouseover(function(){
        $(".publicidad1").css("background-color", "#d9d9d9");
        
    });
    $(".publicidad1").mouseout(function(){
        $(".publicidad1").css("background-color", "red");
  });
        $(".publicidad2").mouseover(function(){

        $(".publicidad2").css("background-color", "#d9d9d9");
        
    });
    $(".publicidad2").mouseout(function(){
        $(".publicidad2").css("background-color", "red");
  });

     $(".texto1").mouseover(function(){
        $(".texto1").css("background-color", "#d9d9d9");
    });
    $(".texto1").mouseout(function(){
        $(".texto1").css("background-color", "#f2f2f2");
  });

}

function cargarMasNoticias(){
      $("#botonCarga").click(function(){
      $(".ocultar1").css("display","inline");
      $("#botonCarga").fadeOut();    
    });
    $("#botonCarga2").click(function(){
      $(".ocultar2").css("display","inline");
      $("#botonCarga2").fadeOut();     
    });


}

 


     function ponerTitulo(json){
  $.each( json, function( i, empleado ) {
    $("#tP").append(news1.titulo);
  }); 
}

/*
$(document).on("scroll", function(){
    //sacamos el desplazamiento actual de la página
 $('.containet-fluid').append($('<option>', { value: comunidad.slug, text : comunidad.comunidad }));
 document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById("dificultadboton").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("menudificultad").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}


 
});
*/
