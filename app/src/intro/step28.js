/* globals define */
define(function(require, exports, module) {
    'use strict';
    
    var RenderNode = require('famous/core/RenderNode');
    var Transform      = require('famous/core/Transform');
    var Modifier       = require('famous/core/Modifier');
    var Surface        = require('famous/core/Surface');
    var Transitionable = require('famous/transitions/Transitionable');
    var Deck           = require('famous/views/Deck');
    var GridLayout     = require('famous/views/GridLayout');

    var node = new RenderNode();

    var SpringTransition = require('famous/transitions/SpringTransition');
    Transitionable.registerMethod('spring', SpringTransition);

    var surfaces = [];
    var myLayout = new Deck({
        itemSpacing: 20,
        transition: {
            method: 'spring',
            period: 300,
            dampingRatio: 0.5
        },
        stackRotation: 0.08
    });

    myLayout.sequenceFrom(surfaces);

    for(var i = 0; i < 5; i++) {
        var temp = new Surface({
            size: [100, 200],
            classes: ['test'],
            properties: {
                backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            },
            content: i
        });

        temp.on('click', function() {
            myLayout.toggle();
        });
        surfaces.push(temp);
    }

    var containerModifier = new Modifier({
        origin: [0.5, 0.5]
    });

    node.add(containerModifier).add(myLayout);

    module.exports = node;

});
