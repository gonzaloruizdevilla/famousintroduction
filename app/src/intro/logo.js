/* globals define */
define(function(require, exports, module) {
    'use strict';
    var View    = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // your app here
    var logo = new ImageSurface({
        size: [282, 194],
        content: '/content/images/famous_madrid.png',
        classes: ['backfaceVisibility']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function() {
            return Transform.rotateY(.0015 * (Date.now() - initialTime));
        }
    });

    var view = new View();
    view.add(centerSpinModifier).add(logo);
    
    module.exports = view;

});
