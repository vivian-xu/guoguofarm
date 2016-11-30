$(document).ready(function(){
    $(".toggle_icon").click( function(){
        if ($(this).hasClass('toggle_icon_up')){
          $(this).removeClass('toggle_icon_up');
        } else {
          $(this).addClass('toggle_icon_up');
        }

        $(".info_hidden").fadeToggle(500);
    });

    $("#attention_heart").click( function(){
         var me = $(this);
         me.toggleClass("active");
    });
})
