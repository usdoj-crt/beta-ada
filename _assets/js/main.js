//= require js/uswds.min.js
//= require gumshoe.polyfills.min.js
//= require anchor.min.js 
//= require ./search.js

var anchors = new AnchorJS();
anchors.add(".crt-page h2:not([class*='usa']) h2:not(.noAnchor)");

var toc = document.getElementById("toc");
if (toc) {
  var spy = new Gumshoe("#toc a", {
    nested: true,
    nestedClass: "active-parent"
  });

  toc.addEventListener("click", function(event) {
    if (event.target.tagName !== "A") return;
    expandPanel(event.target.hash);
  });
}

window.addEventListener("DOMContentLoaded", function() {
  if (location.hash) {
    expandPanel(location.hash);
  }
});

function expandPanel(hash) {
  hash = hash.replace("#", "");

  var id = document.getElementById(hash);
  if (!id || !id.classList.contains("usa-accordion__heading")) return;

  var button = id.querySelector("button");
  if (button && button.getAttribute("aria-expanded") !== "true") {
    button.click();
  }
}
