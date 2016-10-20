$(document).ready(function() {
	$("#ingresarNumero").keydown(valorTeclas);
	$("#ingresarNumero").keyup(longitudNumeros);
	$("#btn-signup").click(numerosAleatorios);
	$("#btn-verifyphone").click(validarCodigo);	
	$(".inputCodigo").keydown(valorInputCodigo);
	$(".inputCodigo").keyup(saltarInputCodigo);
	$("#resendCode").click(generarNuevoCodigo);
	$("#btn-contactos").click(validarDatosUsuario);
	$("#contenedorNumeroCel").text(localStorage.getItem("numeroCelIngresado"));
	$("#ingresarNumero").focus();
	$("#numero1").focus();
	$("#first-name").focus();
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(exito, error);
	}
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
		$("#btn-signup").attr("href", "verify-phone.html");
	} else {
		$("#btn-signup").removeAttr("href");
	}
}
function numerosAleatorios(evento){
	var numeroIngresado = $("#ingresarNumero").val().length;
	if (numeroIngresado == 9) {
		var numeroRandom = Math.round(Math.random()*899)+100 ;
		var codigoLab = "LAB-";
		var codigoLabNumero = codigoLab + numeroRandom;
			alert("Su código es: "+ codigoLabNumero);
	}else if(numeroIngresado == 0){
	//	alert("campos vacios");
		sweetAlert("Oops...", "Verifique los campos vacios", "error");
		$("#IngresarNumero").focus();
	}else{
	//	alert("Ingrese un número válido de 9 dígitos");
		sweetAlert( "Oops...","Ingrese un número válido de 9 dígitos", "error");
		$("#IngresarNumero").val("");
		$("#ingresarNumero").focus();
	}
	localStorage.setItem("numeroCelIngresado",$("#ingresarNumero").val());
	localStorage.setItem("codigoGenerado",numeroRandom);
}
function validarCodigo(evento){
	var numero1 = $("#numero1").val();
	var numero2 = $("#numero2").val();
	var numero3 = $("#numero3").val();
	var codigo = numero1 +  numero2 +  numero3 ;
	if(codigo == localStorage.getItem("codigoGenerado")){
		$("#btn-verifyphone").attr("href", "contactos.html");
	}else if(codigo == ""){
	// alert("Ingrese su código por favor");
	sweetAlert("Oops...", "Ingrese su código por favor", "error");
		$("#numero1").focus();
	}else{
	// alert("Código inválido");
		sweetAlert("Oops...","Código inválido", "error");
		$("#btn-verifyphone").removeAttr("href");
		$(".inputCodigo").val("");
		$("#numero1").focus();
	}
}
function valorInputCodigo(evento){
	var ascii = evento.keyCode;
	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
		return true;
	} else {
		return false;
	}
}
function saltarInputCodigo(evento) {
	var longitud = $(this).val().length;
	var ascii = evento.keyCode;
	if (longitud == 1) {
		$(this).parent().next().children().focus();
	}else if(ascii == 8) {
		$(this).parent().prev().children().focus();	
	}else{
	 // alert("Ingrese solo números");
	 sweetAlert("Oops...", "Ingrese solo números", "error");
	}
}
function generarNuevoCodigo(evento){
	var numeroRandom = Math.round(Math.random()*899)+100 ;
	var codigoLab = "LAB-";
	var codigoLabNumero = codigoLab + numeroRandom;
	    alert("Su código es: "+ codigoLabNumero);

	localStorage.setItem("codigoGenerado",numeroRandom);
		validarCodigo();
}	
function validarDatosUsuario(evento){
	var firstName = $("#first-name").val().length;
	var lastName = $("#last-name").val().length;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var emailValido = $("#email").val();
	if((20>= firstName && lastName>= 2) && (emailValido != "") ) {
		$(".check").prop("checked", "checked");
		$("#btn-contactos").attr("href", "mapa.html");
	}else if(!emailReg.test(emailValido)){
		alert("Ingrese un correo válido")
	}else if((50>= email >= 5) && (emailReg.test(emailValido) = true)){
		return true;
	}else if((firstName || lastName) == "" ||((emailValido) == "")){
	//	alert("campos vacios");
		sweetAlert("Oops...", "Campos vacios", "error");
		$("#first-name").focus();
	}else{
		alert("Valide todos los campos");
		$("#first-name").focus();
	}
}
function exito(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
 	$("#mapa").addClass("classMap")

    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:false,
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

    var geocoder = new google.maps.Geocoder(); 
    geocoder.geocode({"latLng": latlon},processGeocoder);

    function processGeocoder(resul, estado){
    	if(estado == google.maps.GeocoderStatus.OK){
    		if(resul[0]){
    			$("#ubicacion").val(resul[0].formatted_address);
    		}
    	}
    }
};
 function error(error) {
	console.log("Error");
};











