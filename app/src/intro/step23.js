/* globals define */
define(function(require, exports, module) {
    'use strict';

    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var EventHandler = require('famous/core/EventHandler');
    var EventFilter = require('famous/events/EventFilter');

    var node = new RenderNode();

    var source = new EventHandler();
    var destiny = new EventHandler();

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

    var surfaceB = new Surface({
        size: [100, 100],
        content: 'PASA',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '33px'
        }
    });

    var surfaceC = new Surface({
        size: [100, 100],
        content: 'D',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            lineHeight: '33px'
        }
    });

    surfaceA.on('click', function() {
      source.emit('hello');
    });

    destiny.on('hello', function(event) {
        surfaceC.setContent('C<br>' + (new Date()).toLocaleTimeString());
    });

    var pasa = true;
    var myFilter = new EventFilter(function(type) {
        return pasa;
    });

    source.pipe(myFilter).pipe(destiny);


    surfaceB.on('click', function() {
        pasa = !pasa;
        surfaceB.setContent(pasa ? 'PASA ' : 'NO PASA');
    });

    

    
    var modifierA = new StateModifier({origin: [0.3, 0] });
    var modifierB = new StateModifier({origin: [0.65, 0.5] });
    var modifierC = new StateModifier({origin: [1, 1] });
      
    node.add(modifierA).add(surfaceA);
    node.add(modifierB).add(surfaceB);
    node.add(modifierC).add(surfaceC);

    module.exports = node;

});
