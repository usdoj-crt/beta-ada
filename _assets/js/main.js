//= require js/uswds.min.js
//= require gumshoe.polyfills.min.js

document.querySelector("body").addEventListener("click", function(event) {
  console.log(event.target);
});

window.addEventListener("DOMContentLoaded", function() {
  var touchpointsBtns = document.querySelectorAll(".touchpoints-btn");

  if (touchpointsBtns) {
    for (var i = 0; i < touchpointsBtns.length; i++) {
      touchpointsBtns[i].addEventListener("click", function(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        document.getElementById("fba-button").click();
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
