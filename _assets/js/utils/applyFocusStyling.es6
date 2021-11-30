//= require ./getOffsetParam.js

// Apply focus styling for the active button:
const applyFocusStyling = () => {
  // offset value in this case will equal the data-offset
  const allPaginationButtons = Array.from(
    document.querySelectorAll("a.usa-pagination__button")
  );
  const currentOffset = getOffsetParam();
  allPaginationButtons.forEach((button) => {
    if (currentOffset === "" && button.dataset.offset === "0") {
      button.classList.add("usa-current");
    }
    if (button.dataset.offset === currentOffset) {
      button.classList.add("usa-current");
    }
  });
};
