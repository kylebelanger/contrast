/*  invertColors
 *
 *
 *
*/
function invertColors() {

  // set up color properties to iterate through
  var colorProperties = ['color', 'background-color'];

  //iterate through every element in reverse order...
  $("*").get().reverse().each(function() {
      var color = null;

      for (var prop in colorProperties) {
          prop = colorProperties[prop];

          //if we can't find this property or it's null, continue
          if (!$(this).css(prop)) continue;

          // if anchor tag
          if ($(this).closest('a').length) {
              $(this).css(prop, '#b1b1b1 !important');
          }
          else {
              //create RGBColor object
              color = new RGBColor($(this).css(prop));

              if (color.ok) {
                  //good to go, let's build up this RGB baby!
                  //subtract each color component from 255
                  $(this).css(prop, 'rgb(' + (255 - color.r) + ', ' + (255 - color.g) + ', ' + (255 - color.b) + ')');
              }
              color = null; //some cleanup
          }

      }
  });
}

invertColors();
