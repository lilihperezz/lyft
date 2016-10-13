$(document).ready(function() {
	$("#numero").keydown(valorTeclas);
	$("#numero").keyup(longitudNumeros);
	$("#next").click(validandoCampos);
	$("#next").click(numerosAleatorios);
	
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
			$("#next").attr("href", "index.html");
		} else {
			$("#next").removeAttr("href");
		}
	}
	function numerosAleatorios(evento){
		var numeroRandom = Math.round(Math.random()*899)+100 ;
		var codigoLab = "LAB-";
		var codigoLabNumero = codigoLab + numeroRandom;
			alert(codigoLabNumero);
	}
	function validandoCampos(evento){
		var longitud = $(this).val().length;
		if( longitud != 9 && longitud == 0){
			next.disabled = true;
			alert("ingrese 9 dígitos");
		}
	}
});



