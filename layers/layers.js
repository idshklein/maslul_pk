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
var format_22102023_2243___2 = new ol.format.GeoJSON();
var features_22102023_2243___2 = format_22102023_2243___2.readFeatures(json_22102023_2243___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22102023_2243___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22102023_2243___2.addFeatures(features_22102023_2243___2);
var lyr_22102023_2243___2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_22102023_2243___2, 
                style: style_22102023_2243___2,
                interactive: true,
                title: '<img src="styles/legend/22102023_2243___2.png" /> 22102023_2243 — __'
            });
var format_MASLULIM_20102023_3 = new ol.format.GeoJSON();
var features_MASLULIM_20102023_3 = format_MASLULIM_20102023_3.readFeatures(json_MASLULIM_20102023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASLULIM_20102023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASLULIM_20102023_3.addFeatures(features_MASLULIM_20102023_3);
var lyr_MASLULIM_20102023_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MASLULIM_20102023_3, 
                style: style_MASLULIM_20102023_3,
                interactive: true,
                title: '<img src="styles/legend/MASLULIM_20102023_3.png" /> MASLULIM_20102023'
            });
var format_MASLULIM_191023_4 = new ol.format.GeoJSON();
var features_MASLULIM_191023_4 = format_MASLULIM_191023_4.readFeatures(json_MASLULIM_191023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASLULIM_191023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASLULIM_191023_4.addFeatures(features_MASLULIM_191023_4);
var lyr_MASLULIM_191023_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MASLULIM_191023_4, 
                style: style_MASLULIM_191023_4,
                interactive: true,
                title: '<img src="styles/legend/MASLULIM_191023_4.png" /> MASLULIM_19.10.23'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_NAME_SETL_ALL_ISRAEL_1.setVisible(true);lyr_22102023_2243___2.setVisible(true);lyr_MASLULIM_20102023_3.setVisible(true);lyr_MASLULIM_191023_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_NAME_SETL_ALL_ISRAEL_1,lyr_22102023_2243___2,lyr_MASLULIM_20102023_3,lyr_MASLULIM_191023_4];
lyr_NAME_SETL_ALL_ISRAEL_1.set('fieldAliases', {'fid': 'fid', 'setl_code': 'setl_code', 'setl_name': 'setl_name', 'setl_name_': 'setl_name_', 'e_ord': 'e_ord', 'n_ord': 'n_ord', 'data_year': 'data_year', 'prdct_ver': 'prdct_ver', });
lyr_22102023_2243___2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', });
lyr_MASLULIM_20102023_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'name': 'name', 'shape_leng': 'shape_leng', });
lyr_MASLULIM_191023_4.set('fieldAliases', {'AND_': 'AND_', });
lyr_NAME_SETL_ALL_ISRAEL_1.set('fieldImages', {'fid': '', 'setl_code': '', 'setl_name': '', 'setl_name_': '', 'e_ord': '', 'n_ord': '', 'data_year': '', 'prdct_ver': '', });
lyr_22102023_2243___2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'Shape_Length': '', });
lyr_MASLULIM_20102023_3.set('fieldImages', {'fid': '', 'objectid': '', 'name': '', 'shape_leng': '', });
lyr_MASLULIM_191023_4.set('fieldImages', {'AND_': '', });
lyr_NAME_SETL_ALL_ISRAEL_1.set('fieldLabels', {'fid': 'no label', 'setl_code': 'no label', 'setl_name': 'no label', 'setl_name_': 'no label', 'e_ord': 'no label', 'n_ord': 'no label', 'data_year': 'no label', 'prdct_ver': 'no label', });
lyr_22102023_2243___2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Shape_Length': 'no label', });
lyr_MASLULIM_20102023_3.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'name': 'no label', 'shape_leng': 'no label', });
lyr_MASLULIM_191023_4.set('fieldLabels', {'AND_': 'no label', });
lyr_MASLULIM_191023_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});