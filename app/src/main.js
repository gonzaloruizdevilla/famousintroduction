/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var EdgeSwapper = require('famous/views/EdgeSwapper');
    var KeyCodes = require('famous/utilities/KeyCodes');
    var exampleAndCode = require('util/exampleAndCode');

    require('intro/logo');
    require('intro/intro');
    require('intro/step01');
    require('intro/step02');
    require('intro/step03');
    require('intro/step04');
    require('intro/step05');
    require('intro/step06');
    require('intro/step07');
    require('intro/step08');
    require('intro/step09');
    require('intro/step10');
    require('intro/step11');
    require('intro/step12');
    require('intro/step13');
    require('intro/step14');
    require('intro/step15');
    require('intro/step16');
    require('intro/step17');
    require('intro/step18');
    require('intro/step19');
    require('intro/step20');
    require('intro/step21');
    require('intro/step22');
    require('intro/step23');
    require('intro/step24');
    require('intro/step25');
    require('intro/step26');
    require('intro/step27');
    require('intro/step28');
    require('intro/step29');
    require('intro/step30');
    require('intro/step31');
    require('intro/step32');
    require('intro/step33');
    require('intro/step34');

   
    var steps = [
        'intro/logo',
        'intro/intro',
        'intro/step01',
        'intro/step02',
        'intro/step03',
        'intro/step04',
        'intro/step05',
        'intro/step06',
        'intro/step08',
        'intro/step09',
        'intro/step10',
        'intro/step11',
        'intro/step12',
        'intro/step13',
        'intro/step14',
        'intro/step15',
        'intro/step16',
        'intro/step17',
        'intro/step18',
        'intro/step19',
        'intro/step20',
        'intro/step21',
        'intro/step22',
        'intro/step23',
        'intro/step24',
        'intro/step25',
        'intro/step26',
        'intro/step27',
        'intro/step28',
        'intro/step29',
        'intro/step30',
        'intro/step31',
        'intro/step32',
        'intro/step33',
        'intro/step34'
    ];
    

     // create the main context
    var mainContext = Engine.createContext();
    var edgeswapper = new EdgeSwapper();
    
    var posicion = 0;

    function muestraSlide(){
        edgeswapper.show(exampleAndCode(steps[posicion]));
        controls.setContent('(n: anterior) ' + (posicion + 1) + ' de ' + steps.length +' (m: siguiente)');
    }

    function showNext(){
        posicion++;
        if (posicion === steps.length) {
            posicion = 0;
        }
        muestraSlide();
    }

    function showPrevious(){
        posicion--;
        if (posicion === -1) {
            posicion = steps.length -1;
        }
        muestraSlide();
    }
    

    edgeswapper.show(exampleAndCode(steps[posicion]));

    var controls = new Surface({
        content: '(n: anterior) 1 de ' + steps.length +' (m: siguiente)',
        size: [350, 40],
        properties: {
            border: '1px solid white',
            color: 'white',
            textAlign: 'center',
            lineHeight: '40px',
            background: 'black'
        }
    });
    var controlsModifier = new StateModifier({
        origin: [0.5, 1]
    });

    mainContext.add(controlsModifier).add(controls);

    mainContext.add(edgeswapper);

    Engine.on('keypress', function(event) {
        if (event.charCode == KeyCodes['m']){
            showNext();
        } else  if (event.charCode == KeyCodes['n']){
            showPrevious();
        }
    });
});
