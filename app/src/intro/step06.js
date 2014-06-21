/* globals define */
define(function(require, exports, module) {
    'use strict';
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');

    var node = new RenderNode();

    var modifier = new Modifier({
        transform : Transform.translate(200,100)
    });

    var surface = new Surface({
        size: [150, 50],
        content: 'Hola Mundo!',
        properties: {
            backgroundColor: 'black',
            color: 'white',
            lineHeight: '50px',
            textAlign: 'center'

        }
    })

    node.add(modifier).add(surface);

    module.exports = node;

});
