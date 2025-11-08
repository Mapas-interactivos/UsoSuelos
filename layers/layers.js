var wms_layers = [];

var format_LaCumbreSustraccionLey2_0 = new ol.format.GeoJSON();
var features_LaCumbreSustraccionLey2_0 = format_LaCumbreSustraccionLey2_0.readFeatures(json_LaCumbreSustraccionLey2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaCumbreSustraccionLey2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaCumbreSustraccionLey2_0.addFeatures(features_LaCumbreSustraccionLey2_0);
var lyr_LaCumbreSustraccionLey2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaCumbreSustraccionLey2_0, 
                style: style_LaCumbreSustraccionLey2_0,
                popuplayertitle: 'La Cumbre - Sustraccion Ley 2',
                interactive: true,
    title: 'La Cumbre - Sustraccion Ley 2<br />\
    <img src="styles/legend/LaCumbreSustraccionLey2_0_0.png" /> Pacífico<br />\
    <img src="styles/legend/LaCumbreSustraccionLey2_0_1.png" /> <br />' });
var format_LaCumbreLey2de1959_1 = new ol.format.GeoJSON();
var features_LaCumbreLey2de1959_1 = format_LaCumbreLey2de1959_1.readFeatures(json_LaCumbreLey2de1959_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaCumbreLey2de1959_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaCumbreLey2de1959_1.addFeatures(features_LaCumbreLey2de1959_1);
var lyr_LaCumbreLey2de1959_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaCumbreLey2de1959_1, 
                style: style_LaCumbreLey2de1959_1,
                popuplayertitle: 'La Cumbre - Ley 2 de 1959',
                interactive: true,
    title: 'La Cumbre - Ley 2 de 1959<br />\
    <img src="styles/legend/LaCumbreLey2de1959_1_0.png" /> Pacifico<br />\
    <img src="styles/legend/LaCumbreLey2de1959_1_1.png" /> <br />' });
var format_DT17UsoPotencialdelSuelo_2 = new ol.format.GeoJSON();
var features_DT17UsoPotencialdelSuelo_2 = format_DT17UsoPotencialdelSuelo_2.readFeatures(json_DT17UsoPotencialdelSuelo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DT17UsoPotencialdelSuelo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DT17UsoPotencialdelSuelo_2.addFeatures(features_DT17UsoPotencialdelSuelo_2);
var lyr_DT17UsoPotencialdelSuelo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DT17UsoPotencialdelSuelo_2, 
                style: style_DT17UsoPotencialdelSuelo_2,
                popuplayertitle: 'DT-17 Uso Potencial del Suelo',
                interactive: true,
    title: 'DT-17 Uso Potencial del Suelo<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_0.png" /> 0<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_1.png" /> AF<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_2.png" /> AF-C4<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_3.png" /> C2<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_4.png" /> C3<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_5.png" /> C4<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_6.png" /> F1<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_7.png" /> F2<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_8.png" /> F2-F1<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_9.png" /> F3<br />\
    <img src="styles/legend/DT17UsoPotencialdelSuelo_2_10.png" /> <br />' });
var format_PP11ZonificacionEcologica_3 = new ol.format.GeoJSON();
var features_PP11ZonificacionEcologica_3 = format_PP11ZonificacionEcologica_3.readFeatures(json_PP11ZonificacionEcologica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PP11ZonificacionEcologica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP11ZonificacionEcologica_3.addFeatures(features_PP11ZonificacionEcologica_3);
var lyr_PP11ZonificacionEcologica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PP11ZonificacionEcologica_3, 
                style: style_PP11ZonificacionEcologica_3,
                popuplayertitle: 'PP-11. Zonificacion Ecologica',
                interactive: true,
    title: 'PP-11. Zonificacion Ecologica<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_0.png" /> 0<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_1.png" /> cabeceras<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_2.png" /> MIXTAS<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_3.png" /> ZCC<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_4.png" /> ZCD<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_5.png" /> ZCL<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_6.png" /> ZCS<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_7.png" /> ZRC<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_8.png" /> ZRSA<br />\
    <img src="styles/legend/PP11ZonificacionEcologica_3_9.png" /> <br />' });

lyr_LaCumbreSustraccionLey2_0.setVisible(true);lyr_LaCumbreLey2de1959_1.setVisible(true);lyr_DT17UsoPotencialdelSuelo_2.setVisible(true);lyr_PP11ZonificacionEcologica_3.setVisible(true);
var layersList = [lyr_LaCumbreSustraccionLey2_0,lyr_LaCumbreLey2de1959_1,lyr_DT17UsoPotencialdelSuelo_2,lyr_PP11ZonificacionEcologica_3];
lyr_LaCumbreSustraccionLey2_0.set('fieldAliases', {'id': 'id', 'id_ley2': 'id_ley2', 'nom_ley2': 'nom_ley2', 'sustrajo': 'sustrajo', 'sector': 'sector', 'solicitant': 'solicitant', 'acto_admin': 'acto_admin', 'fecha_acto': 'fecha_acto', 'municipio': 'municipio', 'departamen': 'departamen', 'observacio': 'observacio', 'area_ha': 'area_ha', 'fecha_ingr': 'fecha_ingr', 'fecha_reco': 'fecha_reco', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_LaCumbreLey2de1959_1.set('fieldAliases', {'id': 'id', 'nom_ley2': 'nom_ley2', 'area_ha': 'area_ha', 'res_zoni': 'res_zoni', 'fecha_ingr': 'fecha_ingr', 'fecha_reco': 'fecha_reco', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_DT17UsoPotencialdelSuelo_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PP11ZonificacionEcologica_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LaCumbreSustraccionLey2_0.set('fieldImages', {'id': 'TextEdit', 'id_ley2': 'TextEdit', 'nom_ley2': 'TextEdit', 'sustrajo': 'TextEdit', 'sector': 'TextEdit', 'solicitant': 'TextEdit', 'acto_admin': 'TextEdit', 'fecha_acto': 'DateTime', 'municipio': 'TextEdit', 'departamen': 'TextEdit', 'observacio': 'TextEdit', 'area_ha': 'TextEdit', 'fecha_ingr': 'DateTime', 'fecha_reco': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_LaCumbreLey2de1959_1.set('fieldImages', {'id': 'TextEdit', 'nom_ley2': 'TextEdit', 'area_ha': 'TextEdit', 'res_zoni': 'TextEdit', 'fecha_ingr': 'DateTime', 'fecha_reco': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_DT17UsoPotencialdelSuelo_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PP11ZonificacionEcologica_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_LaCumbreSustraccionLey2_0.set('fieldLabels', {'id': 'no label', 'id_ley2': 'no label', 'nom_ley2': 'inline label - always visible', 'sustrajo': 'no label', 'sector': 'no label', 'solicitant': 'no label', 'acto_admin': 'no label', 'fecha_acto': 'no label', 'municipio': 'no label', 'departamen': 'no label', 'observacio': 'no label', 'area_ha': 'no label', 'fecha_ingr': 'no label', 'fecha_reco': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_LaCumbreLey2de1959_1.set('fieldLabels', {'id': 'no label', 'nom_ley2': 'inline label - always visible', 'area_ha': 'no label', 'res_zoni': 'no label', 'fecha_ingr': 'no label', 'fecha_reco': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_DT17UsoPotencialdelSuelo_2.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PP11ZonificacionEcologica_3.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_PP11ZonificacionEcologica_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});