/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface    = require('famous/core/Surface');
    var ContainerSurface    = require("famous/surfaces/ContainerSurface");
    var Scrollview = require('famous/views/Scrollview');

    var node = new RenderNode();


    var scrollview = new Scrollview();
    var horizontalScroll = new Scrollview({
        direction:0
    });

    var surfaces = [];
    var horizontalSurfaces = [];
    
    scrollview.sequenceFrom(surfaces);
    horizontalScroll.sequenceFrom(horizontalSurfaces);

    
    var horizontalContainer = new ContainerSurface({
        size:[undefined,300],
        properties: { overflow: 'hidden' }
    });
    horizontalContainer.add(horizontalScroll)
    horizontalScroll.pipe(scrollview);
    surfaces.push(horizontalContainer);

    for (var i = 0, temp; i < 40; i++) {
        temp = new Surface({
             content: 'Surface: ' + (i + 1),
             size: [undefined, 100],
             properties: {
                 backgroundColor: 'hsl(' + (i * 360 / 40) + ', 100%, 50%)',
                 lineHeight: '100px',
                 textAlign: 'center'
             }
        });

        temp.pipe(scrollview);
        surfaces.push(temp);
    }

    for (i = 0, temp; i < 40; i++) {
        temp = new Surface({
             content: 'Hor: ' + (i + 1),
             size: [80, 300],
             properties: {
                 backgroundColor: 'hsl(' + (i * 360 / 40) + ', 100%, 50%)',
                 lineHeight: '300px',
                 textAlign: 'center'
             }
        });

        temp.pipe(horizontalScroll);
        horizontalSurfaces.push(temp);
    }

    node.add(scrollview);
    module.exports = node;

});
