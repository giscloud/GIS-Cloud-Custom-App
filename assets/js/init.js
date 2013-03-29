jQuery(function(){

    function body_resize(){
        var body_height = $("body").height();
        $("#mapPanel").height(body_height-250);
    }

    $(window).resize(body_resize);
    body_resize();



    gcapp.addEvent("ready", function(){

        gcapp.gcmap.addEvent("ready", function(){
                    console.log("das");
            var MyControl = L.Control.extend({
                options: {
                    position: 'topright'
                },

                onAdd: function (map) {
                    // create the control container with a particular class name
                    var container = L.DomUtil.create('div', 'leaflet-control-gc-layers');

                    el = $(container);
                    el.addClass("gc-pointer");
                    el.html('<div style="margin:0;" class="gc-icon gc-layers" ></div>');

                    el.click(function(){
                        console.log(232);
                        $('#gc_layers_box').toggle();
                    });

                    console.log(el, container);
                    // ... initialize other DOM elements, add listeners, etc.

                    return container;
                }
            });

            gcapp.leaflet.addControl(new MyControl());
        });
    });

});