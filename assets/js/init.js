jQuery(function(){

    function body_resize(){
        var body_height = $("body").height();
        $("#mapPanel").height(body_height-250);
    }

    $(window).resize(body_resize);
    body_resize();

});