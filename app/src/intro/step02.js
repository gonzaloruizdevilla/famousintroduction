/* globals define */
define(function(require, exports, module) {
    'use strict';
    var View    = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var SequentialLayout = require("famous/views/SequentialLayout");
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    var content = '<h1>¿Qué ofrece Famous? Rendimiento.</h1>' +
    '<p>Famo.us usa un motor físico 3D de JavaScript que está ' +
    ' integrado con un motor de layout 3D. ' +
    ' Funciona con DOM, Canvas y WebGL y está abstraido para que pueda funcionar ' +
    ' con OpenGL, DirectX o cualquier cosa que renderice contra una GPU.</p>' + 
    '<p>También proporcionarán herramientas similares a cordova, pero optimizadas' +
    'para que Famo.us rinda como una app nativa.</p>' +
    '<p>En esta introducción veremos el motor de layout</p>'

    var image = new ImageSurface({
        size: [100, 100],
        content: '/content/images/famous_logo.png'
    });

    var contentSurface = new Surface({
        size: [600, true],
        content: content,
        classes: ['backfaceVisibility'],
        properties: {
            paddingLeft: '20px'
        }
    });

    var surfaces = [image, contentSurface];

    var centerModifier = new Modifier({
        origin: [0.5, 0.2]
    });

    var view = new View({
        
    });
    var sequence = new SequentialLayout({
        direction: 0
    });
    view.add(centerModifier).add(sequence);
    sequence.sequenceFrom(surfaces);
    
    module.exports = view;

});
