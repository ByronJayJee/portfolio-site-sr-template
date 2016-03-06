(function($) {
  "use strict"; // Start of use strict

  var shiftWindow = function() { scrollBy(0, -50) };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);

  $( "#hTog" ).click(function() {
    $( "#hWrap" ).toggleClass( "opened" );
  });

})(jQuery); // End of use strict
