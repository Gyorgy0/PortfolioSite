var slider;

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 450, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
  slider = new tns({
    container: '.my-slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    startIndex: 0,
    arrowKeys: true,
    fixedWidth: 600,
    edgePadding: 50,
    gutter: 50,
    controls: false,
    nav: false,
    controlsText: ['<','>'],
    responsive: {
      640: {
        fixedWidth: 600,
      },
      700: {
        fixedWidth: 600,
      },
      900: {
        fixedWidth: 600,
      }
    },
    mouseDrag: true,
  });
});