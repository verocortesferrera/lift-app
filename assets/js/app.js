$(document).ready(function() {
/*splash*/
	setTimeout(function() {
		$(".content").fadeOut(500);
		},3000);
		setTimeout(function() {
			$(".content2").fadeIn(500);
		});
});

/*ingresar numero y activar el boton*/
 $('#telephone').keyup(function(){
		if($(this).val().length === 10){
			$('#next').removeClass('disabled');
		}if($(this).val().length < 10){
			$('#next').addClass('disabled');
		}if($(this).val().length > 10){
			$('#next').addClass('disabled');
			$('#telephone').prop('disabled',true);/*detener el input*/
			$('#telephone').prop('disabled',false);/*volver a activar*/
		}if (isNaN($(this).val())){
			$('#alert').text('Sólo Números');
			$('#next').addClass('disabled');
		}else{
			$('#alert').text('');
		}
		return false;
	});

/*aparecer codigo*/
$('#next').click(code);

function code(){
	var code = "";
	var str = ('123456789');
	for (var i = 0; i < 3; i++) {
		code += str.charAt(Math.floor(Math.random() * str.length));
	}
	alert('tu codigo es: LAB-' + code);
}

$('#val').click(validar);

function validar(){
	$('.validador').show();
	$('.content2').hide();
	}






