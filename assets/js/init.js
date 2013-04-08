jQuery(function(){

    // Resize event logic
    function body_resize(){
        var body_height = $("body").height();
        $("#mapPanel").height(body_height-280);
    }
    $(window).resize(body_resize);
    body_resize();

    gcapp.addEvent("ready", function(){
        gcapp.gcmap.addEvent("ready", function(){
            // Add custom Leaflet control, icon for toggle the layer list module
            var MyControl = L.Control.extend({
                options: {
                    position: 'topleft'
                },

                onAdd: function (map) {
                    var container = L.DomUtil.create('div', 'leaflet-control-gc-layers');

                    el = $(container);
                    el.addClass("gc-pointer");
                    el.html('<div class="gc-icon gc-layers" ></div>');

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