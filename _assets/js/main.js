//= require js/uswds.min.js
//= require gumshoe.polyfills.min.js

window.addEventListener("DOMContentLoaded", function() {
  var touchpoints = document.getElementById("fba-button");
  var touchpointsBtns = document.querySelectorAll(".touchpoints-btn");

  if (touchpoints && touchpointsBtns) {
    for (var i = 0; i < touchpointsBtns.length; i++) {
      touchpointsBtns[i].addEventListener("click", function(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        touchpoints.click();
      });
    }
  }
});

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
