//// Start up particles in background
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 125,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ababab"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 9
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 5.409158431828455,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 174.3848091455144,
        "size_min": 9.688044952528577,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ababab",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 205.87095524123225,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// HELPER FUNCTIONS
function setColor(c) {
  console.log("setting color..."); // DEBUGGING
  var text_c = "#000"; var bg_c = "#fff"; var header_c = "#aaa"; // init vals
  if (c === "light") {
    // set text+links to black, background to white, & headers to light grey
    text_c = "#000"; bg_c = "#fff"; header_c = "#aaa";
  } else if (c == "dark") {
    // set text+links to white, background to dark grey, & headers to light grey
    text_c = "#fff"; bg_c = "#222222"; header_c = "#aaa";
  } else if (c == "sepia") {
    // set text+links to dark maroon, background to beige, & headers to
    // light orange
    text_c = "#42210b"; bg_c = "#fff4dd"; header_c = "#ecac80";
  }
  // Make changes to CSS
  $("body").css("color", text_c);
  $("a,a\\:visited").css("color", text_c);
  $("body").css("background", bg_c);
  $(".section h3, .section:last-child").css("color", header_c);
}

function setCookie(c) {
  console.log("setting cookie..."); // DEBUGGING
  // Specify expiration of cookie
  var DAYS = 365; // default 1 year expiration
  var date = new Date();
  date.setTime(date.getTime() + (DAYS*24*60*60*1000));
  var expires = "; expires=" + date.toUTCString();
  // finally create cookie
  document.cookie = "background-color=" + c + expires + "; path=/";
}

var BR = "br";
var COLLAPSE_SELECTOR = ".collapse-arrow";
var DOT = ".";
var ITEM_HIDE = "item-hide";
var LI_CONTENT_SELECTOR = ".li-content";
var LI_ELLIPSIS_SELECTOR = " .li-ellipsis";
var SPACE = " ";
var TEXT_FADE = "text-fade";
function toggleFadeAndExpansion(obj) {
  var listItemClassName= $(obj).attr('class');
  var liContent = document.querySelector(DOT + listItemClassName + SPACE + LI_CONTENT_SELECTOR);
  if (liContent) {
    var liEllipsis = document.querySelector(DOT + listItemClassName + SPACE + LI_ELLIPSIS_SELECTOR);
    var collapseArrow = document.querySelector(DOT + listItemClassName + SPACE + COLLAPSE_SELECTOR);

    var hasTextFade = liContent.classList.contains(TEXT_FADE);
    if (hasTextFade) {
      liContent.classList.remove(TEXT_FADE);
      liEllipsis.classList.add(ITEM_HIDE);
      collapseArrow.classList.remove(ITEM_HIDE);
    } else {
      liContent.classList.add(TEXT_FADE);
      liEllipsis.classList.remove(ITEM_HIDE);
      collapseArrow.classList.add(ITEM_HIDE);
    }
  }
}

//// Check if a cookie with color settings exist
var bg_color = document.cookie.replace(
    /(?:(?:^|.*;\s*)background-color\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (bg_color) {
  // If so, then use those settings to set class=selected to selected color
  console.log("using existing cookie for color"); // DEBUGGING
  $('.scheme-palette>div[data-palette="'+bg_color+'"]').addClass('selected');
} else {
  // ...else default to dark...
  console.log("no cookie, creating one for color"); // DEBUGGING
  var DEFAULT = "dark";
  $('.scheme-palette>div[data-palette="'+DEFAULT+'"]').addClass('selected');
  // ...and init cookie
  setCookie(DEFAULT);
}

//// Set CSS depending on selected color
var color = $(".scheme-palette>div.selected").attr('data-palette');
setColor(color);

// Set click handlers for scheme palette
// TODO I think I can remove this wrapping (function () {...})() call
(function () {
  $(document).on('click', '.scheme-palette>div[data-palette="light"]',
    function() {
      $(".scheme-palette>div.selected").removeClass('selected');
      $(this).addClass('selected');

      setColor("light");
      setCookie("light");
    }
  );

  $(document).on('click', '.scheme-palette>div[data-palette="dark"]',
    function() {
      $(".scheme-palette>div.selected").removeClass('selected');
      $(this).addClass('selected');

      setColor("dark");
      setCookie("dark");
    }
  );

  $(document).on('click', '.scheme-palette>div[data-palette="sepia"]',
    function() {
      $(".scheme-palette>div.selected").removeClass('selected');
      $(this).addClass('selected');

      setColor("sepia");
      setCookie("sepia");
    }
  );
})();
