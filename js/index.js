// HELPER FUNCTIONS
function setColor(c, smooth_transition = true) {
  var text_c = "#000";
  var bg_c = "#fff";
  var header_c = "#aaa";
  if (c === "light") {
    // set text+links to black, background to white, & headers to light grey
    text_c = "#000";
    bg_c = "#fff";
    header_c = "#aaa";
  } else if (c == "dark") {
    // set text+links to white, background to dark grey, & headers to light grey
    text_c = "#fff";
    bg_c = "#222222";
    header_c = "#aaa";
  } else if (c == "sepia") {
    // set text+links to dark maroon, background to beige, & headers to
    // light orange
    text_c = "#42210b";
    bg_c = "#fff4dd";
    header_c = "#ecac80";
  }

  // Make changes to CSS
  if (smooth_transition) {
    $("body").css("transition-property", "color, background");
    $("body").css("transition-duration", "1.5s");
    $("body").css("transition-timing-function", "ease-in-out");

    $("a,a\\:visited").css("transition", "color 1.5s ease-in-out");
  }
  $("body").css("color", text_c);
  $("body").css("background", bg_c);

  $("a,a\\:visited").css("color", text_c);
}

function setCookie(c) {
  // Specify expiration of cookie
  var DAYS = 7; // default 1 week expiration
  var date = new Date();
  date.setTime(date.getTime() + DAYS * 24 * 60 * 60 * 1000);
  var expires = "; expires=" + date.toUTCString();
  // finally create cookie
  document.cookie = "background-color=" + c + expires + "; path=/";
}

// Check if a cookie with color settings exist
var bg_color = document.cookie.replace(
  /(?:(?:^|.*;\s*)background-color\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);
if (bg_color) {
  // If so, then use those settings to set class=selected to selected color
  $('.color-option[data-palette="' + bg_color + '"]').addClass("selected");
} else {
  // ...else default to 'sepia'...
  var DEFAULT = "dark";
  $('.color-option[data-palette="' + DEFAULT + '"]').addClass("selected");
  // ...and init cookie
  setCookie(DEFAULT);
}

// Set CSS depending on selected color
var color = $(".color-option.selected").attr("data-palette");
setColor(color, /*smooth_transition=*/ false);

// Set click handlers for color palette
$(document).on("click", '.color-option[data-palette="light"]', function () {
  $(".color-option.selected").removeClass("selected");
  $(this).addClass("selected");

  setColor("light");
  setCookie("light");
});
$(document).on("click", '.color-option[data-palette="dark"]', function () {
  $(".color-option.selected").removeClass("selected");
  $(this).addClass("selected");

  setColor("dark");
  setCookie("dark");
});
$(document).on("click", '.color-option[data-palette="sepia"]', function () {
  $(".color-option.selected").removeClass("selected");
  $(this).addClass("selected");

  setColor("sepia");
  setCookie("sepia");
});

// Email obfuscation
// see: https://css-tricks.com/how-to-safely-share-your-email-address-on-a-website/
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // should be {{ site.email }}
    var encodedEmail = "aXp6eUBpenp5Z29tZXouY29t";
    // Select all elements with class "email"
    const emailElements = document.querySelectorAll(".email");
    emailElements.forEach((emailElement) => {
      emailElement.setAttribute("href", "mailto:".concat(atob(encodedEmail)));
    });
  }, 1000); // Delay de-obfuscating email for 1 second
});
