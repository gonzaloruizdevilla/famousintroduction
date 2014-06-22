/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
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

   
    var steps = [
        'intro/step19',
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
        'intro/step18'
    ];
    

     // create the main context
    var mainContext = Engine.createContext();
    var edgeswapper = new EdgeSwapper();
    mainContext.add(edgeswapper); 


    function showNext(){
        var path = steps.shift();
        steps.push(path);
        edgeswapper.show(exampleAndCode(steps[0]));
    }

    function showPrevious(){
        var path = steps.pop();
        steps.unshift(path);
        edgeswapper.show(exampleAndCode(steps[0]));
    }

    edgeswapper.show(exampleAndCode(steps[0]));

    Engine.on('keypress', function(event) {
        if (event.charCode == KeyCodes['m']){
            showNext();
        } else  if (event.charCode == KeyCodes['n']){
            showPrevious();
        }
    });
});
