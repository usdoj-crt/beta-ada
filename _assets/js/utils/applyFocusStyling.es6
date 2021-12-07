//= require ./offsetUtils.js

// Apply focus styling for the active button:
const applyFocusStyling = () => {
  // offset value in this case will equal the data-offset
  const allPaginationButtons = document.querySelectorAll("a.usa-pagination__button");
  const allButtonsArr = Array.prototype.slice.call(allPaginationButtons);
  const currentOffset = offsetUtils.getOffsetParam();
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
