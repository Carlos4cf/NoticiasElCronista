var x = 0;
var datos1 = null;
var datos2 = null;
var pos=0;
var boton=0;
var url = encodeURIComponent('https://rawgit.com/Carlos4cf/NoticiasElCronista/master/index.html');
var title='El Cronista';
$(document).ready(function(){
//cargar noticias
$.getJSON("https://rawgit.com/Carlos4cf/NoticiasElCronista/master/json/news1.json", function (json1) {
datos1 = json1;
});
$.getJSON("https://rawgit.com/Carlos4cf/NoticiasElCronista/master/json/news2.json", function (json2) {
datos2 = json2;
});
$(window).scroll(function(){
if($(window).scrollTop()+$(window).height()>$(document).height()-1){
pos++;
if(pos==1){
ponerNoticias(datos1);
}
if(pos==2){
ponerNoticias1(datos2);
$('#botonCarga').fadeOut();    
}
}
}); 
/*
$('#botonCarga').click(function(){
// alert("peoe");
ponerNoticias(datos1);
poss++;
});
*/
cargaPrincipal();
imgRandom();
hooverW();
cargarMasNoticias();
$('#face').append($('<a>',{href:'https://www.facebook.com/share.php?u='+url,rel:'nofollow', id:'fb'}));
$('#fb').append($('<img>',{src:'img/facebook.png', alt:'FB'}));
$('#twitter').append($('
<a>
  ',{href:'https://twitter.com/share?text='+title+'&url='+url,rel:'nofollow',id:'tw'}));
  $('#tw').append($('<img>',{src:'img/twitter.png', alt:'TW'}));
  });
  function ponerNoticias(json) {
  $.each(json,function(i,news1){
    $('#padre').append($("<div class='container'><div class='row'><div class='col-md-1'> </div><div class='col-md-10 titulo1'>"+news1.titulo+"</div><div class='col-md-1'> </div></div><div class='row'><div class='col-md-1'> </div><div class='col-md-4 fotonoticia'> <img class='img-responsive' src='"+news1.foto1+"' alt='imagen aqui'> </div><div class='col-md-1'> </div><div class='col-md-5 texto1'> <h3>"+news1.fecha+"</h3><p>"+news1.texto+"</p></div><div class='col-md-1'> </div></div></div><div class='container'><div class='row'><div class='col-md-1'> </div><div class='col-md-10 ls'></div><div class='col-md-1'> </div></div></div>"))  
  });
  }
  function ponerNoticias1(json) {
  $.each(json,function(i,news2){
     $('#padre').append($("<div class='container'><div class='row'><div class='col-md-1'> </div><div class='col-md-10 titulo1'>"+news2.titulo+"</div><div class='col-md-1'> </div></div><div class='row'><div class='col-md-1'> </div><div class='col-md-4 fotonoticia'> <a href='news1.html' class='img-rounded'> <img class='img-responsive' src='"+news2.foto1+"' alt='imagen aqui'> </a> </div><div class='col-md-1'> </div><div class='col-md-5 texto1'> <h3>"+news2.fecha+"</h3><p>"+news2.texto+"</p></div><div class='col-md-1'> </div></div></div><div class='container'><div class='row'><div class='col-md-1'> </div><div class='col-md-10 ls'></div><div class='col-md-1'> </div></div></div>"))
});
}
function cargarNoticias() {
if (x === 1) {
ponerNoticias1(datos2);
x++;
$('#botonCarga').hide();
} else if (x === 0) {
ponerNoticias(datos1);
x++;
}
}
function cargarFBT(){
$('#face').append($('<a>',{href:'https://www.facebook.com/share.php?u='+url,rel:'nofollow', id:'fb'}));
$('#fb').append($('<img>',{src:'img/facebook.png', alt:'FB'}));
$('#twitter').append($('<a>',{href:'https://twitter.com/share?text='+title+'&url='+url,rel:'nofollow',id:'tw'}));
$('#tw').append($('<img>',{src:'img/twitter.png', alt:'TW'}));
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
function cargarMasNoticias(){
$('#botonCarga').click(function(){
ponerNoticias(datos1);
poss++;
});
if(pos==2){
$('#botonCarga').click(function(){
ponerNoticias1(datos2);
});
}
}
