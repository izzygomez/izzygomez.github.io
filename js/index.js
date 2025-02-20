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

// Color theme selection
// Currently defaults to: DARK.
// If this is changed, also update inline script in _includes/head.html
document.addEventListener("DOMContentLoaded", function () {
  const colorOptions = document.querySelectorAll(".color-option");

  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);

    // Update the selected state in UI
    colorOptions.forEach((option) => {
      option.classList.toggle(
        "selected",
        option.getAttribute("theme-option") === mode,
      );
    });
  }

  // Load stored theme or fallback to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  // Set event listeners for theme selection
  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedTheme = this.getAttribute("theme-option");
      setTheme(selectedTheme);
    });
  });
});
