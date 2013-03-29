jQuery(function(){

    function body_resize(){
        var body_height = $("body").height();
        $("#mapPanel").height(body_height-250);
    }

    $(window).resize(body_resize);
    body_resize();

    gcapp.addEvent("ready", function(){

        gcapp.gcmap.addEvent("ready", function(){

            var MyControl = L.Control.extend({
                options: {
                    position: 'topright'
                },

                onAdd: function (map) {
                    var container = L.DomUtil.create('div', 'leaflet-control-gc-layers');

                    el = $(container);
                    el.addClass("gc-pointer");
                    el.html('<div style="margin:0;" class="gc-icon gc-layers" ></div>');

                    el.click(function(e){
                        $('#gc_layers_box').toggle();
                    });

                    return container;
                }
            });

            gcapp.leaflet.addControl(new MyControl());
        });
    });

});