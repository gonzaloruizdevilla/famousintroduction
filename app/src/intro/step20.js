/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var EventHandler = require('famous/core/EventHandler');

    var node = new RenderNode();

    var modifier = new StateModifier({
        transform : Transform.translate(200,100)
    });

    var surface = new Surface({
      size: [100, 100],
      content: '<br>click para emitir "hello"',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
      }
    });

    
    var eventHandler = new EventHandler();

    surface.on('click', function() {
      eventHandler.emit('hello');
    });

    eventHandler.on('hello', function() {
      surface.setContent('se escuchó "hello"');
    });

    node.add(modifier).add(surface);
    module.exports = node;

});
