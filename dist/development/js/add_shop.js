$(document).ready(function(){
	var section = $("[data-id]");
	var pages = $("[data-page]");
	$('#footer-nav-save .nav-link').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		console.log("i go home!!"+"current_page:"+$(".now").length+", next_page:"+$("#add_shop").length);
		Out($('.now'), $('#add_shop'));
	});
	section.each(function(index, el) {
		var self = $(this);
		self.on('click', self, function(event) {
			event.preventDefault();
			/* Act on the event */
			var id = self.attr('data-id');
			var pageId = "[data-page='" + id + "']";
			var page = $(pageId);
			console.log("i'm home !!!"+ "next_page:"+page.length);
			Out($("#add_shop"), page);
		});
	});

});
var count = 0;
function Out( current_page, next_page) {

	current_page.addClass('slideOut').on('animationstart', function(event) {
		count++;
		event.preventDefault();
		next_page.show().addClass('slideIn');
		console.log("infunction:Start****slideIn:"+ $(".slideIn").length);
	}).on('animationend', function(event) {
			event.preventDefault();
			current_page.removeClass('slideOut now').hide();
			next_page.addClass('now').removeClass('slideIn');
			changeNav();
			$(".slideIn").each(function(){
				console.log(".slideIn:"+$(this).attr("data-page"));
				console.log("In function: current_page:"+next_page.length+"hasClass('now'):"+$('.now').length);
				console.log("In function: current_page:"+"hasClass('slideIn'):"+$('.slideIn').length);
			});
		});
	console.log("i'm Out:!   num:"+count);
}

function changeNav() {
	var homeNav = $("#footer-nav");
	var changeNav = $( '#footer-nav-save' );
	var isHomeHide = $("#add_shop").is( ' :hidden ' );
	var isHomeNavHide = homeNav.is(' :hidden ');
	if ( isHomeHide && !isHomeNavHide ) {

		homeNav.hide();
		changeNav.show();
	}
	else if(!isHomeHide && isHomeNavHide) {
		changeNav.hide();
		homeNav.show();
	}
}



