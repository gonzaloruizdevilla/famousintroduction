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

    // create the main context
    var steps = [
        'intro/logo',
        'intro/intro',
        'intro/step01',
        'intro/step02',
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

    showNext();

    Engine.on('keypress', function(event) {
        if (event.charCode == KeyCodes['m']){
            showNext();
        } else  if (event.charCode == KeyCodes['n']){
            showPrevious();
        }
    });
});
