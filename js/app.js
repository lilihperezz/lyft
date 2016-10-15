$(document).ready(function() {
	$("#numeroCelular").keydown(valorTeclas);
	$("#numeroCelular").keyup(longitudNumeros);
	$("#btnSignup").click(numerosAleatorios);
	$("#contenedorNumeroCel").text(localStorage.getItem("numeroMovistar"));

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
			$("#btnSignup").attr("href", "contactos.html");
		} else {
			$("#btnSignup").removeAttr("href");
				
		}
	}
function numerosAleatorios(evento){
	var valorNumero = $("#numeroCelular").val().length;
		if (valorNumero == 9) {
		//	$("#btnSignup[disabled]")= false;
		var numeroRandom = Math.round(Math.random()*899)+100 ;
		var codigoLab = "LAB-";
		var codigoLabNumero = codigoLab + numeroRandom;
			alert(codigoLabNumero);
		}else{
			alert("ingrese 9 numeros");
		}
		localStorage.setItem("numeroMovistar",$("#numeroCelular").val());
	}

});



