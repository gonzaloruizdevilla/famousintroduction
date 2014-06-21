/* globals define */
define(function(require, exports, module) {
    'use strict';
    var View    = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var SequentialLayout = require("famous/views/SequentialLayout");
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    var content = '<h1>¿Qué es Famo.us?</h1>' +
    '<p>Famo.us es un framework de JavaScript gratuito y abierto ' +
    ' que te permite crear interfaces fluidos y complejos para cualquier pantalla.</p>' +
    '<h2>http://famo.us</h2>'

    var image = new ImageSurface({
        size: [100, 100],
        content: '/content/images/famous_logo.png'
    });

    var contentSurface = new Surface({
        size: [400, 160],
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
