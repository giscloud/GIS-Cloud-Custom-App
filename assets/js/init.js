jQuery(function() {
    
    giscloud.ready(function() {
        
        giscloud.ui.ready.then(function() {
            var activeLayer = 1156;
            var orderBy = {
                    orderByLayerId: activeLayer,
                    orderByExpression: "ogc_fid:desc"
            };
            var viewer = giscloud.ui.map;
            var layerList = new giscloud.ui.LayerList(giscloud.ui.map, 'gc_layers_box', true);
            var datagrid = new giscloud.ui.FeatureDatagrid('#feature-datagrid', {
                viewer: viewer,
                activeLayerId: activeLayer,
                datagridOpts:{
                    "ordering": true  
                },
                orderBy: orderBy
            });
            
            layerList.bind('ready', function () {
                $('#search_toggle_bt').click(function () {
                    $('#gc_layers_box').hide();
                });
            });
            
            layerList.bind("changed", function (event, object, id, layer) {
                var newLayerId = parseInt(object[0].id, 10);
                datagrid.setActiveLayerId(newLayerId);
            });  
            
        });
        
        $('#sign_in_button').click(function () {
            showLoginForm();
        });
    });
    
    // Resize event logic
    function body_resize() {
        var body_height = $("body").height();
        $("#mapPanel").height(body_height-280);
    }
    
    $(window).resize(body_resize);
    body_resize();

});