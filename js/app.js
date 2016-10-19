/*
$(document).ready(function() {
	$("#ingresarNumero").keydown(valorTeclas);
	$("#ingresarNumero").keyup(longitudNumeros);
	$("#btn-signup").click(numerosAleatorios);
	$("#btn-contactos").click(validarFormContacto);
	$("#numero1").keydown(cambiarInput);
	$("#contenedorNumeroCel").text(localStorage.getItem("numeroIngresado"));
		if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(exito, error);
	}
	$("#numero1").focus();
});

function valorTeclas(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	}
function longitudNumeros(evento) {
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#btnSignup").attr("href", "verify-phone.html");
		} else {
			$("#btnSignup").removeAttr("href");
				
		}
	}
function validarFormContacto(evento){
	var firstName = $("#firstName").val().length;
	var lastName = $("#lastName").val().length;
		if( 20>=firstName && lastName >=2){
			return true;
		}else {
		alert("Ingrese mínimo 2 y máximo 20 caracteres");
	}
}
function numerosAleatorios(evento){
	var numeroIngresado = $("#ingresarNumero").val().length;
		if (numeroIngresado == 9) {
		//	$("#btnSignup[disabled]")= false;
		var numeroRandom = Math.round(Math.random()*899)+100 ;
		var codigoLab = "LAB-";
		var codigoLabNumero = codigoLab + numeroRandom;
			alert(codigoLabNumero);
		}else{
			alert("ingrese 9 numeros");
		}
	localStorage.setItem("numeroIngresado",$("#ingresarNumero").val());
	localStorage.setItem("codigoAleatorio",codigoLabNumero);
}
function cambiarInput(){
	if($(this).val().length == 1){
		$(this).next().focus();
	}
}
function exito(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
 //   var mapa = document.getElementById('mapa')
 	$("#mapa").add("classMap")
 //   mapa.style.height = '450px';
 //   mapa.style.width = '300px';

    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:true,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    
    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var marker = new google.maps.Marker({
    	position:latlon,
    	map:map,
    	title:"Estás aquí"
    });
};
 function error(error) {
	console.log(error);
};

*/












