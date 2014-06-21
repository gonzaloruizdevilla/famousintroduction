/* globals define */
define(function(require, exports, module) {
    'use strict';
    var View    = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');

    var content = '<h1>Introducción a Famo.us</h1>' +
    '<p>por <b>Gonzalo Ruiz de Villa</b></p>' +
    '<p>Famo.us Madrid Meetup, lunes, 23 de junio de 2014</p>' +
    '<p><a href="https://twitter.com/gruizdevilla">@gruizdevilla</a></p>' +
    '<p><a href="https://twitter.com/adesis">@adesis</a></p>'

    var intro = new Surface({
        size: [true, true],
        content: content,
        classes: ['backfaceVisibility']
    });

    var initialTime = Date.now();
    var centerModifier = new Modifier({
        origin: [0.5, 0.3]
    });

    var view = new View();
    view.add(centerModifier).add(intro);
    
    module.exports = view;

});
