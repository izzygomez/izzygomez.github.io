// Start up particles in background
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

// Click handlers for scheme palette
(function () {
  $(document).on('click', '.scheme-palette>div[data-palette="light"]', function() {
    $(".scheme-palette>div.selected").removeClass('selected');
    $(this).addClass('selected');

    // Make changes to CSS
    $("body").css("color", "#000"); // text black
    $("a,a:visited").css("color", "#000"); // also links black
    $("body").css("background", "#fff"); // background white
    $(".section h3, .section:last-child").css("color", "#aaa"); // h3/last-child to light grey
  });

  $(document).on('click', '.scheme-palette>div[data-palette="dark"]', function() {
    $(".scheme-palette>div.selected").removeClass('selected');
    $(this).addClass('selected');

    // Make changes to CSS
    $("body").css("color", "#fff"); // text white
    $("a,a:visited").css("color", "#fff"); // also links white
    $("body").css("background", "#222222"); // background dark grey
    $(".section h3, .section:last-child").css("color", "#aaa"); // h3/last-child to light grey
  });

  $(document).on('click', '.scheme-palette>div[data-palette="sepia"]', function() {
    $(".scheme-palette>div.selected").removeClass('selected');
    $(this).addClass('selected');

    // Make changes to CSS
    $("body").css("color", "#42210b"); // text dark maroon
    $("a,a:visited").css("color", "#42210b"); // also links dark maroon
    $("body").css("background", "#fff4dd"); // background to beige
    $(".section h3, .section:last-child").css("color", "#ecac80"); // h3/last-child to light orange
  });  
})();