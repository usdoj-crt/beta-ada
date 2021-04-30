//= require gumshoe.min.js
//= require js/uswds.min.js

const spy = new Gumshoe("#toc a", {
  nested: true,
  nestedClass: "active-parent"
});

document.getElementById("toc").addEventListener("click", event => {
  const hash = event.target.hash.replace("#", "");
  const id = document.getElementById(hash);
  if (!id || !id.classList.contains("usa-accordion__heading")) return;
  const button = id.querySelector("button");

  if (button && button.getAttribute("aria-expanded") !== "true") {
    button.click();
  }
});
