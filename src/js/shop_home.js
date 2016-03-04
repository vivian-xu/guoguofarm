$(document).ready(function(){
    $(".toggle_icon").click( function(){
        $(".info_hidden").fadeToggle(500);
    });

    $("#attention_heart").click( function(){
         var me = $(this);
         me.toggleClass("active");
    });
})
