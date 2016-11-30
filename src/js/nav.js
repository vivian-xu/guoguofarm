$(document).ready(function() {

    $(".item_downMenu").click( function(){
        $(".menu_item").fadeToggle(500);
    });

    $("#nav-back").on('click', function(event) {
      event.preventDefault();
      console.log('back');
      /* Act on the event */
      window.history.back();
    });

    $("#top-nav #nav-share").on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
    });

    // sigin submit

    $('#signinSubmit').click(function(event) {
      /* Act on the event */
      console.log('hey');
      event.preventDefault();

      location.href = 'success-signin.min.html';

      return false;
    });


});


