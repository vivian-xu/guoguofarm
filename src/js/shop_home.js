$(document).ready(function(){
    $(".toggle_icon").bind("click", function(){
        $(".info_hidden").fadeToggle(1000);
    });

    $(".menu").bind("click", function(){
        $(".menu_item").fadeToggle(1000);
    })
})
