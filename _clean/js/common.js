$(document).ready(function() {

	var pull = $('#pull');
	menu = $('nav ul');
	menuHeight = menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		console.log(menu)
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $("#fb-carousel");
	owl.owlCarousel({
		singleItem:true,
		slideSpeed : 1000
	});

	$("#fb-next").click(function(){
		owl.trigger("owl.next");
	});
	$("#fb-back").click(function(){
		owl.trigger("owl.prev");
	});

	var sis = $("#single-item-slider");
	sis.owlCarousel({
		singleItem:true,
		slideSpeed : 1000

	});

	$("#single-item-next").click(function(){
		sis.trigger("owl.next");
	});
	$("#single-item-back").click(function(){
		sis.trigger("owl.prev");
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	

});