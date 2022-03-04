import { getOffsetParam } from "./offsetUtils";
// Apply focus styling for the active button:
export default function applyFocusStyling() {
  // offset value in this case will equal the data-offset
  const allPaginationButtons = document.querySelectorAll("a.usa-pagination__button");
  const allButtonsArr = Array.prototype.slice.call(allPaginationButtons);
  const currentOffset = getOffsetParam();
  allButtonsArr.forEach(function(button) {
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
