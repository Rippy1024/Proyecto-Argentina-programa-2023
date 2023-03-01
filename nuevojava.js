$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

		if (estado == true) {
			$(this).text("Abrir");
			$('body').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar");
			$('body').css({
				"overflow": "hidden"
			});
			estado = true;
		}
	});
});

$(document).ready(function(){
	var estado = false;

	$('.seccionToggle').on('click',function(){
		$('#btn-toggle').slideToggle();

		if (estado == true) {
			$(this).text("Sobre Mi");
			$('.seccionToggle').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar");
			$('.seccionToggle').css({
				"overflow": "hidden"
			});
			estado = true;
		}
	});
});
