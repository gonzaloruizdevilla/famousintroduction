/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var EventHandler = require('famous/core/EventHandler');

    var node = new RenderNode();

    var eventHandlerA = new EventHandler();
    var eventHandlerB = new EventHandler();

    var surfaceA = new Surface({
        size: [100, 100],
        content: 'A',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '100px'
        }
    });
      
    var surfaceB = new Surface({
        size: [100, 100],
        content: 'B',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '100px'
        }
    });

    var emitTimes = 0;
    var heardTimes = 0;
    surfaceA.on('click', function() {
      eventHandlerA.emit('hello');
      surfaceA.setContent('said hello ' + ++emitTimes);
    });

    eventHandlerA.pipe(eventHandlerB);

    eventHandlerB.on('hello', function() {
      surfaceB.setContent('heard hello ' + ++heardTimes);
    });
      
    var modifierA = new StateModifier({
        origin: [0.5, 0.5]
    });
    var modifierB = new StateModifier({
        origin: [1, 1]
    });
      
    node.add(modifierA).add(surfaceA);
    node.add(modifierB).add(surfaceB);

    module.exports = node;
});
