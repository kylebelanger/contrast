
/*  Contrast
 *  Google Chrome accessibility extension to invert webpage colors, and reduce contrast ranges.
 *
 *  Origin: June 16, 2016
 *  License: MIT
*/

/*  invertElements
 *  Invert DOM elements
 *
 *  @param Object - Element on DOM
*/
function invertElements(el) {

    // get element CSS
    var style = window.getComputedStyle(el);

    // set up CSS color props to check
    var prop = ['backgroundColor', 'color'];

    // check if element is SVG (i.e. canvas)
    if (el.nodeName.toLowerCase() == "svg" || el.nodeName.toLowerCase() == "rect") {

        // create RGB object
        var color = new RGBColor(style.fill);

        // update fill color
        el.style.fill = 'rgb(' + (255 - color.r) + ', ' + (255 - color.g) + ', ' + (255 - color.b) + ')';
    }
    else {
        // otherwise background color
        // for each color prop
        for (var p = 0; p < prop.length; p++) {
            // create RGB object
            var color = new RGBColor(style[prop[p]]);

            // if object created successfully
            if (color.ok) {
                // set inverted color
                el.style[prop[p]] = 'rgb(' + (255 - color.r) + ', ' + (255 - color.g) + ', ' + (255 - color.b) + ')';
            }
        }
    }

}

/*  eventListener
 *  Attach an event listener to document on load
 *
*/
document.addEventListener('DOMContentLoaded', function() {
    console.log("Loaded...");

    // invert body
    document.body.style.backgroundColor = "#000";

    // get all DOM elements in body
    var elements = document.body.getElementsByTagName("*");

    // set contrast for each element
    for (var i = 0; i < elements.length; i++) {
        invertElements(elements[i]);
    }

});
