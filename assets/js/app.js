$(document).ready(function() {
/*splash*/
	setTimeout(function() {
		$(".content").fadeOut(500);
		},3000);
		setTimeout(function() {
			$(".content2").fadeIn(500);
		});
});

$("#formulario").submit(function () {  
    if(isNaN($("#telefono").val())) {  
        alert("El teléfono solo debe contener números");  
        return false;  
    }  
    return false;  
});  

$('#number').keyup(function(){
	var number = $('#number').val();
	number.val('');
	if(number==10)
	function code() {
  var code = "";
  /*var str = "123456789";*/
  for (var i = 0; i < 3; i++) {
  	code += number.charAt(Math.floor(Math.random() * str.length));
  }
  return code;
}

alert(code());
	
});

function code() {
  var code = "";
  /*var str = "123456789";*/
  for (var i = 0; i < 3; i++) {
  	code += number.charAt(Math.floor(Math.random() * str.length));
  }
  return code;
}

alert(code());