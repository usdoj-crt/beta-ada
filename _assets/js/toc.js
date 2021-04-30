//= require gumshoe.min.js

const spy = new Gumshoe("#toc a", {
  nested: true,
  nestedClass: "active-parent"
});

const toc = document.getElementById("toc");
if (toc) {
  toc.addEventListener("click", event => {
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
  const id = document.getElementById(hash);
  if (!id || !id.classList.contains("usa-accordion__heading")) return;
  const button = id.querySelector("button");

  if (button && button.getAttribute("aria-expanded") !== "true") {
    button.click();
  }
}
