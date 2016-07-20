//-----------------------------------------//
//             zoomulator.js               //
//             version 1.0                 //
//               Lawo 2016                 //
//          simple pinned scale            //
//  give an element a class of zoomulator  //
//                                         //
//   notes:                                //
//      1. all positioning assumed to be   //
//          with transform translate       //
//      2. css top=0, left=0               //
//      3. function sets transform         //
//          origin to top left             //
//      4. more to come - just a start     //
//                                         //
//                                         //
//                                         //
//                                         //
//-----------------------------------------//



function zoomulator(element, zoomFactor, zoomAbsolute, zoomPointX, zoomPointY) {

    // well, seriously, this is technically a scale-U-lator ;)

    // props to this article for the "magic K"  - dont try to understand it, just enjoy it
    // http://stackoverflow.com/questions/2916081/zoom-in-on-a-point-using-scale-and-translate

    // element:      - the element to be scaled
    // zoomFactor:   - increment / absolute zoom amount based on the truthiness of zoomAbsolute
    // zoomAbsolute: - zoomFactor absolute (true) or relative (false)
    // zoomPointX, zoomPointY is the center of the zoom point...

    var $element = $(element);

    //element must have transform origin at top left
    $($element).css('transform-origin', '0 0 0');



    var currentX = parseFloat($element.attr('data-x') || 0);
    var currentY = parseFloat($element.attr('data-y') || 0);
    var currentZoom = parseFloat($element.attr('data-scale') || 1);
    var minZoom = parseFloat($element.attr('data-scaleMin') || .1);
    var maxZoom = parseFloat($element.attr('data-scaleMax') || 5);

    // turn the absolute zoomFactor into relative (if zoomAbsolute is true)
    if (zoomAbsolute) {
        zoomFactor = zoomFactor - currentZoom;
    }

    // calc new zoom
    var newZoom = currentZoom + zoomFactor;

    // min-max clamps
    if (newZoom < minZoom) {
        newZoom = minZoom;                          //clamp it to min
        zoomFactor = minZoom - currentZoom;          //adjust the zoomFactor
    }

    if (newZoom > maxZoom) {
        newZoom = maxZoom;                          //clamp it max
        zoomFactor = maxZoom - currentZoom;         //adjust the zoomFactor
    }

    var K = (currentZoom * currentZoom + currentZoom * zoomFactor);     // putting some magic
    var newX = currentX - ( (zoomPointX * zoomFactor) / K );
    var newY = currentY - ( (zoomPointY * zoomFactor) / K);

    // make it so
    $($element).css({transform: 'scale(' + newZoom + ')  translateX(' + newX + 'px) translateY(' + newY + 'px)'});

    // save (or create) in the elements attributes
    $element.attr('data-x', newX);
    $element.attr('data-y', newY);
    $element.attr('data-scale', newZoom);
    $element.attr('data-scaleMin', minZoom);
    $element.attr('data-scaleMax', maxZoom);

}


