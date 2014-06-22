/* globals define */
define(function(require, exports, module) {
    'use strict';
    var RenderNode = require('famous/core/RenderNode');
    var Surface          = require("famous/core/Surface");
    var Transform        = require("famous/core/Transform");
    var Transitionable   = require("famous/transitions/Transitionable");
    var Easing           = require("famous/transitions/Easing");
    var ContainerSurface = require("famous/surfaces/ContainerSurface");
    var ScrollView       = require("famous/views/Scrollview");
    var StateModifier    = require('famous/modifiers/StateModifier');

    var node = new RenderNode();


    var surface = new Surface({
        size:[100,100],
        content: 'animame',
        classes: ['red-bg'],
        properties: {
          lineHeight: '100px',
          textAlign: 'center'
        }
    });

    var modifier = new StateModifier({
        origin: [.5,.5],
        transform: Transform.translate(100,-240,0)
    });

    node.add(modifier).add(surface);

    function _playCurve(curve){
        modifier.setTransform(Transform.translate(100,-240,0));
        modifier.setTransform(
            Transform.translate(100,0,0), 
            { curve: curve, duration: 1000}
        );
    }

    var curves = [];
    for(var curve in Easing){
        var surface = new Surface({
            size:[200,40],
            content: "<h3>" + curve + "</h3>",
            properties: {color:"#3cf", cursor: 'pointer'}
        });

        curves.push(surface);
        surface.on("click", 
            _playCurve.bind(null, Easing[curve])
        );
    }


    var scrollContainer = new ContainerSurface({
        size: [200,480],
        properties: {
            overflow:"hidden",
            border: "1px solid rgba(255,255,255, .8)",
            borderRadius: "10px 0px 0px 10px"
        }
    });

    var scrollView = new ScrollView({
        clipSize: 460
    });

    //set where the items come from 
    scrollView.sequenceFrom(curves);

    //give the scroll view input
    scrollContainer.pipe(scrollView);

    //add the scrollview to the scroll container
    scrollContainer.add(new StateModifier({transform: Transform.translate(20,0,0)})).add(scrollView);
    node.add(new StateModifier({origin: [.5,.5], transform: Transform.translate(-240,0,0)})).add(scrollContainer);
    
    module.exports = node;

});
