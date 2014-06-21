/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var EdgeSwapper = require('famous/views/EdgeSwapper');
    var logo = require('intro/logo');

    // create the main context
    var mainContext = Engine.createContext();
    var edgeswapper = new EdgeSwapper();
    mainContext.add(edgeswapper); 

    edgeswapper.show(logo);

});
