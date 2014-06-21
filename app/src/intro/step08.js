/* globals define */
define(function(require, exports, module) {
    'use strict';
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');

    var node = new RenderNode();

    var modifier1 = new Modifier({
        transform : Transform.translate(400,100)
    });
    var modifier2 = new Modifier({
        transform : Transform.translate(200, 50)
    });

    var rotateModifier = new Modifier({
      transform: Transform.rotateZ(Math.PI/4)
    });

    var surface1 = new Surface({
        size: [150, 50],
        content: 'Surface 1',
        properties: {
            backgroundColor: 'black',
            color: 'white',
            lineHeight: '50px',
            textAlign: 'center'

        }
    });

    var surface2 = new Surface({
        size: [150, 50],
        content: 'Surface 2',
        properties: {
            backgroundColor: 'red',
            color: 'white',
            lineHeight: '50px',
            textAlign: 'center'

        }
    });

    var relativeNode = node.add(modifier1);
    relativeNode.add(modifier2).add(surface2);
    relativeNode.add(rotateModifier).add(surface1);

    module.exports = node;

});
