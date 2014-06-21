/* globals define */
define(function(require, exports, module) {
    'use strict';
    var View    = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Scrollview = require('famous/views/Scrollview');
    var Engine = require('famous/core/Engine');
    var get = require('util/get');

    function getContentView(url) {
        var contentScroll = new Scrollview({});

        var centerModifier = new Modifier({
            origin: [0.25, 0.1]
        });

        var view = new View({});

        get(url).then(function(content) {
            var contentSurface = new Surface({
                size: [650, 1200],
                content: content,
                properties: {
                    paddingLeft: '20px'
                }
            });
            contentScroll.sequenceFrom([contentSurface]);
            contentSurface.pipe(contentScroll);
            view.add(centerModifier).add(contentScroll);
        })
        return view;
    }

    module.exports = getContentView;

});
