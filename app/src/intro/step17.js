/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');

    var node = new RenderNode();
    var grey = false;

    var surface = new Surface({
      size: [undefined, 100],
      content: 'click me',
      properties: {
        color: 'white',
        textAlign: 'center',
        lineHeight: '100px',
        backgroundColor: '#FA5C4F'
      }
    });

    node.add(surface);

    surface.on('click', function() {
      surface.setProperties({
        backgroundColor: (grey = !grey) ? '#878785' : '#FA5C4F'
      });
    });

    module.exports = node;

});
