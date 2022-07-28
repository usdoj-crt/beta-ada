import Gumshoe from "gumshoejs"
import AnchorJS from "anchor-js";
import modal from "./modal";
import redirectModal from "./redirect-modal";
import printButton from "./print-button";
import print from "./print";
import search from "./search";

modal();
redirectModal();
print();
printButton();
search();

const anchors = new AnchorJS();
anchors.add(".crt-page h2:not([class*='usa']) h2:not(.noAnchor)");

const toc = document.getElementById("toc");
if (toc) {
  let spy = new Gumshoe("#toc a", {
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
  let hashReplaced = hash.replace("#", "");

  const id = document.getElementById(hashReplaced);
  if (!id || !id.classList.contains("usa-accordion__heading")) return;

  const button = id.querySelector("button");
  if (button && button.getAttribute("aria-expanded") !== "true") {
    button.click();
  }
}
