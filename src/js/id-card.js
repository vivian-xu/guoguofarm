$(document).ready(function(){
	var $btn_share = $(".btn_share");
	var $share_hidden = $('.share-hidden');
	var $card = $('.my_card');
	var $footer = $('.footer-share');

	$card.on('touchstart', function(event) {
    		event.preventDefault();
  		$footer.slideToggle("slow");
    	});

	$btn_share.on("touchend", function(event) {
    		event.preventDefault();
    		$share_hidden.fadeIn();
    	});

	$share_hidden.on('touchstart', function(event) {
		event.preventDefault();
		if ( !$share_hidden.is(":hidden")) {
			$share_hidden.fadeOut();
		}
	});
 });
