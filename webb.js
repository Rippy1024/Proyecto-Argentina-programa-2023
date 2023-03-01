


$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

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

$(document).ready(function() {
	$menu = $('#menu').find('ul').find('li');

	$menu.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});

/*segunda seccion*/

$(document).ready(function(){
	var estado = false;

	$('#btn-toggle1').on('click',function(){
		$('.seccionToggle1').slideToggle();

		if (estado == true) {
			$(this).text("Estudios Cursados");
			$('.seccionToggle1').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar");
			$('.seccionToggle1').css({
				"overflow": "hidden"
			});
			estado = true;
		}
	});
});

$(document).ready(function() {
	$menu1 = $('#menu1').find('ul').find('li');

	$menu1.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});

/**3ra seccion actividad laboral */

$(document).ready(function(){
	var estado = false;

	$('#btn-toggle2').on('click',function(){
		$('.seccionToggle2').slideToggle();

		if (estado == true) {
			$(this).text("Actividad Laboral");
			$('.seccionToggle2').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar");
			$('.seccionToggle2').css({
				"overflow": "hidden"
			});
			estado = true;
		}
	});
});

$(document).ready(function() {
	$menu2 = $('#menu2').find('ul').find('li');

	$menu2.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});
