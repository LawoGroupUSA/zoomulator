/**
 * Created by jeff on 7/19/16.
 */

var app = {

    zoom: 1,
    canvasPositionX: 0,
    canvasPositionY: 0,
    mouseWheelScaler: -.05,

    scale: 1,
//----------------------------------------------------------
    makeNoise: function (soundNumber, volume) {

        var soundFile = [
            'OpenDoor.wav',
            'bloop.mp3',
            'Bounce2.wav',
            'click2.wav',
            'Coin.ogg',
            'Coin5.ogg',
            'Connect.WAV',
            'Drip1.wav',
            'NewPart.wav',
            'OpenDoor.wav',
            'Pop.wav',
            'woosh.mp3',
            'woosh1.mp3',
            'Purr.wav',
            'woosh.wav',
            'bluesstrum.wav',
            'blues.ogg'
        ];

        $('.audio').prop("volume", volume * .01);
        $('.audio').prop("src", 'sounds/' + soundFile[soundNumber]);
    },
//----------------------------------------------------------
    canvasTransformer: function (s, x, y) {
        var $canvas = $('#canvas');

        //$canvas.css({transform: 'translateX(' + x + 'px) translateY(' + y + 'px) scale(' + s + ')'});

        $canvas.css({transform: 'scale(' + s + ')  translateX(' + x + 'px) translateY(' + y + 'px)'});

    },
//----------------------------------------------------------
    canvasOriginSet: function (x, y) {
        var $canvas = $('#canvas');

        x = x + 'px';
        y = y + 'px';

        console.log('origin: ', x, y);

        // move the origin to the zoom point
        $canvas.css({'transform-origin': x + ' ' + y});

    }
//----------------------------------------------------------
//----------------------------------------------------------
};   /////// end of app. namespace /////////

//-----------------------event bindings-----------------------------------

//----------------------------------------------------------
$('.zoomulator')
    .on("mousewheel", function (event) {
        var scaleFactor = event.deltaY * app.mouseWheelScaler;
        zoomulator(event.target, scaleFactor, false, event.clientX, event.clientY);
    });

//----------------------------------------------------------

interact('.zoomulator')

    .on("down", function (event) {
        app.makeNoise(5, 30);
    })

    .on("up", function (event) {

    })

    .on("tap", function (event) {
    })

    .on("hold", function (event) {

    })

    .on("doubletap", function (event) {

    });

//----------------------------------------------------------












