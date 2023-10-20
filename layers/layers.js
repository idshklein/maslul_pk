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
var format_MASLULIM_191023_1 = new ol.format.GeoJSON();
var features_MASLULIM_191023_1 = format_MASLULIM_191023_1.readFeatures(json_MASLULIM_191023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASLULIM_191023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASLULIM_191023_1.addFeatures(features_MASLULIM_191023_1);
var lyr_MASLULIM_191023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MASLULIM_191023_1, 
                style: style_MASLULIM_191023_1,
                interactive: true,
                title: '<img src="styles/legend/MASLULIM_191023_1.png" /> MASLULIM_19.10.23'
            });
var format_NAME_SETL_ALL_ISRAEL_2 = new ol.format.GeoJSON();
var features_NAME_SETL_ALL_ISRAEL_2 = format_NAME_SETL_ALL_ISRAEL_2.readFeatures(json_NAME_SETL_ALL_ISRAEL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAME_SETL_ALL_ISRAEL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAME_SETL_ALL_ISRAEL_2.addFeatures(features_NAME_SETL_ALL_ISRAEL_2);
var lyr_NAME_SETL_ALL_ISRAEL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAME_SETL_ALL_ISRAEL_2, 
                style: style_NAME_SETL_ALL_ISRAEL_2,
                interactive: true,
                title: '<img src="styles/legend/NAME_SETL_ALL_ISRAEL_2.png" /> NAME_SETL_ALL_ISRAEL'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_MASLULIM_191023_1.setVisible(true);lyr_NAME_SETL_ALL_ISRAEL_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_MASLULIM_191023_1,lyr_NAME_SETL_ALL_ISRAEL_2];
lyr_MASLULIM_191023_1.set('fieldAliases', {'AND_': 'AND_', });
lyr_NAME_SETL_ALL_ISRAEL_2.set('fieldAliases', {'SETL_CODE': 'SETL_CODE', 'SETL_NAME': 'SETL_NAME', 'SETL_NAME_': 'SETL_NAME_', 'E_ORD': 'E_ORD', 'N_ORD': 'N_ORD', 'DATA_YEAR': 'DATA_YEAR', 'PRDCT_VER': 'PRDCT_VER', });
lyr_MASLULIM_191023_1.set('fieldImages', {'AND_': '', });
lyr_NAME_SETL_ALL_ISRAEL_2.set('fieldImages', {'SETL_CODE': 'Range', 'SETL_NAME': 'TextEdit', 'SETL_NAME_': 'TextEdit', 'E_ORD': 'TextEdit', 'N_ORD': 'TextEdit', 'DATA_YEAR': 'Range', 'PRDCT_VER': 'TextEdit', });
lyr_MASLULIM_191023_1.set('fieldLabels', {'AND_': 'no label', });
lyr_NAME_SETL_ALL_ISRAEL_2.set('fieldLabels', {'SETL_CODE': 'no label', 'SETL_NAME': 'no label', 'SETL_NAME_': 'no label', 'E_ORD': 'no label', 'N_ORD': 'no label', 'DATA_YEAR': 'no label', 'PRDCT_VER': 'no label', });
lyr_NAME_SETL_ALL_ISRAEL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});