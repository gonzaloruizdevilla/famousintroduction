/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var node = new RenderNode();


    var surface = new Surface({
      size: [100, 100],
      content: 'animated',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F',
        lineHeight:'100px'
      }
    });

    var stateModifier = new StateModifier();

    var transition = { duration : 2000, curve: 'easeInOut' };
    stateModifier.setTransform(
      Transform.translate(100, 300, 0),
      transition
    );
    stateModifier.setOpacity(0.5, transition);
    
    node.add(stateModifier).add(surface);
    module.exports = node;

});
