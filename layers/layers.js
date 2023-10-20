var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_NAME_SETL_ALL_ISRAEL_1 = new ol.format.GeoJSON();
var features_NAME_SETL_ALL_ISRAEL_1 = format_NAME_SETL_ALL_ISRAEL_1.readFeatures(json_NAME_SETL_ALL_ISRAEL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAME_SETL_ALL_ISRAEL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAME_SETL_ALL_ISRAEL_1.addFeatures(features_NAME_SETL_ALL_ISRAEL_1);
var lyr_NAME_SETL_ALL_ISRAEL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAME_SETL_ALL_ISRAEL_1, 
                style: style_NAME_SETL_ALL_ISRAEL_1,
                interactive: true,
                title: '<img src="styles/legend/NAME_SETL_ALL_ISRAEL_1.png" /> NAME_SETL_ALL_ISRAEL'
            });
var format_MASLULIM_20102023_2 = new ol.format.GeoJSON();
var features_MASLULIM_20102023_2 = format_MASLULIM_20102023_2.readFeatures(json_MASLULIM_20102023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASLULIM_20102023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASLULIM_20102023_2.addFeatures(features_MASLULIM_20102023_2);
var lyr_MASLULIM_20102023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MASLULIM_20102023_2, 
                style: style_MASLULIM_20102023_2,
                interactive: true,
                title: '<img src="styles/legend/MASLULIM_20102023_2.png" /> MASLULIM_20102023'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_NAME_SETL_ALL_ISRAEL_1.setVisible(true);lyr_MASLULIM_20102023_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_NAME_SETL_ALL_ISRAEL_1,lyr_MASLULIM_20102023_2];
lyr_NAME_SETL_ALL_ISRAEL_1.set('fieldAliases', {'fid': 'fid', 'setl_code': 'setl_code', 'setl_name': 'setl_name', 'setl_name_': 'setl_name_', 'e_ord': 'e_ord', 'n_ord': 'n_ord', 'data_year': 'data_year', 'prdct_ver': 'prdct_ver', });
lyr_MASLULIM_20102023_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'name': 'name', 'shape_leng': 'shape_leng', });
lyr_NAME_SETL_ALL_ISRAEL_1.set('fieldImages', {'fid': '', 'setl_code': '', 'setl_name': '', 'setl_name_': '', 'e_ord': '', 'n_ord': '', 'data_year': '', 'prdct_ver': '', });
lyr_MASLULIM_20102023_2.set('fieldImages', {'fid': '', 'objectid': '', 'name': '', 'shape_leng': '', });
lyr_NAME_SETL_ALL_ISRAEL_1.set('fieldLabels', {'fid': 'no label', 'setl_code': 'no label', 'setl_name': 'no label', 'setl_name_': 'no label', 'e_ord': 'no label', 'n_ord': 'no label', 'data_year': 'no label', 'prdct_ver': 'no label', });
lyr_MASLULIM_20102023_2.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'name': 'no label', 'shape_leng': 'no label', });
lyr_MASLULIM_20102023_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});