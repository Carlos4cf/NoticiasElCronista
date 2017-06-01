var pos=0;
var control=false;
var url = encodeURIComponent('https://rawgit.com/Carlos4cf/NoticiasElCronista/master/index.html');
var title='El Cronista';
$(document).ready(function(){
 botonScroll();

 $(window).scroll(function(){
  if($(window).scrollTop()+$(window).height()>$(document).height()-1){
    pos++;
if(pos==1){cargarConScroll1();

}
if(pos==2){
  cargarConScroll2();
}

  }
}); 

  $.getJSON( 'https://rawgit.com/Carlos4cf/NoticiasElCronista/master/json/news1.json', function( jsonObject ) {

ponerTitulo1(jsonObject);
ponerTitulo2(jsonObject);
ponerTitulo3(jsonObject);



  });


   $.getJSON( 'https://rawgit.com/Carlos4cf/NoticiasElCronista/master/json/news2.json', function( jsonObject ) {
ponerTitulo11(jsonObject);
ponerTitulo22(jsonObject);
ponerTitulo33(jsonObject);

  });
$('#face').append($('<a>',{href:'https://www.facebook.com/share.php?u='+url,rel:'nofollow', id:'fb'}));
$('#fb').append($('<img>',{src:'img/facebook.png', alt:'FB'}));
$('#twitter').append($('<a>',{href:'https://twitter.com/share?text='+title+'&url='+url,rel:'nofollow',id:'tw'}));
$('#tw').append($('<img>',{src:'img/twitter.png', alt:'TW'}));


 cargaPrincipal();
hooverW();
imgRandom();
cargarMasNoticias();


  
});



//cargarlo todo desde jquery no me sale
//https://pastebin.com/juF24r26
function cargar1(json){

$.each(json,function(i,news1){
   $(#c1).append($("<div class='container'><div class='row'><div class='col-md-1'></div><div class='col-md-10 titulo1'><class id='elem1'>"+news1.titulo+"</class></div><div class='col-md-1'></div></div><div class='row'><div class='col-md-1'></div><div class='col-md-4 fotonoticia'><a href='news1.html' class='img-rounded'><div id='elem2'></div></a></div><div class='col-md-1'></div><div class='col-md-5 texto1'><h3><class id='elem3'></class></h3><p><class id='elem4'></class></p></div><div class='col-md-1'></div></div></div>"))
});
}





function ponerTitulo1(json){
  $.each( json, function( i, news1 ) {
    $('#elem1').append(news1[0].titulo);
      $('#elem2').append($('<img>',{src:news1[0].foto1, class: 'img-responsive', alt: 'imagenpro'}));
          $('#elem3').append(news1[0].fecha);
             $('#elem4').append(news1[0].texto);


      
    
  });  
}

function ponerTitulo2(json){
  $.each( json, function( i, news1 ) {
    $('#elem11').append(news1[1].titulo);
   $('#elem22').append($('<img>',{src:news1[1].foto1, class: 'img-responsive', alt: 'imagenpro'}));
          $('#elem33').append(news1[1].fecha);
             $('#elem44').append(news1[1].texto);
      
    
  });  
}

function ponerTitulo3(json){
  $.each( json, function( i, news1 ) {
    $('#elem111').append(news1[2].titulo);
       $('#elem222').append($('<img>',{src:news1[2].foto1, class: 'img-responsive', alt: 'imagenpro'}));
          $('#elem333').append(news1[2].fecha);
             $('#elem444').append(news1[2].texto);
      
    
  });  
}
function ponerTitulo11(json){
  $.each( json, function( i, news1 ) {
    $('#p1').append(news1[0].titulo);
      $('#p2').append($('<img>',{src:news1[0].foto1, class: 'img-responsive', alt: 'imagenpro'}));
          $('#p3').append(news1[0].fecha);
             $('#p4').append(news1[0].texto);
      
    
  });  
}

function ponerTitulo22(json){
  $.each( json, function( i, news1 ) {
    $('#p11').append(news1[1].titulo);
       $('#p22').append($('<img>',{src:news1[1].foto1, class: 'img-responsive', alt: 'imagenpro'}));
          $('#p33').append(news1[1].fecha);
             $('#p44').append(news1[1].texto);
      
    
  });  
}

function ponerTitulo33(json){
  $.each( json, function( i, news1 ) {
    $('#p111').append(news1[2].titulo);
    $('#p222').append($('<img>',{src:news1[2].foto1, class: 'img-responsive', alt: 'imagenpro'}));
          $('#p333').append(news1[2].fecha);
             $('#p444').append(news1[2].texto);
      
    
  });  
}




function cargaPrincipal(){

    $('#uno').fadeOut(); 
    $('#uno').fadeIn(3500); 
    $('.publicidad1').fadeOut() && $('.publicidad2').fadeOut(); 
    $('.publicidad1').fadeIn(9000) && $('.publicidad2').fadeIn(9000); 


}

function imgRandom(){
  setInterval(function() {
  var number = 1 + Math.floor(Math.random() * 3);
  
if (number==1) {

$('#uno').attr('src','img/inicio.png');

}
if (number==2) {

  $('#uno').attr('src','img/inicio4.png');

}
if (number==3) {

  $('#uno').attr('src','img/inicio5.png');
}
},
2000);

}

function hooverW(){

    $('.titulo1').mouseover(function(){
        $('.titulo1').css({'box-shadow': '0px 5px 10px 6px', 'z-index': '50'});
    });
    $('.titulo1').mouseout(function(){
        $('.titulo1').css({'box-shadow': '0px 0px 0px 0px'});
  });
     
 

     $('.texto1').mouseover(function(){
        $('.texto1').css('background-color', '#d9d9d9');
    });
    $('.texto1').mouseout(function(){
        $('.texto1').css('background-color', '#f2f2f2');
  });

}

function botonScroll(){
  $('#scroll').click(function(){
    if(control){
      control=false;
    }else{
      control=true;
    }



  });
}

function cargarConScroll1(){
$('.ocultar1').css('display','inline');
      //$('html,body').animate({
        //scrollTop: $('.bottomD').offset().top
    //}, 2000);
      $('#botonCarga').fadeOut();    

}

function cargarConScroll2(){
$('.ocultar2').css('display','inline');
     //  $('html,body').animate({
       // scrollTop: $('.bottomD2').offset().top
    //}, 2000);
      $('#botonCarga2').fadeOut();     

}

function cargarMasNoticias(){
      $('#botonCarga').click(function(){
      $('.ocultar1').css('display','inline');
      $('html,body').animate({
        scrollTop: $('.bottomD').offset().top
    }, 2000);
      $('#botonCarga').fadeOut();    
    });
    $('#botonCarga2').click(function(){
      $('.ocultar2').css('display','inline');
       $('html,body').animate({
        scrollTop: $('.bottomD2').offset().top
    }, 2000);
      $('#botonCarga2').fadeOut();     
    });

/*
$(window).scroll(function(){
if($(window).scrollTop()+$(window).height()>$(document).height()){
  
}
});



$(document).ready(function(){
          $(window).scroll(function(){
  if($(window).scrollTop()+$(window).height()>$(document).height()-5){
    alert('Estoy abajo noob');
  }
});         
});








<div class='container'>
<div class='row'>
<div class='col-md-1'> </div>
<div class='col-md-10 titulo1'><class id='elem1'></class></div>
<div class='col-md-1'> </div>
</div>

<div class='row'>
<div class='col-md-1'> </div>
<div class='col-md-4 fotonoticia'>    
    <a href='news1.html' class='img-rounded'>
      <div id='elem2'></div>
    </a>
  </div>
  

<div class='col-md-1'> </div>
<div class='col-md-5 texto1'> 
<h3><class id='elem3'></class></h3>
<p><class id='elem4'></class></p>
</div>
<div class='col-md-1'> </div>

</div>

</div>






*/
}
