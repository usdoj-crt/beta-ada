//= require ./offsetUtils.js

// Apply focus styling for the active button:
function applyFocusStyling() {
  // offset value in this case will equal the data-offset
  var allPaginationButtons = document.querySelectorAll("a.usa-pagination__button");
  var allButtonsArr = Array.prototype.slice.call(allPaginationButtons);
  var currentOffset = offsetUtils.getOffsetParam();
  allButtonsArr.forEach((button) => {
    if (currentOffset === "" && button.dataset.offset === "0") {
      button.classList.add("usa-current");
      button.setAttribute('aria-current', 'true');
    }
    if (button.dataset.offset === currentOffset) {
      button.classList.add("usa-current");
      button.setAttribute('aria-current', 'true');
    }
  });
};
