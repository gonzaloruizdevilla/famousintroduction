/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var EventHandler = require('famous/core/EventHandler');
    var EventMapper = require('famous/events/EventMapper');

    var node = new RenderNode();

    var eventHandlerSource1 = new EventHandler();
    var eventHandlerDestiny1 = new EventHandler();
    var eventHandlerDestiny2 = new EventHandler();

    var surfaceA = new Surface({
        size: [100, 100],
        content: 'A',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '33px'
        }
    });


    var surfaceC = new Surface({
        size: [100, 100],
        content: 'MODE D',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '33px'
        }
    });

    var surfaceD = new Surface({
        size: [100, 100],
        content: 'D',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '33px'
        }
    });

    var surfaceE = new Surface({
        size: [100, 100],
        content: 'E',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '33px'
        }
    });

    var MODES = {
        D: 'D',
        E: 'E'
    };

    surfaceA.on('click', function() {
      eventHandlerSource1.emit('hello');
    });

    var mapper = new EventMapper(function(type) {
        return (currentMode === MODES.D) ? eventHandlerDestiny1 : eventHandlerDestiny2;
    });

    var currentMode = MODES.D;

    surfaceC.on('click', function() {
        currentMode = currentMode === MODES.D ? MODES.E : MODES.D;
        surfaceC.setContent('MODE ' + currentMode);
    });

    eventHandlerSource1.pipe(mapper);


    eventHandlerDestiny1.on('hello', function(event) {
        surfaceD.setContent('D<br>' + (new Date()).toLocaleTimeString());
    });

    eventHandlerDestiny2.on('hello', function(event) { 
        surfaceE.setContent('E<br>' + (new Date()).toLocaleTimeString());
    });

    
    var modifierA = new StateModifier({origin: [0.3, 0] });
    
    var modifierC = new StateModifier({origin: [0.65, 0.5] });
    
    var modifierD = new StateModifier({origin: [0.3, 1] });
    var modifierE = new StateModifier({origin: [1, 1] });
      
    node.add(modifierA).add(surfaceA);
    node.add(modifierC).add(surfaceC);
    node.add(modifierD).add(surfaceD);
    node.add(modifierE).add(surfaceE);

    module.exports = node;

});
