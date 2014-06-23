/* globals define */
define(function(require, exports, module) {
    'use strict';
    
    var Surface = require('famous/core/Surface');
    

    var sourceSurface = new Surface({
        size : [window.innerWidth, window.innerHeight],
        content : '<iframe src="examples/Albumatic/index.html" style="width:100%; height:100%;"></iframe>',
        properties : {}
    });

    module.exports = sourceSurface;

});
