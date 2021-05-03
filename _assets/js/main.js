//= require js/uswds.min.js
//= require gumshoe.min.js

var spy = new Gumshoe("#toc a", {
  nested: true,
  nestedClass: "active-parent"
});

var toc = document.getElementById("toc");
if (toc) {
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
