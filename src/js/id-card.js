$(document).ready(function(){
    var $btn_share = $(".btn_share");
    var $share_hidden = $('.share-hidden');

    $btn_share.on("click", function(){
        $share_hidden.fadeIn();
    });
})
