define(function(require, exports, module) {
    var Flipper    = require("famous/views/Flipper");
    var View    = require('famous/core/View');
    var Surface    = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');

    function exampleAndCode(url){
        var flipper = new Flipper();
        var content = require(url);
        var toggle = false;
        
        var viewSource = new Surface({
            size : [140, 60],
            content : 'Ver fuentes &#9658;',
            classes: ['ver-fuente'],
            properties: {
                zIndex: 10
            }
        }); 
        
        var viewExampleModifier = new StateModifier({
            origin: [1, 0]
        });

        var viewExample = new Surface({
            size : [140, 60],
            origin:[1, 0],
            content : '&#9668; Volver al ejemplo',
            classes: ['ver-ejemplo'],
            properties: {
                zIndex: 10
            }
        }); 
        
        function flip() {
            var angle = toggle ? 0 : Math.PI;
            flipper.setAngle(angle, {curve : 'easeOutBounce', duration : 500});
            toggle = !toggle;
        }

        viewSource.on('click', flip);
        viewExample.on('click', flip);
        
        var frontView = new View({
            size : [undefined, undefined],
            properties : {
                background : 'white'
            }
        });

        frontView.add(viewSource);
        var backView = new View({
            size : [window.innerWidth, window.innerHeight],
            properties : {
                background : 'white'
            }
        });

        backView.add(viewExampleModifier).add(viewExample);

        var sourceSurface = new Surface({
            size : [window.innerWidth, window.innerHeight],
            content : '<iframe src="source.html?source=' + escape(url) + '" style="width:100%; height:100%;"></iframe>',
            properties : {}
        });
        backView.add(sourceSurface);

        frontView.add(content);

        flipper.setFront(frontView);
        flipper.setBack(backView);

        return flipper;
    }


    module.exports = exampleAndCode
});